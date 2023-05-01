import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPurchasesApiService } from "../interfaces/IPurchasesApiService";
import { Purchase } from "../interfaces/Purchase";
import { HttpClient, HttpParams } from "@angular/common/http";

const host = 'http://tfs';

@Injectable()
export class PurchasesApiService implements IPurchasesApiService {
	constructor(private httpClient: HttpClient) { }

	add(purchase: Purchase): Observable<void> {
		return this.httpClient.post<void>(host, purchase);
	}

	getAll(): Observable<Purchase[]> {
		return this.httpClient.get<Purchase[]>(host);
	}

	edit(id: string, purchase: Purchase): Observable<void> {
		return this.httpClient.put<void>(`${host}/${id}`, purchase);
	}

	delete(id: string): Observable<any> {
		let params = new HttpParams().set('id', id);
		return this.httpClient.delete<void>(`${host}/${id}`, { params: params });
	}
}