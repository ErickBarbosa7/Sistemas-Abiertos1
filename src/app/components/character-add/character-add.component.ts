import { Component, effect, EventEmitter, linkedSignal, Output, signal } from '@angular/core';
import { Character } from '../../interface';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.component.html',
  standalone: true 
})
export class CharacterAddComponent {

  
  
  @Output() onNewCharacter = new EventEmitter<Character>();
  //name = signal<string>('');
  //power = signal<number>(0);
  private nameSignal = signal<string>('');
  private powerSignal = signal<number>(0);

  name = linkedSignal(() => this.nameSignal());
  power = linkedSignal(() => this.powerSignal());
  constructor() {
    // Efectos para sincronizar con LocalStorage
    const nameStored = localStorage.getItem('character_name');
    const powerStored = localStorage.getItem('character_power');

    if (nameStored) this.nameSignal.set(JSON.parse(nameStored));
    if (powerStored) this.powerSignal.set(JSON.parse(powerStored));

    // Persistir cuando cambian
    effect(() => {
      localStorage.setItem('character_name', JSON.stringify(this.name()));
      localStorage.setItem('character_power', JSON.stringify(this.power()));
    });
  }

   addCharacter() {
    if (!this.name().trim() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: Date.now(),
      name: this.name(),
      power: this.power()
    };

    this.onNewCharacter.emit(newCharacter);
    this.nameSignal.set('');
    this.powerSignal.set(0);
  }

  /*addCharacter() {
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
  
  */
 
 
}
