import {Component, OnInit} from '@angular/core';
import {Ibook} from '../ibook';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  // @ts-ignore
  private id: number;

  // @ts-ignore
  product: Ibook;


  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;

      this.productService.findById(this.id).toPromise().then(value => {
        console.log(value);
        this.product = value;
      });
    });
  }
}
