import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';
import 'leaflet-routing-machine';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  private map;
  constructor(private markerService: MarkerService) { }
tiles;
marker;
pointA;
pointB;
polyline;
prevpath;
prevMarker;
  ngOnInit() {
  this.map = L.map('map').setView([17.407332, 78.444923], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

  L.marker([17.407332, 78.444923]).addTo(this.map)
        .bindPopup('Osos pvt ltd.<br> making tech useful.');
       // .openPopup();

  this.pointA = new L.LatLng(17.407332, 78.444923);
  L.circle([17.407332, 78.444923], 300).addTo(this.map);

  if (L.marker !== undefined) {
        this.map.removeLayer(L.marker);
  }

  this.map.on('click', (e) => {
        console.log(e.latlng);
        this.newMarker(e);
      });

  }

  onMapReady(map: L.Map) {
    map.invalidateSize();
 }

  ngAfterViewInit() {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);

  }

   newMarker(e) {
     if (this.prevpath !== undefined) {
      this.prevpath.spliceWaypoints(0, 2);
     }
     this.marker = undefined;
    // console.log('event is ', e );
    // console.log('marker is ', this.marker);

     if (this.marker === undefined) {

} else {
  this.map.removeLayer(this.marker);
}

     if (this.polyline !== undefined) {
  this.map.removeLayer(this.polyline);
}
     this.pointB = new L.LatLng(e.latlng.lat, e.latlng.lng);
    // this.marker = L.marker(e.latlng).addTo(this.map);
     this.prevMarker =  L.marker(e.latlng);
     console.log('marker after is', this.marker);


     const pointList = [this.pointA, this.pointB];



     this.prevpath =  L.Routing.control({
      waypoints: [
          L.latLng(17.407332, 78.444923),
          L.latLng(e.latlng.lat, e.latlng.lng)
      ]
  }).addTo(this.map);
}

  private initMap(): void {
    this.map = L.map('map', {
      center: [17.407300, 78.444900],
      zoom: 4
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

  }


}
