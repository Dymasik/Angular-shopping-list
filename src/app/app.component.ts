import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRecipe: boolean = true;

  onHeaderSelected(isRecipe: boolean) {
    this.isRecipe = isRecipe;
  }
}
