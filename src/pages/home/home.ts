import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Bananas",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    }
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

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

    this.items.splice(index, 1);
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
            this.items.push(item);
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
            this.items[index] = item;
          }
        }
      ]
    });
    alert.present();
  }

}
