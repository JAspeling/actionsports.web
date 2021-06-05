import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ParseScoresheetPage} from "./parse-scoresheet.page";
import {MaterialModule} from "../../app.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        ParseScoresheetPage
    ]
})
export class ParseScoresheetModule {

}
