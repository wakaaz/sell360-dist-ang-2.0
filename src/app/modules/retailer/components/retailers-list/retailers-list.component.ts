import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { RetailerService } from '../../services/retailer.service';

@Component({
    selector: 'app-retailers-list',
    templateUrl: 'retailers-list.component.html',
    styleUrls: ['./retailers-list.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class RetalersListComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    orderBooker: string;
    route: string;
    segment: string;
    shwoSaleManLedger: boolean;
    retailers = [];
    loading: boolean;

    constructor(
        private retailerService: RetailerService,
        private toastService: ToasterService,
    ) {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.loading = true;
        this.retailerService.getRetailerListing().subscribe(res => {
            console.log('retailers => ', res[0]);
            this.loading = false;
            this.retailers = res;
        }, error => {
            if (error.status !== 401 && error.status !== 1) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'Salesmen not fetched, try again later.',
                    type: 'error'
                });
            }
        });
    }

    openSalemanLedger(event: Event): void {
        event.stopPropagation();
        this.shwoSaleManLedger = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('retailer-list').classList.add('blur-div');
    }

    clickedOutSide(event: Event): void {
        if (this.shwoSaleManLedger && !(event.target as HTMLElement).classList.contains('paginate_button')) {
            this.closeSalemanLedger();
        }
    }

    closeSalemanLedger(): void {
        this.shwoSaleManLedger = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('retailer-list').classList.remove('blur-div');
    }

    goToProfile(): void {
        console.log('Coming soon!');
    }

}
