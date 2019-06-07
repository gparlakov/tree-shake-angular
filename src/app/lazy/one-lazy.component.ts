import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tapp-one-lazy',
  template: `
    <p>
      one-lazy works!
    </p>
    <tapp-two></tapp-two>
  `,
  styles: []
})
export class OneLazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
