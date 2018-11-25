import { Pipe }          from "@angular/core";
import { PipeTransform } from "@angular/core";

import { PageEvent }     from "./pageEvent";

@Pipe({
  name: "dynPaginate"
})
export class DynamicPaginatePipe implements PipeTransform {
  transform(data: any[], event: PageEvent) {
    if (typeof event == "undefined") return [];

    let startIndex = (event.pageNumber - 1) * event.pageSize;
    let endIndex = event.pageNumber * event.pageSize;
    if (endIndex > data.length) endIndex = data.length;

    return data.slice( startIndex, endIndex );
  }

}
