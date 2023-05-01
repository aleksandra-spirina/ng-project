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

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ParamInterceptor } from 'src/app/interceptor/api.interceptor';

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
		TuiTextAreaModule,
		HttpClientModule
	],
	providers: [
		{
			provide: IPurchasesApiServiceToken,
			useClass: PurchasesApiService
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ParamInterceptor,
			multi: true
		}]
})
export class WalletModule { }
