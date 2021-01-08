import {Injectable} from '@angular/core';
import {Ibook} from './ibook';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

  update(product: Ibook, id: number): Observable<any> {
    if (!!product.id) {
      return this.http.put(`http://localhost:3000/books/${id}`, product);
    }
    return this.http.post(`http://localhost:3000/books`, product);
  }

    save(product: Ibook): Observable<any> {
        return this.http.post(`http://localhost:3000/books`, product);
    }

    findById(id: number): Observable<any> {
        return this.http.get(`http://localhost:3000/books/${id}`);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`http://localhost:3000/books/${id}`);
    }

    getAll(): Observable<any> {
        return this.http.get('http://localhost:3000/books');
    }
}
