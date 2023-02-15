import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-theater-card',
  templateUrl: './theater-card.component.html',
  styleUrls: ['./theater-card.component.scss'],
})
export class TheaterCardComponent {
  @Input() theater: any = {} as any;
}
