import { Component } from "@angular/core";
import { Game } from "./models/game";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
//define a class here with the data we want to use in the html
export class AppComponent {
  //when the app starts selectedGame would be equal to a new empty object Game
  selectedGame: Game = new Game();
  gameArray: Game[] = [
    { id: 1, name: "Star wars legion", category: "strategy", players: 2 },
    { id: 2, name: "Warhammer", category: "strategy", players: 2 },
    { id: 3, name: "Lord of the rings", category: "Boardgame", players: 4 }
  ];
  //method to pass the information of a clicked element to the form
  selectToEdit(game: Game) {
    this.selectedGame = game;
  }
  //method to make a adifference between adding a new game or editing an existing one depending on the id
  addOrEdit(): void {
    if (this.selectedGame.id == 0) {
      this.selectedGame.id = this.gameArray.length + 1;
      this.gameArray.push(this.selectedGame);
    }
    this.selectedGame = new Game();
  }

  delete() {
    if (confirm("Are you sure you want to delete this item?")) {
      this.gameArray = this.gameArray.filter(game => game != this.selectedGame);
      this.selectedGame = new Game();
    }
  }
}
