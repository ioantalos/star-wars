import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Character} from "../models/character.model";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-characters-list-item',
  standalone: true,
  templateUrl: './characters-list-item.component.html',
  styleUrls: ['./characters-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule]
})
export class CharactersListItemComponent {
  @Input() character!: Character;
}
