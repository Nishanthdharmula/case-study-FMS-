import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from './flight';
import { FlightsListComponent } from './flights-list/flights-list.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(flights: Flight[], sFName: string): Flight[] {
    /*if(sFName===""){*/
      if(!flights || !sFName) {
      return flights;
    }

    return flights.filter(flight =>
      flight.flightName.toLowerCase().indexOf(sFName.toLowerCase()) !== -1);
    }
    /*const flightsArray:any[]=[];
    for(let i=0;i<=value.length;i++){
      let fromName:string=value[i].from;
      if(fromName.startsWith(sFName)){
        flightsArray.push(value[i])
      }
    }
    return flightsArray;
  }*/

  

}
