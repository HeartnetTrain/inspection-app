import { Component, OnInit } from '@angular/core';
import { Inspection } from "@domain/inspections/inspection.model";
import { InspectionsService } from "@domain/inspections/inspections.service";
import { catchError, of } from "rxjs";
import { InspectionsScreenElement } from "./inspections-screen-element.model";
import { InspectionsScreenService } from "./inspections-screen.service";

@Component ({
    selector: 'app-inspections',
    templateUrl: './inspections-screen.component.html',
    styleUrls: ['./inspections-screen.component.css']
})
export class InspectionsScreenComponent implements OnInit {

    public inspectionScreen: InspectionsScreenElement;

    constructor(private inspectionsService: InspectionsService,
                private inspectionsScreenService: InspectionsScreenService) {
    }

    ngOnInit() {
        this.initInspectionScreen ();
    }

    private initInspectionScreen(): void {
        this.inspectionScreen = this.inspectionsScreenService.getDefaultInspectionScreen ();
        this.inspectionsService.getInspections ().pipe (
            catchError (err => {
                this.inspectionScreen.loading = false;
                return of ([]);
            })
        ).subscribe ((inspectionsResponse: Inspection[]) => {
            this.inspectionScreen = this.inspectionsScreenService.mapInspectionsScreen (inspectionsResponse);
        })
    }


}
