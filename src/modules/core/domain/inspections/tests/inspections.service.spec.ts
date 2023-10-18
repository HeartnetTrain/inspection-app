import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from "rxjs";
import { Inspection } from '../../../../core/domain/inspections/inspection.model';
import { InspectionsSample } from "../../../../main/inspections/screen/inspections.sample";
import { InspectionsService } from "../inspections.service";

describe ('InspectionsService', () => {
    let service: InspectionsService;

    beforeEach (() => {
        TestBed.configureTestingModule ({
            providers: [InspectionsService],
        });

        service = TestBed.inject (InspectionsService);
    });

    it ('should be created', () => {
        expect (service).toBeTruthy ();
    });

    it ('should return inspections', fakeAsync (() => {
        const expectedInspections: Inspection[] = InspectionsSample.getInspections ();
        let inspections: Inspection[];
        spyOn (service, 'getInspections').and.returnValue (of (expectedInspections));

        service.getInspections ().subscribe ((response) => {
            inspections = response;
        });

        tick (2000); // Advance time to complete the observable

        expect (inspections).toEqual (expectedInspections);
    }));
});
