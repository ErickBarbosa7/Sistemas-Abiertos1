import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Character } from '../../interface';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  //explicacion
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent { 

    characters = input.required<Character[]>();
    
}
