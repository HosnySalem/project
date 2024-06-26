import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(public x: ProductService) {}
  ngOnInit(): void {
    this.x.getAllProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteProductHandler(id: any) {
    if(confirm('Are you sure you want to delete this Product?')){
      this.x.deleteProduct(id).subscribe({
        next: (data) => {
          this.products = this.products.filter((product: any) => product.id != id);
        },
        error: () => {},
      });
    }
  }
}
