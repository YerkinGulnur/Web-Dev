<p *ngIf="product && product.price > 500">
  <button type="button" (click)="notify.emit()">Notify Me</button>
</p>