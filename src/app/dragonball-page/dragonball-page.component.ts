import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { CharacterListComponent } from "../components/character-list/character-list.component";
import { CharacterAddComponent } from "../components/character-add/character-add.component"; // 👈
import { Character } from "../interface";

@Component({
  selector: "app-dragonball-page",
  imports: [CommonModule, CharacterListComponent, CharacterAddComponent], 
  templateUrl: "./dragonball-page.component.html",
  styleUrls: ["./dragonball-page.component.css"],
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001 },
    { id: 2, name: "Vegeta", power: 8500 },
    { id: 3, name: "Krillin", power: 1000 },
    { id: 4, name: "Yamcha", power: 500 },
  ]);

  addCharacter(newCharacter: Character): void {
    this.characters.set([...this.characters(), newCharacter]);
  }
}
