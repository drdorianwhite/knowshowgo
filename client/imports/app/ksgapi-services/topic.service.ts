import { Injectable } from "@angular/core";
import { Topic } from "../../../../both/models/topic.model";
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class TopicDataService {
  private topicsURL: string = "http://localhost:8000/api/topics";


  constructor(private http: Http) {}

 public readAll(): Observable<Topic[]> {
    let searchParams = new URLSearchParams();
    
    let options = new RequestOptions({
          search: searchParams
      });
    
    return this.http.get(this.topicsURL, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public read(id: string): Observable<Topic> {
    let url = this.topicsURL + "/" + id;
    
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public create(data: Topic): Observable<Topic> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    delete data._id;

    return this.http.post(this.topicsURL, JSON.stringify(data), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public update(data: Topic): Observable<Topic> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.topicsURL, JSON.stringify(data), options)
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