import { Component, ViewEncapsulation } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-salesman-select-cell-renderer',
  template: `
    <nz-select
      nzShowSearch
      nzAllowClear
      [(ngModel)]="selectedValue"
      (ngModelChange)="onSelectionChange($event)"
      nzPlaceHolder="Select Salesman"
      [nzDropdownMatchSelectWidth]="false"
      [nzDropdownStyle]="{ 'z-index': '9999' }"
      style="width: 95%!important; font-size: 14px;"
      class="salesman-select"
    >
      <nz-option
        *ngFor="let salesman of salesMen"
        [nzValue]="salesman.id"
        [nzLabel]="salesman.name"
      ></nz-option>
    </nz-select>
  `,
  styles: [`
    /* Ant Design Select styling - Base */
    :host {
      overflow: visible !important;
      display: block;
    }
    
    /* Light Mode - Select Container */
    ::ng-deep .salesman-select .ant-select-selector {
      min-height: 25px !important;
      height: 25px !important;
      padding: 0 8px !important;
      font-size: 14px !important;
      border-radius: 5px !important;
      background-color: #ffffff !important;
      border-color: #d9d9d9 !important;
      transition: all 0.3s !important;
    }
    
    ::ng-deep .salesman-select .ant-select-selection-item {
      line-height: 23px !important;
      font-size: 14px !important;
      color: rgba(0, 0, 0, 0.88) !important;
    }
    
    ::ng-deep .salesman-select .ant-select-selection-placeholder {
      line-height: 23px !important;
      font-size: 14px !important;
      color: rgba(0, 0, 0, 0.25) !important;
    }
    
    /* Light Mode - Focus and Hover States with Primary Color */
    ::ng-deep .salesman-select.ant-select-focused .ant-select-selector,
    ::ng-deep .salesman-select:not(.ant-select-disabled):hover .ant-select-selector {
      border-color: #0038ba !important;
      box-shadow: 0 0 0 2px rgba(0, 56, 186, 0.1) !important;
    }
    
    /* Light Mode - Dropdown (default) */
    ::ng-deep .ant-select-dropdown {
      z-index: 9999 !important;
      border-radius: 5px !important;
      background-color: #ffffff !important;
      box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05) !important;
    }
    
    /* Light Mode - Dropdown Items */
    ::ng-deep .ant-select-item {
      background-color: #ffffff !important;
      color: rgba(0, 0, 0, 0.88) !important;
      transition: background-color 0.2s !important;
    }
    
    ::ng-deep .ant-select-item-option-hover:not(.ant-select-item-option-disabled) {
      background-color: #f5f5f5 !important;
    }
    
    ::ng-deep .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background-color: #e6f4ff !important;
      color: #0038ba !important;
      font-weight: 500 !important;
    }
    
    ::ng-deep .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
      background-color: #f5f5f5 !important;
    }
    
    /* Dark Mode - Select Container */
    ::ng-deep .dark .salesman-select .ant-select-selector,
    ::ng-deep html.dark .salesman-select .ant-select-selector {
      background-color: #141414 !important;
      border-color: #434343 !important;
      color: #ffffff !important;
      border-radius: 5px !important;
    }
    
    ::ng-deep .dark .salesman-select .ant-select-selection-item,
    ::ng-deep html.dark .salesman-select .ant-select-selection-item {
      color: #ffffff !important;
    }
    
    ::ng-deep .dark .salesman-select .ant-select-selection-placeholder,
    ::ng-deep html.dark .salesman-select .ant-select-selection-placeholder {
      color: rgba(255, 255, 255, 0.65) !important;
    }
    
    /* Dark Mode - Focus and Hover States with Primary Color */
    ::ng-deep .dark .salesman-select.ant-select-focused .ant-select-selector,
    ::ng-deep .dark .salesman-select:not(.ant-select-disabled):hover .ant-select-selector {
      border-color: #0038ba !important;
      box-shadow: 0 0 0 2px rgba(0, 56, 186, 0.2) !important;
    }
    
    /* Dark Mode - Dropdown (Global styles handle colors, here we ensure z-index) */
    ::ng-deep .dark .ant-select-dropdown,
    ::ng-deep html.dark .ant-select-dropdown {
      z-index: 9999 !important;
    }
    
    /* Clear button styling - Light Mode */
    ::ng-deep .salesman-select .ant-select-clear {
      color: rgba(0, 0, 0, 0.25) !important;
      font-size: 12px !important;
    }
    
    ::ng-deep .salesman-select .ant-select-clear:hover {
      color: rgba(0, 0, 0, 0.45) !important;
    }
    
    /* Clear button styling - Dark Mode */
    ::ng-deep .dark .salesman-select .ant-select-clear,
    ::ng-deep html.dark .salesman-select .ant-select-clear {
      color: rgba(255, 255, 255, 0.85) !important;
      background-color: rgba(255, 255, 255, 0.15) !important;
      border-radius: 50% !important;
      transition: all 0.2s !important;
      width: 16px !important;
      height: 16px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    
    ::ng-deep .dark .salesman-select .ant-select-clear-icon,
    ::ng-deep html.dark .salesman-select .ant-select-clear-icon {
      color: rgba(255, 255, 255, 0.85) !important;
      font-size: 12px !important;
    }
    
    ::ng-deep .dark .salesman-select .ant-select-clear:hover,
    ::ng-deep html.dark .salesman-select .ant-select-clear:hover {
      color: #ffffff !important;
      background-color: rgba(255, 255, 255, 0.25) !important;
    }
    
    ::ng-deep .dark .salesman-select .ant-select-clear:hover .ant-select-clear-icon,
    ::ng-deep html.dark .salesman-select .ant-select-clear:hover .ant-select-clear-icon {
      color: #ffffff !important;
    }
    
    /* Arrow icon styling */
    ::ng-deep .salesman-select .ant-select-arrow {
      color: rgba(0, 0, 0, 0.25) !important;
    }
    
    ::ng-deep .dark .salesman-select .ant-select-arrow,
    ::ng-deep html.dark .salesman-select .ant-select-arrow {
      color: rgba(255, 255, 255, 0.65) !important;
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
    // Ant Design Select passes the selected value (ID) directly
    let salesmanId: any = selection;
    let selectedSalesman: any = null;
    
    if (salesmanId !== null && salesmanId !== undefined) {
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
    } else if (salesmanId === null || salesmanId === undefined) {
      // Handle clear action
      this.params.data.selectedSaleman = null;
      this.selectedValue = null;
    }
  }
}

