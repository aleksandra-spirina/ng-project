import { Inject, Injectable } from "@angular/core";
import { Purchase } from "../interfaces/Purchase";
import { IPurchasesApiService, IPurchasesApiServiceToken } from "../interfaces/IPurchasesApiService";

@Injectable({ providedIn: 'root' })
export class PurchasesService {
	private _purchases: Purchase[] = [];
	private _summary = 0;

	constructor(@Inject(IPurchasesApiServiceToken) public purchasesService: IPurchasesApiService) {

	}

	get purchases(): Purchase[] {
		return this._purchases;
	}

	get summary(): number {
		return this._summary;
	}

	initialize(): void {
		this.purchasesService.getAll().subscribe(purchases => {
			this._purchases = purchases;
			this.updateSummary();
		});
	}

	addPurchase(purchase: Purchase): void {
		this.purchasesService.add(purchase).subscribe(() => {
			this.initialize();
		});
	}

	editPurchase(id: string, body: Purchase): void {
		this.purchasesService.edit(id, body).subscribe(() => {
			this.initialize();
		});
	}

	deletePurchase(purchase: Purchase): void {
		this.purchasesService.delete(purchase.id!).subscribe(() => {
			this.initialize();
		});
	}

	private updateSummary(): void {
		this._summary = this._purchases.reduce((sum, p) => p.price + sum, 0);
	}
}