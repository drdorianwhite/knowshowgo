import { Injectable } from "@angular/core";
import { Word } from "../../../../both/models/word.model";
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Mongo} from "meteor/mongo";


@Injectable()
export class WordDataService {
  private wordsURL: string = "http://localhost:8000/api/words";


  constructor(private http: Http) {}

  public readAll(havingProperties:Object): Observable<Word[]> {
    let searchParams = new URLSearchParams();

    if(havingProperties) {
      for(let property in havingProperties) {
        searchParams.append(property.toString(), havingProperties[property]);
      } 
    }
    
    let options = new RequestOptions({
          search: searchParams
    });
    
    var obj = this.http.get(this.wordsURL, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  
    return obj;
  }

  public read(id: string): Observable<Word> {
    let url = this.wordsURL + "/" + id;
    
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public create(data: Word): Observable<Word> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    delete data._id;

    return this.http.post(this.wordsURL, JSON.stringify(data), options)
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