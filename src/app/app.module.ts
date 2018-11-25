import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }      from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component';

import { DynamicTableComponent }   from "./DynamicTable/dynamicTable.component";
import { DynamicPaginatePipe }     from "./DynamicTable/dynamicPaginate.pipe";
import { DynamicSortPipe }         from "./DynamicTable/dynamicSort.pipe";
import { DynamicFilterPipe }       from "./DynamicTable/dynamicFilter.pipe";
import { DynamicPageService }      from "./DynamicTable/dynamicPage.service";
import { PaginationComponent }     from "./DynamicTable/Pagination/pagination.component";
import { DataService }             from "./data-service";

@NgModule({

  declarations: [
    AppComponent,
    DynamicTableComponent,
    DynamicPaginatePipe,
    DynamicSortPipe,
    DynamicFilterPipe,
    PaginationComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [
    DataService,
    DynamicPageService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
