import { Injectable } from "@angular/core";
import { Category } from "../../../../both/models/category.model";
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class CategoryDataService {
  private categoriesURL: string = "http://localhost:8000/api/categories";


  constructor(private http: Http) {}

 public readAll(): Observable<Category[]> {
    let searchParams = new URLSearchParams();
    
    let options = new RequestOptions({
          search: searchParams
      });
    
    return this.http.get(this.categoriesURL, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public read(id: number): Observable<Category> {
    let url = this.categoriesURL + "/" + id;
    
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public create(data: Category): Observable<Category> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    delete data._id;
    
    return this.http.post(this.categoriesURL, JSON.stringify(data), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public update(data: Category): Observable<Category> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.categoriesURL, JSON.stringify(data), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || [];
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