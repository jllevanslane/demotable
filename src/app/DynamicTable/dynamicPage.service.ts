import { Injectable } from "@angular/core";

@Injectable()
export class DynamicPageService {

  private currentTable: string;
  private currentPage: number;

  constructor() {
    this.currentTable = "";
    this.currentPage = 1;
  }

  resetPage(tableName: string): void {
    if (tableName != this.currentTable) {
      this.currentTable = tableName;
      this.currentPage = 1;
    }
  }

  setPage(page: number): void {
    this.currentPage = page;
  }

  getPage(): number {
    return this.currentPage;
  }
}
