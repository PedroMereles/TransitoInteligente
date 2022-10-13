import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(leyes: any[], page: number = 0, search: string = '' ): any[] {

    if(search.length === 0){
      return leyes.slice(page,page + 6);
    }

    const filterLaw = leyes.filter( leyes => leyes.resumen.includes(search))

    return filterLaw.slice(page, page + 6);
    //return leyes.slice(page,page + 10);

  }

}
