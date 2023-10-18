import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoadingModule } from "@loading/loading.module";
import { EmptyStateModule } from "../../../core/empty-state/empty-state.module";
import { InspectionItemModule } from "../item/inspection-item.module";
import { InspectionsScreenComponent } from "./inspections-screen.component";

const routes: Routes = [
    {
        path: '',
        component: InspectionsScreenComponent,
    },
];

@NgModule ({
    declarations: [InspectionsScreenComponent],
    exports: [InspectionsScreenComponent],
    imports: [
        RouterModule.forChild (routes),
        CommonModule,
        InspectionItemModule,
        LoadingModule,
        EmptyStateModule,
    ]
})
export class InspectionsScreenModule {
}
