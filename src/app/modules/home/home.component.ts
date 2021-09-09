import { Component, OnInit } from '@angular/core';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';

import { LocalStorageService } from 'src/app/core/services/storage.service';
import { HomeService } from './services/home.service';

@Component({
    selector: 'app-home-component',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    loading: boolean;
    distributor: any;
    homeReport: any;
    homeReportMonthly: any;

    constructor(
        private storageService: LocalStorageService,
        private homeService: HomeService,
    ) { }

    ngOnInit(): void {
        this.loading = false;
        this.distributor = this.storageService.getItem(localStorageKeys.distributor);
        this.getDashboardData();
    }

    getDashboardData(): void {
        this.loading = true;
        this.homeService.getDashboardData().subscribe(res => {
            this.homeService.getHomeDailyReport().subscribe(data => {
                console.clear();
                console.log('daily => ', data);
                this.homeReport = data;
                this.loading = false;
                this.homeService.getHomeDailyReport(true).subscribe(monthlyReport => {
                    this.homeReportMonthly = monthlyReport;
                });
            }, error => {
                this.loading = false;
                console.log('Home Daily report API error :>> ', error);
            });
        }, error => {
            this.loading = false;
            console.log('Home dashboard API error :>> ', error);
        });
    }

}
