import {Component, OnInit} from '@angular/core';
import {Ibook} from '../ibook';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  // @ts-ignore
  private id: number;

  // @ts-ignore
  private product: Ibook;

  // @ts-ignore
  form: FormGroup;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;

      this.productService.findById(this.id).toPromise().then(value => {
        console.log(value);
        this.product = value;

        this.form.patchValue({
          title: this.product.title,
          author: this.product.author,
          description: this.product.description,
        });
      });
    });
  }

  // tslint:disable-next-line:typedef
  onUpdate() {
    if (!this.form.invalid) {
      this.product.name = this.form.value.name;
      this.product.price = this.form.value.price;
      this.product.thumbnail = this.form.value.description;
      console.log(this.product);

      this.productService.update(this.product, this.id ).toPromise().then(value => {
        console.log('Update', value);
      });
      this.router.navigate(['/']);
    }
  }
}
