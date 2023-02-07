import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService, MapService } from '../../services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(

    private placesService: PlacesService,
    private mapService: MapService,
    private toastr: ToastrService

  ) { }

  ngAfterViewInit(): void {

    if (!this.placesService.useLocation) {
      this.toastr.error('Ubicacion del usuario no encontrada!', 'Error');
      throw new Error("Ubicacion del usuario no encontrada!");
    }

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
      center: this.placesService.useLocation,
      zoom: 10, // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aqui estoy</h6>
        <span>Estoy en este lugar del mundo</span>
        
        `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.useLocation)
      .setPopup(popup)
      .addTo(map)

    this.mapService.setMap(map);




  }

}
