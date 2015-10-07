import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({ selector: 'my-app' })
@View({
  template: `
  <H1> HELLO WORLD </H1>
    `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }
