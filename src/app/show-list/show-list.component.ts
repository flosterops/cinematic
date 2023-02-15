import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
})
export class ShowListComponent {
  @Input() shows: any[] = [];
  @Output() purchase = new EventEmitter<{
    theaterId: number;
    showId: number;
  }>();

  onPurchase({ theaterId, showId }: { theaterId: number; showId: number }) {
    this.purchase.emit({ theaterId, showId });
  }
}
