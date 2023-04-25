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

	onSwitch(event: Event): void {
		let targetElement = (event.target as HTMLElement);
		if (!(targetElement.classList.contains('t-wrapper') || targetElement.classList.contains('t-content'))) {
			this.switchClick.emit(this.purchase);
		}
	}

	onEdit(): void {
		this.editClick.emit(this.purchase);
		this.purchase.active = true;
	}

	onDelete() {
    this.deleteClick.next(this.purchase);
  }
}
