import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SeatService } from '../services/seat/seat.service';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-purchase-dialog',
  templateUrl: './purchase-dialog.component.html',
  styleUrls: ['./purchase-dialog.component.scss'],
})
export class PurchaseDialogComponent implements OnInit {
  selectedSeats: Set<number> = new Set();
  seats: any[] = [];

  constructor(
    private seatService: SeatService,
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<PurchaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { showId: number; theaterId: number }
  ) {}

  ngOnInit() {
    this.seatService.fetchSeats(this.data.theaterId).subscribe((res: any) => {
      const sortedSeats = res.seats.sort((a: any, b: any) => {
        if (a.row !== b.row) {
          return a.row - b.row;
        }

        return a.number - b.number;
      });

      const rowsSeats: any = {};

      sortedSeats.forEach((item: any) => {
        if (!rowsSeats[item.row]) {
          rowsSeats[item.row] = [];
        }

        rowsSeats[item.row].push(item);
      });

      const seats = Object.entries(rowsSeats).map(([key, value]) => {
        return { row: Number(key), seats: value };
      });

      this.seats = !res.done ? [] : seats;
    });
  }

  onSelectSeat(id: number) {
    if (this.selectedSeats.has(id)) {
      return this.selectedSeats.delete(id);
    }

    return this.selectedSeats.add(id);
  }

  onPurchase() {
    const seatIds = Array.from(this.selectedSeats.keys()).map((key: number) =>
      Number(key)
    );
    this.customerService
      .purchaseTickets(this.data.showId, seatIds)
      .subscribe((res: any) => {
        if (!res.done) {
          return;
        }

        this.dialogRef.close();
      });
  }
}
