import { Injectable } from "@angular/core";
import { concatMap, Observable, of, timer } from "rxjs";
import { Inspection } from "./inspection.model";

@Injectable ({
    providedIn: 'root'
})
export class InspectionsService {
    protected data = [
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
        {
            "name": "Inspection Bordeaux-Mérignac",
            "installationType": "Pipeline",
            "constructionYear": 1991,
            "company": "Shell",
            "type": "Mapping",
            "diameter": "40cm",
            "material": "Steel",
            "coating": "Poly Ethylene"
        },
        {
            "name": "Inspection Toulouse Ile du Ramier",
            "installationType": "Pipeline",
            "constructionYear": 1963,
            "company": "Terega",
            "type": "River crossing",
            "diameter": "47cm",
            "material": "Cast Iron",
            "coating": "Epoxy"
        },
        {
            "name": "Inspection Houston",
            "installationType": "Pipeline",
            "constructionYear": 1982,
            "company": "Shell",
            "type": "Mapping",
            "diameter": "50cm",
            "material": "Steel",
            "coating": "Poly Ethylene"
        },
        {
            "name": "Inspection Kansas City River",
            "installationType": "Pipeline",
            "constructionYear": 1969,
            "company": "Chevron",
            "type": "River crossing",
            "diameter": "41cm",
            "material": "Cast Iron",
            "coating": "Epoxy"
        }
    ]

    // This is supposed to be the service that fetches data from the server
    public getInspections(): Observable<Inspection[]> {
        // simulate getting data from server by introducing asynchronous fetching with delay
        return timer (2000).pipe (concatMap (() => of (this.data)));
    }

}
