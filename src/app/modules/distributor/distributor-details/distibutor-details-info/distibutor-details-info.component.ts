import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IDistributor } from '../distributor-details.utils';
import { Loader, LoaderOptions } from 'google-maps';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-distibutor-details-info',
  standalone: false,
  templateUrl: './distibutor-details-info.component.html',
  styleUrl: './distibutor-details-info.component.css',
})
export class DistibutorDetailsInfoComponent implements OnInit, OnDestroy {
  @Input() distributor: IDistributor | null = null;
  showMapModal: boolean = false;
  private map: google.maps.Map | null = null;
  private marker: google.maps.Marker | null = null;
  private loader: Loader | null = null;
  private options: LoaderOptions = {};

  constructor() {}

  private getLoader(): Loader {
    if (!this.loader) {
      this.loader = new Loader(environment.googleMapsApiKey, this.options);
    }
    return this.loader;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.map) {
      this.map = null;
    }
    if (this.marker) {
      this.marker = null;
    }
  }

  openMapModal(): void {
    if (!this.distributor || !this.distributor.distributor_lats || !this.distributor.distributor_longs) {
      return;
    }
    this.showMapModal = true;
    // Initialize map after modal is shown
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  closeMapModal(): void {
    this.showMapModal = false;
    if (this.map) {
      this.map = null;
    }
    if (this.marker) {
      this.marker = null;
    }
  }

  private initMap(): void {
    if (!this.distributor || !this.distributor.distributor_lats || !this.distributor.distributor_longs) {
      return;
    }

    const lat = this.distributor.distributor_lats;
    const lng = this.distributor.distributor_longs;

    // Clear existing map if any
    if (this.map) {
      this.map = null;
    }
    if (this.marker) {
      this.marker = null;
    }

    this.getLoader().load().then((google) => {
      const mapElement = document.getElementById('distributorMap');
      if (!mapElement) {
        return;
      }

      // Clear the map element
      mapElement.innerHTML = '';

      this.map = new google.maps.Map(mapElement, {
        center: { lat, lng },
        zoom: 15,
      });

      this.marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.map,
        title: this.distributor?.distributor_name || 'Distributor Location',
      });
    }).catch((error) => {
      console.error('Error loading Google Maps:', error);
    });
  }
}
