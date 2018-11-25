import { Component } from "@angular/core";
import { OnInit }    from "@angular/core";
import { Input }     from "@angular/core";

import { PageEvent }                 from "./pageEvent";
import { DynamicTableConfiguration } from "../DynamicTable/dynamicTableConfig";
import { DynamicPageService }        from "../DynamicTable/dynamicPage.service";

@Component ({
  selector: ".dynamic-table",
  templateUrl: "./dynamicTable.component.html",
  styleUrls: ["./dynamicTable.component.css"]
})
export class DynamicTableComponent implements OnInit {

  private defaultPageNumber: number = 1;
  private defaultPageSize: number = 5;

  //
  // Properties for the dynamic table are set in the host component's html template.
  //
  @Input("dynamic-data") data: any[];
  @Input("dynamic-config") config: DynamicTableConfiguration;
  @Input("dynamic-table") tableName: string;
  filterArg: string;
  page: PageEvent;

  constructor( private pageService: DynamicPageService ) {}

  //
  // Change table sort order.
  //
  sort(newKey: string, isSortable: boolean): void {
    if (isSortable) {
      let sameKey = (this.config.sortKey === newKey);
      this.config.sortKey = newKey;
      this.config.reverseOrder = sameKey ? !this.config.reverseOrder : false;
    }
  }

  //
  // Change the table filter argument.
  //
  filter(newFilter: string) {
    this.filterArg = newFilter;
  }

  //
  // On component initialization, reset the table page number (stays on current page
  // if table name hasn't changed).
  //
  ngOnInit(): void {
    this.pageService.resetPage( this.tableName );
    this.defaultPageNumber = this.pageService.getPage();
    this.page = new PageEvent( this.defaultPageNumber, this.defaultPageSize );
  }


}
