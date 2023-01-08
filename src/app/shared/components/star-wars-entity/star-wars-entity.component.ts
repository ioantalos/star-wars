import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-wars-entity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-wars-entity.component.html',
  styleUrls: ['./star-wars-entity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarWarsEntityComponent {

}
