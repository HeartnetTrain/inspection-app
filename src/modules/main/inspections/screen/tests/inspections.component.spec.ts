import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { Inspection } from '../../../../core/domain/inspections/inspection.model';
import { InspectionsService } from "../../../../core/domain/inspections/inspections.service";
import { LoadingComponent } from "../../../../core/loading/loading.component";
import { InspectionItemComponent } from "../../item/inspection-item.component";
import { InspectionsScreenComponent } from '../inspections-screen.component';
import { InspectionsScreenService } from '../inspections-screen.service';
import { InspectionsSample } from "../inspections.sample";

describe ('InspectionsComponent', () => {
    let component: InspectionsScreenComponent;
    let fixture: ComponentFixture<InspectionsScreenComponent>;
    let inspectionsScreenService: InspectionsScreenService;
    let inspectionsService: InspectionsService;
    const mockInspections: Inspection[] = InspectionsSample.getInspections ();

    beforeEach (() => {
        TestBed.configureTestingModule ({
            declarations: [InspectionsScreenComponent, InspectionItemComponent, LoadingComponent],
            providers: [InspectionsScreenService, InspectionsService],
        });
        inspectionsScreenService = TestBed.inject (InspectionsScreenService);
        inspectionsService = TestBed.inject (InspectionsService);
        fixture = TestBed.createComponent (InspectionsScreenComponent);
        component = fixture.componentInstance;

    });

    it ('should create', () => {
        expect (component).toBeTruthy ();
    });

    it ('should fetch inspections and set loading to false on success', () => {
        spyOn (inspectionsScreenService, 'getDefaultInspectionScreen').and.returnValue ({
            inspections: [],
            loading: true
        });
        spyOn (inspectionsScreenService, 'mapInspectionsScreen').and.returnValue ({
            inspections: mockInspections,
            loading: false
        });

        spyOn (inspectionsService, 'getInspections').and.returnValue (of (mockInspections));

        component.ngOnInit ();

        expect (component.inspectionScreen.loading).toBe (false);
        expect (component.inspectionScreen.inspections).toEqual (mockInspections);
    });

    it ('should handle error when fetching inspections', () => {
        const error = new Error ('An error occurred');
        spyOn (inspectionsService, 'getInspections').and.returnValue (throwError (() => error));

        component.ngOnInit ();

        expect (component.inspectionScreen.loading).toBe (false);
        expect (component.inspectionScreen.inspections).toEqual ([]);
    });
});
