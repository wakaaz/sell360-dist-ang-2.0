import { NgModule } from '@angular/core';

import { WhiteLoaderComponent } from './components/loader-white/loader-white.component';
import { DataService } from './services/data.service';

@NgModule({
    imports: [],
    exports: [
        WhiteLoaderComponent,
    ],
    declarations: [
        WhiteLoaderComponent,
    ],
    providers: [
        DataService
    ],
})
export class SharedModule { }
