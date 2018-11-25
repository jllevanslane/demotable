import { Injectable }   from "@angular/core";
import { HttpClient }   from "@angular/common/http";
import { Observable }   from "rxjs";
import { IPlan }        from "./plan";

@Injectable()
export class DataService {

    //
    // Private data.
    //
    private plansUrl = "https://ec2-54-188-73-240.us-west-2.compute.amazonaws.com/api/plans";

    constructor(private http: HttpClient) {}

    //
    // Get training plans.
    //
    getPlans(): Observable<IPlan[]> {
        return this.http.get<IPlan[]>(this.plansUrl);
    }

}
