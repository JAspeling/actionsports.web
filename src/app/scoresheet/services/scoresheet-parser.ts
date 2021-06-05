import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Scoresheet} from "../models/scoresheet";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ScoresheetParser {
    constructor(private readonly http: HttpClient) {
    }

    parse(url: string): Observable<Scoresheet> {

        const body = {url};

        return this.http.post('https://parsescoresheet.azurewebsites.net/api/parse?code=L5G/PrqfqZOulbX3hBl3/XagDu2XPZmGJ/eYnkCaQlszxcNv4BZoBA==', body)
            .pipe(
                tap((result) => console.log(result))
            );
    }
}
