import {bind, bootstrap} from 'angular2/angular2';
import {routerBindings, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {AppComponent} from './app.component';
import {IndexedDbService} from './IndexedDb.service';

bootstrap(AppComponent, [
	routerBindings(AppComponent),
	IndexedDbService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
