import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tapp-one',
  template: `
    <p>
      one works!
    </p>
  `,
  styles: []
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
