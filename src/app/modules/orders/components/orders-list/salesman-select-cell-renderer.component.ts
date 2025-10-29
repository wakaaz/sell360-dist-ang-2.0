import { Component, ViewEncapsulation } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-salesman-select-cell-renderer',
  template: `
    <ng-select
      [items]="salesMen"
      bindLabel="name"
      bindValue="id"
      placeholder="Select Salesman"
      [clearable]="true"
      [searchable]="true"
      (change)="onSelectionChange($event)"
      [(ngModel)]="selectedValue"
      [appendTo]="'body'"
      class="w-full"
      style="width: 95%!important; font-size: 14px;"
    >
    </ng-select>
  `,
  styles: [`
    /* Minimal styling - let ng-select use its default theme */
    ::ng-deep .ng-select .ng-select-container {
      min-height: 25px !important;
      height: 25px !important;
    }
    
    ::ng-deep .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {
      top: 0 !important;
    }
    
    /* Make dropdown visible above ag-grid */
    ::ng-deep .ng-dropdown-panel {
      z-index: 9999 !important;
    }
    
    /* Allow dropdown to overflow grid cell */
    :host {
      overflow: visible !important;
    }
    
    /* Dark mode support */
    ::ng-deep .dark .ng-select .ng-select-container {
      background-color: #2d2d2d !important;
      border-color: #444 !important;
      color: #e0e0e0 !important;
    }
    
    ::ng-deep .dark .ng-select .ng-value-container .ng-value,
    ::ng-deep .dark .ng-select .ng-value-container .ng-placeholder {
      color: #e0e0e0 !important;
    }
    
    ::ng-deep .dark .ng-select input {
      color: #e0e0e0 !important;
    }
    
    ::ng-deep .dark .ng-dropdown-panel {
      background-color: #1a1a1a !important;
      border-color: #444 !important;
    }
    
    ::ng-deep .dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {
      background-color: #1a1a1a !important;
      color: #e0e0e0 !important;
    }
    
    ::ng-deep .dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {
      background-color: #2d2d2d !important;
    }
    
    ::ng-deep .dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected {
      background-color: #0038ba !important;
      color: white !important;
    }
  `],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class SalesmanSelectCellRendererComponent implements ICellRendererAngularComp {
  params!: ICellRendererParams & { salesMen: (() => any[]) | any[], onSelectSalesman: (order: any, salesman: any) => void };
  salesMen: any[] = [];
  selectedValue: any = null;
  
  agInit(params: ICellRendererParams & { salesMen: (() => any[]) | any[], onSelectSalesman: (order: any, salesman: any) => void }): void {
    this.params = params;
    // Handle salesMen as either a function or an array
    this.salesMen = typeof params.salesMen === 'function' ? params.salesMen() : (params.salesMen || []);
    
    // Set initial value if order already has a selectedSaleman (use ID for binding)
    if (params.data.selectedSaleman) {
      this.selectedValue = params.data.selectedSaleman.id;
    }
  }
  
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  
  onSelectionChange(selection: any): void {
    console.log('Selection changed:', selection);
    // Check if it's an object or ID
    let selectedSalesman: any;
    let salesmanId: any;
    
    if (typeof selection === 'object' && selection !== null) {
      // ng-select passed the full object
      selectedSalesman = selection;
      salesmanId = selection.id;
    } else {
      // ng-select passed just the ID
      salesmanId = selection;
      selectedSalesman = this.salesMen.find(s => s.id === salesmanId);
    }
    
    console.log('Selected salesman:', selectedSalesman);
    if (selectedSalesman) {
      this.params.data.selectedSaleman = selectedSalesman;
      this.selectedValue = salesmanId; // Update the bound value with ID
      console.log('Calling onSelectSalesman callback');
      if (this.params.onSelectSalesman) {
        this.params.onSelectSalesman(this.params.data, selectedSalesman);
      }
    }
  }
}

