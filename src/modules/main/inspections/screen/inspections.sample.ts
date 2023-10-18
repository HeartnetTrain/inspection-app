import { Inspection } from "@domain/inspections/inspection.model";

export class InspectionsSample {
    public static getInspections(): Inspection [] {
        return [
            {
                "name": "Inspection 1",
                "installationType": "Installation 1",
                "constructionYear": 1951,
                "company": "Company 1",
                "type": "Type 1",
                "diameter": "Diam 1",
                "material": "Material 1",
                "coating": "Coating 1"
            },
            {
                "name": "Inspection 2",
                "installationType": "Installation 2",
                "constructionYear": 2014,
                "company": "Company 2",
                "type": "Type 2",
                "diameter": "Diam 2",
                "material": "Material 2",
                "coating": "Coating 2"
            },
        ]
    }
}
