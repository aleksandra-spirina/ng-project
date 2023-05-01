import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		let correctUrl: string = "http://localhost:3000/";

		if(req.method === "PUT") {
			correctUrl += req.body.id;
		}

		if(req.method === "DELETE") {
			correctUrl += req.params.get('id');
		}

		const newReq = req.clone({
			url: correctUrl
		});
		return next.handle(newReq);
	}
}