import { NgModule } from '@angular/core';

import { WhiteLoaderComponent } from './components/loader-white/loader-white.component';
import { DataService, GeneralDataService } from './services';

@NgModule({
    imports: [],
    exports: [
        WhiteLoaderComponent,
    ],
    declarations: [
        WhiteLoaderComponent,
    ],
    providers: [
        GeneralDataService,
        DataService,
    ],
})
export class SharedModule { }
