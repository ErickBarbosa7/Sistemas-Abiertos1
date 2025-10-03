import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Character } from '../../interface';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.component.html',
  standalone: true 
})
export class CharacterAddComponent {

  name = signal<string>('');
  power = signal<number>(0);

  @Output() onNewCharacter = new EventEmitter<Character>();

  addCharacter() {
    if (!this.name().trim() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: Date.now(), 
      name: this.name(),
      power: this.power()
    };

    this.onNewCharacter.emit(newCharacter);
    this.name.set('');
    this.power.set(0);
  }
}
