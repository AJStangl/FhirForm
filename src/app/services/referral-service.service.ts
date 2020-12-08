import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ReferralForm} from '../interfaces/ReferralForm';

@Injectable({
  providedIn: 'root'
})

export class ReferralServiceService {
  private readonly endpoint = 'api/form';
  private readonly httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  public getFormData(): Observable<ReferralForm> {
    return this.http.get<ReferralForm>(this.endpoint)
      .pipe(
        tap(_ => this.log('Fetched Referral Form')),
        catchError(this.handleError<ReferralForm>('getFormData'))
      );
  }

  public log(message: string): void {
    console.log(message);
  }

  private handleError<T>(operation: string = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}


