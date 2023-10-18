import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InspectionItemComponent } from "./inspection-item.component";

@NgModule ({
    declarations: [InspectionItemComponent],
    exports: [InspectionItemComponent],
    imports: [
        CommonModule
    ]
})
export class InspectionItemModule {
}
