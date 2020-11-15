import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    public http: HttpClient,
  ) { }

  public insertData(Data): Observable<any> {
		return this.http
			.post("http://localhost:3000/" + "insertData", Data)
			.timeout(20000)
			.map(response => {
				// console.log(response, "DATAAAA")
				return response;
			}).catch((error: any) => {
				return Observable.throw(this.errorHandler(error))
			});
  }
  
  public GetData(): Observable<any> {
		return this.http
			.get("http://localhost:3000/" + "getData")
			.timeout(20000)
			.map(response => {
				// console.log(response, "DATAAAA")
				return response;
			}).catch((error: any) => {
				return Observable.throw(this.errorHandler(error))
			});
  }
  
  errorHandler(error: any): any {
    throw new Error('Method not implemented.');
  }
}
