import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services';

@Component({
  selector: 'app-padding',
  templateUrl: './padding.component.html',
  styleUrls: ['./padding.component.css']
})
export class PaddingComponent  {
  map: any;

  constructor(    private mapService: MapService) { }

 


  toggleSidebar(id: string) {
    const elem = document.getElementById(id);
    // Add or remove the 'collapsed' CSS class from the sidebar element.
    // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
    if (elem === null) throw new Error("El campo elem es nulo!");

    const collapsed = elem.classList.toggle('collapsed');
    let padding = {};
    // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
    padding = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
    // Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
    this.map.easeTo({
      padding: padding,
      duration: 1000 // In ms. This matches the CSS transition duration property.
    });
  }
  /*
  map.on('load', () => {
      toggleSidebar('left');
  });*/

}
