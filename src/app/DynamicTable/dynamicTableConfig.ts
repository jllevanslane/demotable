//
// A class representing the configuration for a dynamic table.
//
import { DynamicColumnConfiguration } from "./dynamicColumnConfig";

export class DynamicTableConfiguration {
  title:         string;
  sortKey:       string;
  reverseOrder:  boolean;
  columns:       DynamicColumnConfiguration[];

  constructor( title: string, sortKey: string, reverseOrder: boolean ) {
    this.title = title;
    this.sortKey = sortKey;
    this.reverseOrder = reverseOrder;
    this.columns = [];
  }

  addColumn(property: string, header: string, sortable: boolean, searchable: boolean): DynamicColumnConfiguration {
    let column = new DynamicColumnConfiguration( property, header, sortable, searchable );
    this.columns.push( column );
    return column;
  }

}
