import { Injectable } from "@angular/core";
import { Inspection } from "@domain/inspections/inspection.model";
import { InspectionsScreenElement } from "./inspections-screen-element.model";


@Injectable ({
    providedIn: 'root'
})

export class InspectionsScreenService {

    public getDefaultInspectionScreen(): InspectionsScreenElement {
        return {
            inspections: [],
            loading: true
        }
    }

    public mapInspectionsScreen(inspections: Inspection []): InspectionsScreenElement {
        if (!inspections) return null;
        return {
            inspections: inspections,
            loading: false
        }
    }

}
