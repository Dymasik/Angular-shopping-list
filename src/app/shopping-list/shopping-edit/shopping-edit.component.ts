import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onItemAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  onAddRecipe() {
    this.onItemAdded.emit(new Ingredient(this.nameInput.nativeElement.value, parseInt(this.amountInput.nativeElement.value)));
  }

}
