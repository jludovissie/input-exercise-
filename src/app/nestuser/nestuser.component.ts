import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nestuser',
  templateUrl: './nestuser.component.html'

})
export class NestuserComponent implements OnInit {
@Input() myName= ""
  constructor() { }

  ngOnInit(): void {
  }

}
