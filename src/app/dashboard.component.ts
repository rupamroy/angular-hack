import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<h2>Dashboard</h2>
		<input [(ng-model)]="name" />
        <input [(ng-model)]="emailAddress" />
		<button (click)="addAttendee()">Add Attendee</button>
		<p>{{message}}</p>
	`,
	directives: [FORM_DIRECTIVES]
})
export class DashboardComponent {
	public name = 'bar';
	public emailAddress = 'bar@foo.com';
    public message = '';

	addAttendee() {
        this.message = this.name + ' ' + this.emailAddress;
	}
}
