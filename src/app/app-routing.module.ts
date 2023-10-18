import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'inspections', pathMatch: 'full'},
    {
        path: 'inspections',
        loadChildren: () => import('../modules/main/inspections/screen/inspections-screen.module').then (m => m.InspectionsScreenModule),
        pathMatch: 'full'
    },
    {path: '**', redirectTo: 'inspections'}
];

@NgModule ({
    imports: [RouterModule.forRoot (routes)],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {
}
