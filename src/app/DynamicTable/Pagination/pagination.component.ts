import { Component }    from "@angular/core";
import { OnInit }       from "@angular/core";
import { Input }        from "@angular/core";
import { Output }       from "@angular/core";
import { EventEmitter } from "@angular/core";

import { PageEvent }    from "../pageEvent";
import { DynamicPageService } from "../dynamicPage.service";

@Component({
  selector: ".plan-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ['./pagination.component.css']

})
export class PaginationComponent implements OnInit {
  //
  // Some data for the pagination component comes from attributes set in the table template.
  //
  @Input("total-items") totalItems: number;
  @Input("page-size") pageSize: number;
  @Input("page-number") currentPage: number;
  @Input("table-name") tableName: string;
  totalPages: number
  startPage: number;
  endPage: number;
  pageNumbers: number[];
  pagingInfo: string;

  //
  // Output all page changes.
  //
  @Output("pageChange") change: EventEmitter<PageEvent>;

  constructor( private pageService: DynamicPageService ) {
    this.change = new EventEmitter<PageEvent>();
  }

  //
  // On component init, initialize pagination parameters.
  //
  ngOnInit(): void {
    this.initialize();
  }

  //
  // Set total number of items.
  //
  setTotalItems(newTotal: number): void {
    this.totalItems = newTotal;
    this.initialize();
  }

  //
  // Set current page.
  //
  setPage(pageNumber: number): void {
    if (pageNumber < 1 || pageNumber > this.totalPages) return;

    // Set the current page and re-render the component.
    this.currentPage = pageNumber;
    this.pageService.setPage( this.currentPage );
    this.initialize();
    this.change.emit( new PageEvent( this.currentPage, this.pageSize ) );
  }

  pageSizeChanged(): void {
    this.currentPage = 1;
    this.pageService.setPage( this.currentPage );
    this.initialize();
    this.change.emit( new PageEvent( this.currentPage, this.pageSize ) );
  }

  //
  // Initialize pagination properties.
  //
  private initialize(): void {
    // Determine number of pages.
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);

    // Five or less pages?  Then show all.
    if (this.totalPages <= 5) {
      this.startPage = 1;
      this.endPage = this.totalPages;

    // More than 5 pages?  Then calculate start and end pages.
    } else {
      if (this.currentPage <= 3) {
        this.startPage = 1;
        this.endPage = 5;
      } else if (this.currentPage + 2 >= this.totalPages) {
        this.startPage = this.totalPages - 4;
        this.endPage = this.totalPages;
      } else {
        this.startPage = this.currentPage - 2;
        this.endPage = this.currentPage + 2;
      }
    }

    // Create array of page numbers.
    this.pageNumbers = [];
    for (let i = this.startPage; i <= this.endPage; i++) this.pageNumbers.push(i);

    // Create paging info.
    let startingItem = (this.currentPage - 1) * this.pageSize + 1;
    let endingItem = this.currentPage * this.pageSize;
    if (endingItem > this.totalItems) endingItem = this.totalItems;
    this.pagingInfo = (this.totalPages == 0)
      ? "Showing 0 to 0 of 0 entries"
      : "Showing " + startingItem + " to " + endingItem + " of " + this.totalItems + " entries";
  }
}
