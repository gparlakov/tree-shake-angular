import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tapp-lazy',
  template: `
    <p>
      one-lazy works!
    </p>
    <tapp-two></tapp-two>
  `,
  styles: []
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
