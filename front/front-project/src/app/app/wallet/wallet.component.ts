import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../shared/interfaces/Purchase';
import { PurchasesService } from '../../shared/services/purchases.service';

@Component({
	selector: 'app-wallet',
	templateUrl: './wallet.component.html',
	styleUrls: ['./wallet.component.less']
})
export class WalletComponent implements OnInit {
	expanded = false;
	fillForm: Purchase | undefined;
	editId: string = '';

	constructor(public purchasesService: PurchasesService) { }

	ngOnInit(): void {
		this.purchasesService.initialize();
	}

	toggle(): void {
		this.fillForm = { title: '', price: 0, comment: '' };
		this.expanded = !this.expanded;
	}

	addPurchase(purchase: Purchase): void {
		this.purchasesService.addPurchase(purchase);
		this.toggle();
	}

	editPurchase(body: Purchase): void {
		body.id = this.editId;
		this.purchasesService.editPurchase(this.editId, body);
		this.toggle();
	}

	onItemClick(purchase: Purchase): void {
		this.purchasesService.purchases.forEach((elem) => {
			if (elem !== purchase) {
				elem.active = false;
			} else {
				elem.active = !elem.active;
			}
		})
	}

	onEdit(purchase: Purchase): void {
		this.editId = purchase.id!;
		this.fillForm = purchase;
		this.expanded = true;
	}

	onDelete(purchase: Purchase): void {
		this.purchasesService.deletePurchase(purchase);
	}
}
