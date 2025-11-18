import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DataTableDirective } from 'angular-datatables';
import { from, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

import { ToasterService } from 'src/app/core/services/toaster.service';
import { addSalemens, addSaleman, updateSaleman } from '../../reducers/salesmen.reducer';
import { getSalemenState } from '../../selectors/base.selector';

import { GeneralDataService } from '../../../shared/services';
import { SalesmenService } from '../../services/salesmen.service';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

    selector: 'app-salesmenlist-component',
    templateUrl: 'salesmen-list.component.html',
    styleUrls: ['./salesmen-list.component.css'],
    encapsulation: ViewEncapsulation.None,
  standalone: false


})

export class SalesmenListComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(DataTableDirective, { static: false })
    dtSalesmen: DataTableDirective;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    private gridApi!: GridApi;
    
    columnDefs: ColDef[] = [
        { field: 'id', headerName: 'ID', sortable: true, filter: true, width: 140 },
        { field: 'name', headerName: 'Name', sortable: true, filter: true, flex: 1 },
        { field: 'phone', headerName: 'Phone', sortable: true, filter: true, width: 140 },
        {
            field: 'actions',
            headerName: 'Action',
            cellRenderer: (params: any) => {
                const saleman = params.data;
                return `
                    <div class="flex gap-1">
                        <button onclick="window.editSaleman(${saleman.id})" 
                            class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5">
                            Edit
                        </button>
                    </div>
                `;
            },
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
            },
            width: 100,
            sortable: false,
            filter: false,
            pinned: 'right'
        }
    ];

    defaultColDef: ColDef = {
        resizable: true,
        sortable: true,
        filter: true
    };

    salesMen: Array<any> = [];
    segments: Array<any> = [];
    selectedSegments: Array<number> = [];
    tableUpdated: boolean;

    newEmployee: boolean;
    submitted: boolean;
    isSalemanChanging: boolean;
    loading: boolean;
    salemenError: boolean;

    name: string;
    cnic: string;
    phone: string;
    salary: string;

    selectedSaleman: any;
    success: string;
    error: string;

    nameRegex: RegExp = /^(?:[A-Za-z]+)(?:[A-Za-z0-9 _]*)$/;
    numbersRegex: RegExp = /^\d+$/;
    salaryRegex: RegExp = /^(?!0+(?:\.0+)?$)[0-9]+(?:\.[0-9]+)?$/;

    constructor(
        private router: Router,
        private store: Store<{}>,
        private generalDataService: GeneralDataService,
        private salemenService: SalesmenService,
        private toastService: ToasterService,
    ) {
        this.segments = [];
        this.selectedSegments = [];
    }

    ngOnInit(): void {
        this.submitted = false;
        this.salemenError = false;
        this.selectedSaleman = null;
        this.tableUpdated = false;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.store.pipe(select(getSalemenState)).subscribe(state => {
            if (this.salesMen.length && !this.loading) {
                this.tableUpdated = true;
            }
            this.salesMen = Object.keys(state.entities).map(key => {
                return state.entities[key];
            });
            if (this.tableUpdated) {
                this.rerenderSalemenTable();
                this.tableUpdated = false;
            }
        });
        this.getAllSegments();
        this.getAllSalemen();
        
        // Make editSaleman available globally for AG Grid cell renderer
        (window as any).editSaleman = (salemanId: number) => {
            console.log('salemanId :>> ', salemanId);
            const saleman = this.salesMen.find(s => s.id === salemanId);
            console.log('saleman :>> ', saleman);
            if (saleman) {
                console.log('\n\n in this is  ');
                this.openNewEmployeeForm(new Event('click'), saleman);
            }
        };
    }
    
    onGridReady(params: GridReadyEvent): void {
        this.gridApi = params.api;
    }
    
    onQuickFilterChanged(event: any): void {
        const filterValue = event.target.value;
        if (this.gridApi) {
            this.gridApi.setGridOption('quickFilterText', filterValue);
        }
    }

    ngAfterViewInit(): void {
    }

    getAllSalemen(): void {
        this.loading = true;
        this.generalDataService.getAllSalesMen().subscribe((res: any) => {
            this.loading = false;
            if (res.status === 200) {
                this.salemenError = false;
                this.store.dispatch(addSalemens(res.data));
                setTimeout(() => {
                    this.dtTrigger.next(null);
                }, 200);
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'Salemens cannot be fetched at the moment.',
                    type: 'error'
                });
            }
        });
    }

    getAllSegments(): void {
        this.salemenService.getAllSegments().subscribe(res => {
            if (res.status === 200) {
                this.segments = res.data || [];
                console.log('Segments loaded:', this.segments);
            }
        }, error => {
            console.log('Segments Error :>>', error);
            this.segments = [];
        });
    }

    openNewEmployeeForm(event: Event, selectedSaleman?: any): void {
        console.log('selectedSaleman :>> ', selectedSaleman);
        event.stopPropagation();
        
        // Ensure segments are loaded
        if (!this.segments || this.segments.length === 0) {
            this.getAllSegments();
        }
        console.log('this.segments :>> ', this.segments);

        if (selectedSaleman) {
            this.selectedSaleman = selectedSaleman;
            this.name = selectedSaleman.name ? selectedSaleman.name : '';
            this.cnic = selectedSaleman.cnic ? selectedSaleman.cnic : '';
            this.phone = selectedSaleman.phone ? selectedSaleman.phone : '';
            this.salary = selectedSaleman.salary ? selectedSaleman.salary : '';
            this.selectedSegments = selectedSaleman.segments_id ? JSON.parse(selectedSaleman.segments_id).map(id => Number(id)) : [];
            this.addFocusWhenUpdating();
        } else {
            this.selectedSaleman = null;
            this.selectedSegments = [];
        }
        this.newEmployee = true;
        document.body.classList.add('no-scroll');
    }

    clickOutSide(event: Event): void {
        const target = event.target as HTMLElement;
        // Don't close if clicking on nz-select dropdown or inside the sidebar content
        if (target.closest('.ant-select-dropdown') || target.closest('.ant-select')) {
            return;
        }
        // Close if clicking outside (on the backdrop)
        this.closeNewEmployeeForm();
    }

    closeNewEmployeeForm(): void {
        this.newEmployee = false;
        document.body.classList.remove('no-scroll');
        this.resetValues();
        this.router.navigateByUrl('/salesmen');
    }

    addFocusWhenUpdating(): void {
        document.getElementById('saleman-name').parentElement.classList.add('focused');
        document.getElementById('saleman-cnic').parentElement.classList.add('focused');
        document.getElementById('saleman-salary').parentElement.classList.add('focused');
        document.getElementById('saleman-phone').parentElement.classList.add('focused');
    }

    focused(event: Event): void {
        (event.target as HTMLElement).parentElement.classList.add('focused');
    }

    left(event: Event): void {
        if (!(event.target as HTMLInputElement).value) {
            (event.target as HTMLElement).parentElement.classList.remove('focused');
        }
    }

    addNewSaleman(): void {
        this.submitted = true;
        if (!this.isFormValid()) {
            return;
        } else {
            this.isSalemanChanging = true;
            const saleman = {
                name: this.name,
                cnic: this.cnic,
                phone: this.phone,
                salary: this.salary,
                segments_id: this.selectedSegments
            };
            this.salemenService.addNewSaleman(saleman).subscribe(res => {
                this.submitted = false;
                this.isSalemanChanging = false;
                this.tableUpdated = true;
                this.store.dispatch(addSaleman(res.data));
                this.toastService.showToaster({
                    title: 'Saleman Added:',
                    message: this.name + ' added successfully.',
                    type: 'success'
                });
                this.resetValues();
                this.closeNewEmployeeForm();
            }, error => {
                this.submitted = false;
                this.isSalemanChanging = false;
                if (error.status !== 1) {
                    this.toastService.showToaster({
                        title: 'Add Saleman Error:',
                        message: 'Something went wrong please try again later!',
                        type: 'error'
                    });
                }
                console.log('error :>> ', error);
            });
        }
    }

    updateSaleman(): void {
        this.submitted = true;
        if (!this.isFormValid()) {
            return;
        } else {
            this.isSalemanChanging = true;
            const saleman = {
                name: this.name,
                cnic: this.cnic,
                phone: this.phone,
                salary: this.salary,
                segments_id: this.selectedSegments
            };
            this.salemenService.updateSaleman(saleman, this.selectedSaleman.id).subscribe(res => {
                this.submitted = false;
                this.isSalemanChanging = false;
                this.tableUpdated = true;
                this.store.dispatch(updateSaleman(res.data));
                this.toastService.showToaster({
                    title: 'Update Saleman:',
                    message: res.data.name + ' updated successfully.',
                    type: 'success'
                });
                this.resetValues();
                this.closeNewEmployeeForm();
            }, error => {
                this.submitted = false;
                this.isSalemanChanging = false;
                if (error.status !== 1) {
                    this.toastService.showToaster({
                        title: 'Update Saleman Error:',
                        message: 'Something went wrong please try again later!',
                        type: 'error'
                    });
                }
                console.log('error :>> ', error);
            });
        }
    }

    rerenderSalemenTable(): void {
        if (this.dtSalesmen) {
            from(this.dtSalesmen.dtInstance)
                .pipe(tap(dt => dt.destroy()))
                .subscribe(fr => {
                    this.dtTrigger.next(null);
                });
        }
    }

    isFormValid(): boolean {
        this.submitted = true;
        if (!this.name || !this.phone || !this.cnic || !this.selectedSegments.length || !this.nameRegex.test(this.name)
            || !this.numbersRegex.test(this.phone)
            || !this.numbersRegex.test(this.cnic)
            || !this.salaryRegex.test(this.salary)) {
            return false;
        } else {
            return true;
        }
    }

    trackBySegmentId(index: number, segment: any): any {
        return segment ? segment.id : index;
    }

    resetValues(): void {
        this.selectedSaleman = null;
        this.name = '';
        this.cnic = '';
        this.phone = '';
        this.salary = '';
        this.selectedSegments = [];
        if (document.getElementById('saleman-name')) {
            document.getElementById('saleman-name').parentElement.classList.remove('focused');
        }
        if (document.getElementById('saleman-cnic')) {
            document.getElementById('saleman-cnic').parentElement.classList.remove('focused');
        }
        if (document.getElementById('saleman-salary')) {
            document.getElementById('saleman-salary').parentElement.classList.remove('focused');
        }
        if (document.getElementById('saleman-phone')) {
            document.getElementById('saleman-phone').parentElement.classList.remove('focused');
        }
    }

    ngOnDestroy(): void {
    }

}
