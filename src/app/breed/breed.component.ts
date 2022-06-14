import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../breeds.service';
import { Cat } from '../model/cat';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

 cats :Cat[] =[]
 searchInput: string =''

  constructor(public breedsService: BreedsService) { }

  ngOnInit(): void {
    this.getCat()
  }

  getCat(){
    this.breedsService.getCats().subscribe(
      res => {
        this.cats = res
        console.log(this.cats)
      }

    )
  }

}
