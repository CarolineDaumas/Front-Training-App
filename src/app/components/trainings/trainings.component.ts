import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  listTrainings : Training[] | undefined;
  error=null;

  constructor(private cartService : CartService, private router : Router,
    private trainingsService:TrainingsService, private authentificationService :AuthentificationService) {
   }

  ngOnInit(): void {
    this.getAllTrainings();
  }

 getAllTrainings(){
   this.trainingsService.getTrainings().subscribe({
     next: (data) => this.listTrainings= data,
     error: (err) => this.error=err.message,
     complete: () => this.error =null
   })
 }

 onAddToCart(training: Training) {

  alert("Votre article a bien été ajouté au panier")
  this.cartService.addTraining(training)

}

onConnectedAsAdmin():boolean{
  if(this.authentificationService.connectedAsAdmin()) return true; 
  else return false;
}
}
