import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss'],
})
export class TicketDialogComponent implements OnInit {
  tickets: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.fetchTicket();
  }

  fetchTicket() {
    this.customerService.fetchTickets().subscribe((res: any) => {
      this.tickets = !res.done ? [] : res.tickets;
    });
  }

  returnTicket(ticketId: number) {
    this.customerService.returnTicket(ticketId).subscribe((res: any) => {
      if (!res.done) {
        return;
      }

      this.fetchTicket();
    });
  }
}
