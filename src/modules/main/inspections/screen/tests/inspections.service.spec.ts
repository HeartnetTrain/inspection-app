import { TestBed } from '@angular/core/testing';
import { Inspection } from "../../../../core/domain/inspections/inspection.model";
import { InspectionsScreenService } from "../inspections-screen.service";
import { InspectionsSample } from "../inspections.sample";

describe ('InspectionsScreenService', () => {
    let service: InspectionsScreenService;

    beforeEach (() => {
        TestBed.configureTestingModule ({
            providers: [InspectionsScreenService],
        });

        service = TestBed.inject (InspectionsScreenService);
    });

    it ('should be created', () => {
        expect (service).toBeTruthy ();
    });

    describe ('getDefaultInspectionScreen', () => {
        it ('should return a default inspection screen element', () => {
            const defaultScreen = service.getDefaultInspectionScreen ();
            expect (defaultScreen).toEqual ({inspections: [], loading: true});
        });
    });

    describe ('mapInspectionsScreen', () => {
        it ('should map inspections to an inspection screen element with loading set to false', () => {
            const inspections: Inspection[] = InspectionsSample.getInspections ()
            const mappedScreen = service.mapInspectionsScreen (inspections);
            expect (mappedScreen).toEqual ({inspections, loading: false});
        });

        it ('should return null if inspections are not provided', () => {
            const mappedScreen = service.mapInspectionsScreen (null);
            expect (mappedScreen).toBeNull ();
        });
    });
});
