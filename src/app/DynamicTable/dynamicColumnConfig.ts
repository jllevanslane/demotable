//
// A class representing configuration of a column in a dynamic table.
//
export class DynamicColumnConfiguration {
  property:       string;
  header:         string;
  headerClass:    string;
  dataClass:      string;
  sortable:       boolean;
  searchable:     boolean;

  constructor( property: string, header: string, sortable: boolean, searchable: boolean ) {
    this.property = property;
    this.header = header;
    this.headerClass = "";
    this.dataClass = "";
    this.sortable = sortable;
    this.searchable = searchable;
  }

  setHeaderClass(newClass: string): DynamicColumnConfiguration {
    this.headerClass = newClass;
    return this;
  }

  setDataClass(newClass: string): DynamicColumnConfiguration {
    this.dataClass = newClass;
    return this;
  }
}
