import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LawsService } from 'src/app/services/laws.service';

@Component({
  selector: 'app-result-laws',
  templateUrl: './result-laws.component.html',
  styleUrls: ['./result-laws.component.css']
})
export class ResultLawsComponent implements OnInit {

  laws: any[] = [];

  constructor(
    private lawService: LawsService,
    private toatr: ToastrService
    
    ) { }

  ngOnInit(): void {
    this.getLaw();
  }


  getLaw() {
    this.lawService.getlaws().subscribe(data => {

      this.laws = [];

      data.forEach((element: any) => {

        /* console.log(element.payload.doc.id); */      //recupera el id
        /* console.log(element.payload.doc.data()); */  //recupera los datos

        this.laws.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });

      console.log(this.laws);

    });
  }

  deleteLaw(id: string) {
    this.lawService.borrarLey(id).then(() => {
      console.log('Elimiando');
      this.toatr.error('Registro eliminado correctamente','Borrado');
    }).catch(error => {
      console.log(error);
      this.toatr.error( error ,'Error en borrado');
    })
  }

}
