import { Component, OnInit } from '@angular/core';
import { Characters } from '../../core/models/characters';
import { Services } from '../../core/services';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-rick-list',
  imports: [],
  templateUrl: './rick-list.html',
  styleUrl: './rick-list.css',
})
export class RickList implements OnInit {

  pagenumber: number = 1;
isloading: boolean = true;
  characters: Characters | undefined;

  constructor(private characterService: Services) { }
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() : void {
    this.characterService
    .getCharacters(this.pagenumber).pipe(
      finalize(() => this.isloading = false)
    )
    .subscribe(
      (response) => {
        this.characters = response;
      this.pagenumber++;
      },
      (error) => {
        console.error('Error en la petición:', error);
      }
    )
  }
}
