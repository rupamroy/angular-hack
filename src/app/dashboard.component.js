var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var attendee_1 = require('./attendee');
var IndexedDb_service_1 = require('./IndexedDb.service');
var DashboardComponent = (function () {
    function DashboardComponent(indexedDb) {
        this.indexedDb = indexedDb;
        this.name = 'bar';
        this.emailAddress = 'bar@foo.com';
        this.message = '';
        this.attendeeList = new Array();
    }
    DashboardComponent.prototype.addAttendee = function () {
        var attendee = new attendee_1.Attendee();
        attendee.name = this.name;
        attendee.emailAddress = this.emailAddress;
        //
        this.attendeeList.push(attendee);
        this.indexedDb.addData(attendee.name, attendee.emailAddress);
    };
    DashboardComponent = __decorate([
        angular2_1.Component({ selector: 'my-dashboard' }),
        angular2_1.View({
            template: "\n\t\t<h2>Indexed Db Storage</h2>\n\t\t<input [(ng-model)]=\"name\" />\n        <input [(ng-model)]=\"emailAddress\" />\n\t\t<button (click)=\"addAttendee()\">Add Attendee</button>\n\t\t<ul>\n            <li *ng-for=\"#attendee of attendeeList; #i = index\">\n                {{attendee.name}}\n            </li>\n        </ul>\n\t",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [IndexedDb_service_1.IndexedDbService])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map