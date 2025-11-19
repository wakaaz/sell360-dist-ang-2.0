import { Component, Input } from '@angular/core';
import { IDistributor } from '../distributor-details.utils';

@Component({
  selector: 'app-distibutor-details-info',
  standalone: false,
  templateUrl: './distibutor-details-info.component.html',
  styleUrl: './distibutor-details-info.component.css',
})
export class DistibutorDetailsInfoComponent {
  @Input() distributor: IDistributor | null = null;
}
