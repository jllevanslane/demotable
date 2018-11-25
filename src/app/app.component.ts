import { Component }   from '@angular/core';
import { OnInit }      from "@angular/core";

import { DataService }              from "./data-service";
import { DynamicTableConfiguration} from "./DynamicTable/dynamicTableConfig";
import { IPlan }                    from "./plan";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    //
    // Public properties
    //
    title: string;
    subTitle: string;
    data: IPlan[];
    tableConfig: DynamicTableConfiguration;

    //
    // Application constructor.  Inject a data service and configure table.
    //
    constructor(private dataService: DataService) {
        this.title = 'Field Service Engineer Training';
        this.subTitle = 'Demo';
        this.data = [];

        // Configure the table ...
        this.tableConfig = new DynamicTableConfiguration("Training Plans", "id", false);

        // now configure each of the columns.
        this.tableConfig.addColumn( "id", "ID", true, true )
            .setHeaderClass('col-xs-1');
        this.tableConfig.addColumn( "fse", "Name", true, true )
            .setHeaderClass('col-xs-3');
        this.tableConfig.addColumn( "skillSet", "Skill", true, true )
            .setHeaderClass('col-xs-2');
        this.tableConfig.addColumn( "state", "State", true, true )
            .setHeaderClass('col-xs-2');
        this.tableConfig.addColumn( "started", "Started", true, false )
            .setHeaderClass('col-xs-2');
        this.tableConfig.addColumn( "completed", "Completed", true, false )
            .setHeaderClass('col-xs-2');
    }

    //
    // On component initialization, get the training plans.
    //
    ngOnInit(): void {
      this.dataService.getPlans().subscribe( d => {
          this.data = d;
          console.log(d);
      });
    }
}
