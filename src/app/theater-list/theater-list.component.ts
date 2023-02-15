import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.scss'],
})
export class TheaterListComponent {
  @Input() theaters: any[] = [];
}
