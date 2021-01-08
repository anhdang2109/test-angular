import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../product.service';
import {Ibook} from '../ibook';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  // products: Array<Ibook> = new Array<Ibook>();
  // @ts-ignore
  products: Ibook[];
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
      this.products = value;
      console.log(value);
      console.log(this.products);
    });
  }

}
