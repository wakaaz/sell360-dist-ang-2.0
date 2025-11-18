import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { ProductService } from '../product.service';

@Component({

  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: false


})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productId: number;
  product: any;
  loader: boolean;
  activeSlide: number;
  sliderInterval: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastService: ToasterService
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

  getProduct(): void {
    this.loader = true;
    this.productService.getProduct(this.productId).subscribe(
      (res) => {
        this.loader = false;
        if (res.status === 200) {
          this.product = res.data;
          this.activeSlide = 0;
          this.startSlider();
        }
      },
      (error) => {
        this.loader = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            title: 'Error:',
            message: 'Something went wrong while fetching product detail!',
            type: 'error',
          });
          console.log('error :>> ', error);
        }
      }
    );
  }

  startSlider(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
    if (this.product?.images?.length > 1) {
      this.sliderInterval = setInterval(() => {
        if (this.activeSlide !== this.product.images.length - 1) {
          this.activeSlide += 1;
        } else {
          this.activeSlide = 0;
        }
      }, 10000);
    }
  }

  slideTo(id: number): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
    this.activeSlide = id;
    this.startSlider();
  }

  nextSlide(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
    if (this.product?.images?.length) {
      if (this.activeSlide === this.product.images.length - 1) {
        this.activeSlide = 0;
      } else {
        this.activeSlide += 1;
      }
      this.startSlider();
    }
  }

  prevSlide(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
    if (this.product?.images?.length) {
      if (this.activeSlide === 0) {
        this.activeSlide = this.product.images.length - 1;
      } else {
        this.activeSlide -= 1;
      }
      this.startSlider();
    }
  }

  ngOnDestroy(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
    this.sliderInterval = null;
  }
}
