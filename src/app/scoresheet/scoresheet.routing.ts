import {Routes} from "@angular/router";
import {ParseScoresheetPage} from "./parse-scoresheet/parse-scoresheet.page";

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'parse',
                component: ParseScoresheetPage
            }
        ]
    }
]
