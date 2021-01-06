import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    save(product: IProduct): Observable<any> {
        if (!!product.id) {
            return this.http.put(`http://localhost:8080/api/v1/update`, product);
        }
        return this.http.post(`http://localhost:8080/api/v1/product/create`, product);
    }

    findById(id: number): Observable<any> {
        return this.http.get(`http://localhost:8080/api/v1/product/${id}`);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`http://localhost:8080/api/v1/product/delete/${id}`);
    }

    getAll(): Observable<any> {
        return this.http.get('http://localhost:8080/api/v1/product/list');
    }
}
