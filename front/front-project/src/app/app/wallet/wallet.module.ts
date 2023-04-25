import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import { TuiBadgeModule, TuiInputModule } from '@taiga-ui/kit';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

import { TuiInputDateModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { IPurchasesApiServiceToken } from '../../shared/interfaces/IPurchasesApiService';
// import { PurchasesApiMockService } from '../../shared/services/purchasesApiMock.service';
import { PurchasesApiService } from '../../shared/services/purchasesApi.service';
import { PricePipe } from 'src/app/pipes/price.pipe';

@NgModule({
	declarations: [
		WalletComponent,
		WalletItemComponent,
		WalletAddComponent,
		PricePipe
	],
	exports: [
		WalletComponent
	],
	imports: [
		CommonModule,
		TuiBadgeModule,
		FormsModule,
		ReactiveFormsModule,
		TuiInputModule,
		TuiTextfieldControllerModule,
		TuiButtonModule,
		TuiInputDateModule,
		TuiTextAreaModule
	],
	providers: [{provide: IPurchasesApiServiceToken, useClass: PurchasesApiService}]
})
export class WalletModule { }
