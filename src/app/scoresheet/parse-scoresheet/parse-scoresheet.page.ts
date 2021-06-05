import {Component} from "@angular/core";
import {ScoresheetParser} from "../services/scoresheet-parser";
import {NgxSpinnerService} from "ngx-spinner";
import {finalize} from "rxjs/operators";

@Component({
    selector: 'app-parse-scoresheet',
    templateUrl: './parse-scoresheet.page.html'
})
export class ParseScoresheetPage {
    public scoresheetUrl: string = 'https://actionsport.spawtz.com/Leagues/IndoorCricket/Scoresheet.aspx?FixtureId=1828309';

    constructor(private readonly parser: ScoresheetParser,
                private spinner: NgxSpinnerService) {
    }

    public parse(): void {
        this.spinner.show();
        this.parser.parse(this.scoresheetUrl).pipe(
            finalize(() => {
                this.spinner.hide();
            })).subscribe(result => {

            console.log('success!', result);
        })
    }
}
