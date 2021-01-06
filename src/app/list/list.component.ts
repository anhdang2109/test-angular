import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  // products: Array<IProduct> = new Array<IProduct>();
  // @ts-ignore
  products: IProduct[];
  // @ts-ignore
  public modalRef: BsModalRef;

  constructor(private productService: ProductService,
              private modalService: BsModalService) {
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.productService.getAll().toPromise().then(value => {
      this.products = value.data;
    });
  }

}
