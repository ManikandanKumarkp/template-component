import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> {{name}} Details</h1>
              <emp> </emp> `,
  styles: [`h1 { font-family: Lato; color:blue; font-size:22px; }`],
})
export class HelloComponent {
  @Input() name: string;
}
