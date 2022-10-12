import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LawsService } from 'src/app/services/laws.service';

@Component({
  selector: 'app-info-laws',
  templateUrl: './info-laws.component.html',
  styleUrls: ['./info-laws.component.css']
})
export class InfoLawsComponent implements OnInit {
  lawEntity: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  title = 'Agregar ley';

  constructor(
    private aRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private lawService: LawsService,
    private fb: FormBuilder
  ) { 

    this.lawEntity = this.fb.group({
      capitulo: ['', Validators.required],
      articulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      resumen: ['', Validators.required],
      multa: ['', Validators.required]
    })
  

    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.isEdit();
  }

  agregarEditarLey() {
    this.submitted = true;

    if (this.lawEntity.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarLey();
    } else {
      this.editLaw(this.id);
    }

  }

  editLaw(id: string) {

    const lawEntity: any = {
      capitulo: this.lawEntity.value.capitulo,
      articulo: this.lawEntity.value.articulo,
      descripcion: this.lawEntity.value.descripcion,
      resumen: this.lawEntity.value.resumen,      
      multa:  this.lawEntity.value.multa
    }

    this.loading = true;

    this.lawService.actualizarLey(id, lawEntity).then(() => {
      this.loading = false;
      this.toastr.info('El empleado fue modificado con exito', 'Empleado modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-empleados']);
    })
  }


  agregarLey() {
    const laws: any = {
      capitulo: this.lawEntity.value.capitulo,
      articulo: this.lawEntity.value.articulo,
      descripcion: this.lawEntity.value.descripcion,
      resumen: this.lawEntity.value.resumen,
     // fechaCreacion: new Date(),
      multa: this.lawEntity.value.multa,
    }
    this.loading = true;
    this.lawService.agregarLey(laws).then(() => {

      this.toastr.success('La Ley/Reglamento fue registrado con exito!', 'Registrado Correctamente');
      this.loading = false;
      this.router.navigate(['/result-laws']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  isEdit(){

    this.title= 'Detalle de la Ley';
    if(this.id !== null){

      this.lawService.obtenerLey(this.id).subscribe(data=>{
        this.lawEntity.setValue({
          capitulo: data.payload.data()['capitulo'],
          articulo: data.payload.data()['articulo'],
          descripcion: data.payload.data()['descripcion'],
          resumen: data.payload.data()['resumen'],
          multa: data.payload.data()['multa'],
        })

      })

    }
  }


}
