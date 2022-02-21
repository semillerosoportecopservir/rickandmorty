import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  id!: number;
  character!: Character;

  constructor(private _activeRouter: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params): void => {
      this.id = params['id'];
    });
    this.viewProfile(this.id);
  }

  viewProfile(id:number){
    this.characterService.getCharacterByDetail(this.id).subscribe((datos) => {
      console.log('character: ',this.character)
      this.character = datos
      console.log(this.character)
    })
  }

}
