import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.component.html',
  styleUrls: ['./mis-viajes.component.css']
})
export class MisViajesComponent implements OnInit {
  viajes: any[] = [];
  constructor(

    private viajesService: ViajesService,
    private toatr: ToastrService

  ) { }

  ngOnInit(): void {
  }

  consultarViajes() {
    this.viajesService.consultarViajes().subscribe(data => {

      this.viajes = [];

      data.forEach((element: any) => {

        this.viajes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });

      console.log(this.viajes);

    });
  }


  borrarViaje(id: string) {
    this.viajesService.eliminarViaje(id).then(() => {
      console.log('Elimiando');
      this.toatr.error('Registro eliminado correctamente', 'Borrado');
    }).catch(error => {
      console.log(error);
      this.toatr.error(error, 'Error en borrado');
    })
  }

}
