import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LawsService {

  constructor(private firestore: AngularFirestore) { }

  // Consulta de reglamentos/Leyes
  getlaws(): Observable<any> {
    return this.firestore.collection('laws').snapshotChanges();
    //return this.firestore.collection('laws',ref=>ref.orderBy('fecha','asc')).snapshotChanges(); //Orden de resultados
  }

  //Agregar leyes/reglamentos
  agregarLey(law: any):Promise<any>{
    return this.firestore.collection('laws').add(law);
  }

  borrarLey( id: string ): Promise<any>{
    return this.firestore.collection('law').doc(id).delete();
  }

  obtenerLey( id: string ): Observable<any>{
    return this.firestore.collection('laws').doc(id).snapshotChanges();
  }

  actualizarLey(id: string, data:any): Promise<any> {
    return this.firestore.collection('laws').doc(id).update(data);
  }

}
