import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-characters-list-item',
  standalone: true,
  templateUrl: './characters-list-item.component.html',
  styleUrls: ['./characters-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersListItemComponent {

}
