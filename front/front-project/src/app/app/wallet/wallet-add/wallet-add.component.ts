import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Purchase } from '../../../shared/interfaces/Purchase';

@Component({
	selector: 'app-wallet-add',
	templateUrl: './wallet-add.component.html',
	styleUrls: ['./wallet-add.component.less']
})
export class WalletAddComponent {
	@Output()
	add = new EventEmitter<Purchase>();
	@Output()
	edit = new EventEmitter<Purchase>();

	@Input()
	get fillData(): Purchase | undefined { return this._fillData; }
	set fillData(purchase: Purchase | undefined) {
		if (purchase) {
			this.fill(purchase);
		}
		this.addButtonMode = !purchase?.title;
		this._fillData = purchase;
	}
	private _fillData: Purchase | undefined;

	form = new FormGroup({
		title: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
		price: new FormControl<number | null>(null, [Validators.required, Validators.min(10), Validators.max(10000), Validators.pattern(/^[0-9]+$/)]),
		comment: new FormControl<string | null>(null)
	});

	addButtonMode = true;

	submitAdd(): void {
		let sendData: Purchase = this.getPurchase();
		this.add.emit(sendData);
		this.form.reset();
	}

	submitEdit(): void {
		let editData: Purchase = this.getPurchase();
		this.edit.emit(editData);
		this.form.reset();
	}

	private getPurchase(): Purchase {
		return {
			title: this.form.get('title')?.value!,
			price: Number(this.form.get('price')?.value),
			comment: this.form.get('comment')?.value!,
			active: false
		};
	}

	private fill(purchase: Purchase) {
		this.form.setValue({
			title: purchase.title,
			price: purchase.price || null,
			comment: purchase.comment || null
		})
	}

	get title() {
		return this.form.get('title');
	}

	get price() {
		return this.form.get('price');
	}

}
