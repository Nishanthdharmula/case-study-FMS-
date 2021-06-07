import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from './flight';
import { FlightsListComponent } from './flights-list/flights-list.component';

@Pipe({
  name: 'flightfilter'
})
export class FlightfilterPipe implements PipeTransform {

  transform(flights: Flight[], searchFrom: string, searchTo: string, searchDate: string ): Flight[] {
   
    if(flights && flights.length) {
      return flights.filter(flight => {
        /*if(searchFlightName && flight.flightName.toLowerCase().indexOf(searchFlightName.toLowerCase()) === -1){

          return false;
        }*/
        if(searchFrom && flight.from.toLowerCase().indexOf(searchFrom.toLowerCase()) === -1) {
          return false;
        }
        if (searchTo && flight.to.toLowerCase().indexOf(searchTo.toLowerCase()) === -1){
          return false;
      }
      if (searchDate && flight.date.toLowerCase().indexOf(searchDate.toLowerCase()) === -1){
          return false;
      }
      return true;
 })
}
 else{
  return  flights;
  //return null;
      }
    }
  }
      
    /*if( !searchFrom) {
      return flights;
      searchFrom = searchFrom.toLowerCase();
    }

    if( !searchTo) {
      return flights;
      searchTo = searchTo.toLowerCase();
    }

    return flights.filter(flight => {
        
         flight.from.toLowerCase().includes(searchFrom)
            || flight.to.toLowerCase().includes(searchTo);

    });

  }*/

