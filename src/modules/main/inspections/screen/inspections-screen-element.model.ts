import { Inspection } from "@domain/inspections/inspection.model";

export interface InspectionsScreenElement {
    inspections: Inspection [];
    loading: boolean;
}
