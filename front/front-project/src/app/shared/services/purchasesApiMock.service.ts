import { Observable, of } from "rxjs";
import { IPurchasesApiService } from "../interfaces/IPurchasesApiService";
import { Purchase } from "../interfaces/Purchase";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PurchasesApiMockService implements IPurchasesApiService {
	edit(id: string, purchase: Purchase): Observable<void> {
		throw new Error("Method not implemented.");
	}

	delete(id: string): Observable<void> {
		throw new Error("Method not implemented.");
	}
	
	add(purchase: Purchase): Observable<void> {
		return of();
	}

	getAll(): Observable<Purchase[]> {
		return of(
			[
				{
					title: 'Проезд на метро',
					price: 40,
					date: '31.12.2022',
					comment: 'А хотелось бы на такси'
				},
				{
					title: 'Iphone Pro Max XXL',
					price: 100500,
					date: '08.03.2023',
					comment: 'Без мам, пап и кредитов'
				},
				{
					title: 'Доширак (острый)',
					price: 123,
					date: '17.01.2023',
					comment: 'Огонь'
				},
				{
					title: 'Доширак',
					price: 100,
					date: '10.04.2023',
					comment: 'Давно мечтал'
				}
			]
		);
	}
}