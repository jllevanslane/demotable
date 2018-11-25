import { Pipe }          from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe( { name: 'dynSortBy' } )
export class DynamicSortPipe implements PipeTransform {

  transform (data: any[], key: string, reverseOrder: boolean): any[] {
    // If key is missing, then do nothing.  Return original array.
    if (typeof key == "undefined" || key.length == 0) return data;

    // If reverse order is missing, then assume false;
    if (typeof reverseOrder != "boolean") reverseOrder = false;

    return data.concat().sort( (itemA: any, itemB: any) => {
      // If key does not exist, than assume two entries are equal.
      if (!itemA.hasOwnProperty(key) || !itemB.hasOwnProperty(key)) return 0;

	    if ( itemA[key] < itemB[key] ) {
	    	return reverseOrder ? 1 : -1;
	    } else if ( itemA[key] > itemB[key] ) {
	        return reverseOrder ? -1 : 1;
	    } else {
	    	return 0;
	    }
    });
  }
}
