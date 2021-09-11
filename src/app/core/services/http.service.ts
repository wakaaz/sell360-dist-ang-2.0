import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpBaseService {

    httpOptions: HttpHeaders;
    baseUrl: string;
    domainUrl: string;
    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.apiUrl;
        this.domainUrl = environment.apiDomain;
        this.httpOptions = new HttpHeaders().set('Content-type', 'application/json');
    }

    get(url: string): Observable<any> {
        url = `${this.baseUrl}${url}`;
        return this.httpClient.get(url, { headers: this.httpOptions });
    }

    post(url: string, body: any = null): Observable<any> {
        url = `${this.baseUrl}${url}`;
        return this.httpClient.post(url, body, { headers: this.httpOptions });
    }

    put(url: string, body: any = null): Observable<any> {
        url = `${this.baseUrl}${url}`;
        return this.httpClient.put(url, body, { headers: this.httpOptions });
    }

    delete(url: string): Observable<any> {
        url = `${this.baseUrl}${url}`;
        return this.httpClient.delete(url, { headers: this.httpOptions });
    }
}
