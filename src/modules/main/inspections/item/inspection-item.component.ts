import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Inspection } from "@domain/inspections/inspection.model";

@Component ({
    selector: 'app-inspection-item',
    templateUrl: './inspection-item.component.html',
    styleUrls: ['./inspection-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspectionItemComponent {
    @Input () inspection: Inspection;
}
