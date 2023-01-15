import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planet',
  standalone: true
})
export class PlanetPipe implements PipeTransform {

  transform(planetUrl?: string): string {
    if (!planetUrl) {
      return '';
    }

    const planetStr = 'planets/';
    const position = planetUrl.indexOf(planetStr);

    if (position === -1) {
      return '';
    }

    return planetUrl.slice(position + planetStr.length) ?? '';
  }

}
