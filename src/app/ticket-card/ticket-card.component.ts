import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QrCodeComponent } from '../qr-code/qr-code.component';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent {
  @Input() ticket: any = {} as any;
  @Output() returnTicket = new EventEmitter<number>();

  constructor(private dialog: MatDialog) {}

  getFormattedDate() {
    const date = new Date(this.ticket.Show.date);
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  getFormattedTime() {
    const date = new Date(this.ticket.Show.date);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  isReturnable() {
    const date = new Date();
    const ticketDate = new Date(this.ticket.Show.date);

    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const ticketHours = ticketDate.getHours();
    const ticketMinutes = ticketDate.getMinutes();

    const currentMinutesTotal = currentHours * 60 + currentMinutes;
    const ticketMinutesTotal = ticketHours * 60 + ticketMinutes;
    const timeDiff = ticketMinutesTotal - currentMinutesTotal;

    date.setHours(0, 0, 0);
    ticketDate.setHours(0, 0, 0);

    if (date !== ticketDate || timeDiff > 60) {
      return true;
    }

    return false;
  }

  onReturnTicket(ticketId: number) {
    this.returnTicket.emit(ticketId);
  }

  showQRCode() {
    const query = `ticketId=${this.ticket.id}&showId=${this.ticket.Show.id}&seat=${this.ticket.Seat.id}`;
    const src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${query}`;
    this.dialog.open(QrCodeComponent, { data: { src } });
  }
}
