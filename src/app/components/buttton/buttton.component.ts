import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-buttton',
  templateUrl: './buttton.component.html',
  styleUrls: ['./buttton.component.css']
})
export class ButttonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
