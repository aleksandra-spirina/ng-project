import { Observable } from "rxjs";
import { Purchase } from "./Purchase";
import { InjectionToken } from "@angular/core";

export const IPurchasesApiServiceToken = new InjectionToken('IPurchasesApiServiceToken');

export interface IPurchasesApiService {
	add(purchase: Purchase): Observable<void>;

	getAll(): Observable<Purchase[]>;

	edit(id: string, purchase: Purchase): Observable<void>;

	delete(id: string): Observable<void>;
}