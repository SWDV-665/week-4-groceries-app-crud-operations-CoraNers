import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {

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
    this.showEditItemPrompt(item, index);
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
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Add Item',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }, 
        {
          text: 'Save',
          handler: item => {
            console.log('Save clicked', item);
            this.dataService.addItem(item);
          }
        }
      ]
    });
    alert.present();
  }

  showEditItemPrompt(item, index) {
    let alert = this.alertCtrl.create({
      title: 'Edit Item',
      message: 'Please edit item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item.quantity
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }, 
        {
          text: 'Save',
          handler: item => {
            console.log('Save clicked', item);
            this.dataService.editItem(item, index);
          }
        }
      ]
    });
    alert.present();
  }

}
