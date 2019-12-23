import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  public produits:any;
  public size:number=5;
  public currentpage:number=0;

  constructor(private catService:CatalogueService) { }

  ngOnInit() {

  }
  OnGetProduct(){
    this.catService.getProduct(this.currentpage, this.size)
      .subscribe(data=>{
        this.produits=data;},err=>{
          console.log("une erreur est survenue"+err)

      })


  }

}
