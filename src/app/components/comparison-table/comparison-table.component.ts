import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/photo.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss']
})

export class ComparisonTableComponent implements OnInit {

  @Input()
  dataSource: IPhoto[]

  displayedColumns: string[] = ['thumbnailUrl', 'id', 'url', 'title'];

  constructor() { }

  ngOnInit(): void {
  }

}
