import { Component } from '@angular/core';
import { characterOptions } from '../../models/character-options';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent {
  character = {
    race: 'choose',
    class: 'choose',
    gender: undefined,
    name: 'fellow',
  };
  characterComplete: boolean;

  races = characterOptions.races;
  classes = characterOptions.classes;
  genders = characterOptions.genders; 

  constructor() {
    this.characterComplete = false;
  }

  changeRace(race: string){
    this.character.race = race;
    this.checkCompleted();
  }

  changeClass(clas: string) {
    this.character.class = clas;
    this.checkCompleted();
  }

  changeGender(gender: string) {
    this.character.gender = gender;
    this.checkCompleted();
  }

  changeName() {
    this.checkCompleted();
  }

  checkCompleted(){
    this.characterComplete = this.character.race !== 'choose'
    && this.character.class !== 'choose'
    && this.character.name !== 'fellow'
    && this.character.gender !== undefined;
  }

  createCharacter(){
    if(!this.characterComplete){
      return;
    }
    console.log(this.character);
  }

}
