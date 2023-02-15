import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent {
  constructor(
    private dialogRef: MatDialogRef<QrCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { src: string }
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
