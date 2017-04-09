import { Injectable } from "@angular/core";
import { CategoryProperty } from "../../../../both/models/category-property.model";
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class UserDataService {
  private categoryPropertiesURL: string = "http://localhost:8000/api/categoryproperties";


  constructor(private http: Http) {}

 public readAll(): Observable<CategoryProperty[]> {
    let searchParams = new URLSearchParams();
    
    let options = new RequestOptions({
          search: searchParams
      });
    
    return this.http.get(this.categoryPropertiesURL, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public read(id: number): Observable<CategoryProperty> {
    let url = this.categoryPropertiesURL + "/" + id;
    
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public create(data: CategoryProperty): Observable<CategoryProperty> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    delete data._id;
    
    return this.http.post(this.categoryPropertiesURL, JSON.stringify(data), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public update(data: CategoryProperty): Observable<CategoryProperty> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.categoryPropertiesURL, JSON.stringify(data), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}