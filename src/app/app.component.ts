import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';

@Component({ selector: 'my-app' })
@View({
  template: `
  <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Dashboard', component: DashboardComponent }
])
export class AppComponent { }
