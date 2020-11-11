import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  editItem(item, index) {
    const toast = this.toastCtrl.create({
      message: "Editing item - " + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  removeItem(item, index) {
    const toast = this.toastCtrl.create({
      message: "Removing item - " + index + " ...",
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
  }

  addItem() {
    console.log("Adding item");
    this.inputDialogService.showPrompt();
  }

}
