import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabaseProvider } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes , Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  viewProducts: any = [];
  products: any;
  router: Router;
  cart: any = [];
  cartPrice: number = 0;
  _authService:any;
  showCart:boolean = false;
  constructor(public authService: AuthService, db: AngularFireDatabase, rt: Router) { 
    this.products = db.list("/Products");
    this.products.forEach(element => {
      this.viewProducts = element;
      
      this.viewProducts.forEach(product => {
        product.PhotoSrc = "./assets/img/" + product.PhotoSrc;
        
      })
     
      console.log(this.viewProducts);
    });
    
    this.router = rt
    this._authService = authService;
    // console.log(this.products);
  }

  colorChange(item){
    let PhotoString = "";
    if(item.$key == "button001"){
      PhotoString = "./assets/img/cm_button_";
    } else if (item.$key == "cup001"){
      PhotoString = "./assets/img/cm_mug_";
    } else if (item.$key == "shirt001"){
      PhotoString = "./assets/img/cm_shirt_";
    } else if (item.$key == "wallet001"){
      PhotoString = "./assets/img/cm_wallet_";
    }
    item.PhotoSrc = PhotoString + item.SelectedColor + ".png";
    console.log(item.PhotoSrc);
  }

  addToCart(product){
    this.cart.push(product);
    this.cartPrice += product.ProductPrice;
    console.log(product);
  }
  changeButtonColor(color){


  }
  userLogout(){
    this._authService.userLogout();
  }
  ngOnInit() {
  }

}
