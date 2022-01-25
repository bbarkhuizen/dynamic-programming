import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-programming';
  @Input() rows: number = 2;
  @Input() columns: number = 2;
  result: string = 'not calculated';
  public buttonClicked() {
    console.log('START------');
    this.result = this.gridTraveller(this.rows, this.columns).toString();
    console.log(`FINISH: ${this.result}`);
  }

  public gridTraveller(rows: number, columns: number): number {
    if (rows < 1 || columns < 1) return 0;
    else if (rows == 1 && columns == 1) return 1;
    else return this.gridTraveller(rows - 1, columns) + this.gridTraveller(rows, columns - 1);
  }
}
