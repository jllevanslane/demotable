import { Pipe }          from "@angular/core";
import { PipeTransform } from "@angular/core";

import { DynamicColumnConfiguration } from "./dynamicColumnConfig";

@Pipe({
  name: "dynFilterBy"
})
export class DynamicFilterPipe implements PipeTransform {

  transform(data: any[], filter: string, columns: DynamicColumnConfiguration[], paginationControl: any): any[] {
    if (typeof filter == "undefined" || filter.length == 0) {
      paginationControl.setTotalItems( data.length );
      return data;
    }

    filter = filter.toLowerCase();
    let filteredData = data.filter( item => {
      let acceptItem = false;
      for (let i = 0; i < columns.length; i++) {
        let key = columns[i].property;
        if (columns[i].searchable && item[key] && item[key].toString().toLowerCase().indexOf( filter ) >= 0) {
          acceptItem = true;
          break;
        }
      }
      return acceptItem;
    });

    paginationControl.setTotalItems( filteredData.length );
    return filteredData;
  }
}
