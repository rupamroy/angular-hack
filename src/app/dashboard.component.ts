import {Component, FORM_DIRECTIVES, NgFor, View} from 'angular2/angular2';
import {Attendee} from './attendee';
import {IndexedDbService} from './IndexedDb.service';

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<h2>Indexed Db Storage</h2>
		<input [(ng-model)]="name" />
        <input [(ng-model)]="emailAddress" />
		<button (click)="addAttendee()">Add Attendee</button>
		<ul>
            <li *ng-for="#attendee of attendeeList; #i = index">
                {{attendee.name}}
            </li>
        </ul>
	`,
	directives: [FORM_DIRECTIVES, NgFor]
})
export class DashboardComponent {
	public name = 'bar';
	public emailAddress = 'bar@foo.com';
    public message = '';
    public attendeeList: Attendee[];


    constructor (private indexedDb:IndexedDbService) {
        this.attendeeList = new Array<Attendee>();

    }

	addAttendee() {
        var attendee = new Attendee();
        attendee.name = this.name;
        attendee.emailAddress = this.emailAddress;
        //
        this.attendeeList.push(attendee);
        this.indexedDb.addData(attendee.name, attendee.emailAddress);

	}
}
