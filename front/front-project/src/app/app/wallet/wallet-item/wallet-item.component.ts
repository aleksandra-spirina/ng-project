import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Purchase } from '../../../shared/interfaces/Purchase';

@Component({
	selector: 'app-wallet-item',
	templateUrl: './wallet-item.component.html',
	styleUrls: ['./wallet-item.component.less']
})
export class WalletItemComponent {
	@Input()
	purchase!: Purchase;
	@Output()
	editClick = new EventEmitter<Purchase>();

	@Output()
	switchClick = new EventEmitter<Purchase>();

	@Output()
	deleteClick = new EventEmitter<Purchase>();


	constructor() { }

	onPurchase(event: Event): void {
		let targetElement = (event.target as HTMLElement);
		if (targetElement.classList.contains('t-wrapper') || targetElement.classList.contains('t-content')) {
			this.onEdit();
		} else if (targetElement.classList.contains('close')) {
			this.onClose();
		} else {
			this.onSwitch();
		}
	}

	onSwitch(): void {
		this.switchClick.emit(this.purchase);
	}

	onEdit(): void {
		this.editClick.emit(this.purchase);
		this.purchase.active = true;
	}

	onClose() {
		this.deleteClick.next(this.purchase);
	}
}
