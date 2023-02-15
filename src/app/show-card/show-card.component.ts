import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
  @Input() show: any = {} as any;
  @Output() purchase = new EventEmitter<{
    theaterId: number;
    showId: number;
  }>();

  constructor() {}

  ngOnInit() {}

  getFormattedDate() {
    const date = new Date(this.show.date);
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  getFormattedTime() {
    const date = new Date(this.show.date);
    return `${date.getHours()}:${date.getMinutes()}`;
  }
  onPurchase({ theaterId, showId }: { theaterId: number; showId: number }) {
    this.purchase.emit({ theaterId, showId });
  }
}
