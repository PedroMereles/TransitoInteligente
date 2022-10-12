import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private firestore: AngularFirestore) { }

// Consulta de reglamentos/Leyes
consultarViajes(): Observable<any> {
  return this.firestore.collection('viajes').snapshotChanges();
  //return this.firestore.collection('laws',ref=>ref.orderBy('fecha','asc')).snapshotChanges(); //Orden de resultados
}

//Agregar leyes/reglamentos
agregarViaje(law: any):Promise<any>{
  return this.firestore.collection('viajes').add(law);
}

eliminarViaje( id: string ): Promise<any>{
  return this.firestore.collection('viajes').doc(id).delete();
}

consultarViaje( id: string ): Observable<any>{
  return this.firestore.collection('viajes').doc(id).snapshotChanges();
}

actualizarViaje(id: string, data:any): Promise<any> {
  return this.firestore.collection('viajes').doc(id).update(data);
}


}
