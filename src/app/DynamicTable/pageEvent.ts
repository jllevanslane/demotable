//
// A class representing a page change event.
//
export class PageEvent {
  pageNumber: number;
  pageSize: number;

  constructor(page: number, size: number) {
    this.pageNumber = page;
    this.pageSize = size;
  }
}
