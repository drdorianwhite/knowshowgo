import { Injectable } from "@angular/core";
import { Language } from "../../../../both/models/language.model";
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class LanguageDataService {
  private languagesURL: string = "http://localhost:8000/api/languages";


  constructor(private http: Http) {}

  public readAll(startingWith?: string): Observable<Language[]> {
    let searchParams = new URLSearchParams();

    if(startingWith) {
      searchParams.append("startsWith", startingWith);
    }
    
    let options = new RequestOptions({
          search: searchParams
      });
    
    let ret = this.http.get(this.languagesURL/*, options*/)
                    .map(this.extractData)
                    .catch(this.handleError);
    console.log(ret);
    return ret;
  }

  public read(id: string): Observable<Language> {
    let url = this.languagesURL + "/" + id;
    
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public create(englishName: string): Observable<Language> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.languagesURL, { englishName }, options)
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