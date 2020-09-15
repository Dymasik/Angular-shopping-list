import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuOptionSelected = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesChoosen() {
    this.menuOptionSelected.emit(true);
  }

  onShoppingListChoosen() {
    this.menuOptionSelected.emit(false);
  }

}
