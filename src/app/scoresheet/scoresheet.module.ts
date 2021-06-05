import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {routes} from "./scoresheet.routing";
import {ParseScoresheetModule} from "./parse-scoresheet/parse-scoresheet.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ParseScoresheetModule
    ]
})
export class ScoresheetModule {

}
