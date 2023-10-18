import { Inspection } from "@domain/inspections/inspection.model";

export class InspectionsSample {
    public static getInspections(): Inspection [] {
        return [
            {
                "name": "Inspection Paris 16eme",
                "installationType": "Pipeline",
                "constructionYear": 1951,
                "company": "GRTgaz",
                "type": "Bending Strain",
                "diameter": "40cm",
                "material": "Steel",
                "coating": "Poly Ethylene"
            },
            {
                "name": "Inspection Marseille 7eme",
                "installationType": "Pipeline",
                "constructionYear": 1967,
                "company": "Total",
                "type": "River crossing",
                "diameter": "47cm",
                "material": "Cast Iron",
                "coating": "Epoxy"
            },
        ]
    }
}
