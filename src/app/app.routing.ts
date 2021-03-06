import {Routes} from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {ScoresheetModule} from "./scoresheet/scoresheet.module";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: (): Promise<DashboardModule> => {
                    return import('./dashboard/dashboard.module').then(m => m.DashboardModule);
                }
            },
            {
                path: 'scoresheet.ts',
                loadChildren: (): Promise<ScoresheetModule> => {
                    return import('./scoresheet/scoresheet.module').then(m => m.ScoresheetModule);
                }
            },
            // {
            //     path: 'components',
            //     loadChildren: './components/components.module#ComponentsModule'
            // }, {
            //     path: 'forms',
            //     loadChildren: './forms/forms.module#Forms'
            // }, {
            //     path: 'tables',
            //     loadChildren: './tables/tables.module#TablesModule'
            // }, {
            //     path: 'maps',
            //     loadChildren: './maps/maps.module#MapsModule'
            // }, {
            //     path: 'widgets',
            //     loadChildren: './widgets/widgets.module#WidgetsModule'
            // }, {
            //     path: 'charts',
            //     loadChildren: './charts/charts.module#ChartsModule'
            // }, {
            //     path: 'calendar',
            //     loadChildren: './calendar/calendar.module#CalendarModule'
            // }, {
            //     path: '',
            //     loadChildren: './userpage/user.module#UserModule'
            // }, {
            //     path: '',
            //     loadChildren: './timeline/timeline.module#TimelineModule'
            // }
        ]
    },
    // {
    //     path: '',
    //     component: AuthLayoutComponent,
    //     children: [{
    //         path: 'pages',
    //         loadChildren: './pages/pages.module#PagesModule'
    //     }]
    // }
];
