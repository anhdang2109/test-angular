import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  // @ts-ignore
  newProductForm: FormGroup;

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.newProductForm = this.fb.group({
      name: [''],
      price: [''],
      description: ['']
    });
  }

  // tslint:disable-next-line:typedef
  create() {
    let newP: IProduct = this.newProductForm.value;
    this.productService.save(newP).subscribe(() => {
      alert('successfully');
      this.router.navigate(['/create']);
    });
  }
}
