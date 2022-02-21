import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/services/characters.service';
import { take } from 'rxjs/operators';
import { RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  characters: Character[] = [];
  page: number = 1;
  query: string= '';
  constructor(private router: Router,private allCharacters: CharactersService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(){
    // this.allCharacters.getAllCharacters(this.query, this.page)
    this.allCharacters.getAllCharacters()
    .pipe(take(1))
    .subscribe((res:any) => {
      const {info, results } = res;
      this.characters = [... this.characters, ... results];
    });
  }

  viewProfile(id: number){
    this.router.navigate(['/character',id])
  }
  viewChapters(){}

}


