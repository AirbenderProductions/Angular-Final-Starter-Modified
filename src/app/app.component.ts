import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    // city property
    // state property
    // weather property

    // constructor
    // bring in geoLocationService, weatherService

    // read from inputs
    // [(ngModel)] two way data binding, FormsModule in main app.module.ts!!!!

    // submit method
    // city and state, pass to geoLocationService -> subscribe to the response
    // looks like response.results[0].locations[0].latLng.lat, lng,
    // take geo response, pass it down to the weatherService.getCurrentWeatherByPosition(lat,lng) -> response
    // take weather response, and store it

    // httpclient needs to be subscribed to
    // fetch needs to be told then

    getGoogle() {
        fetch("google.com").then(response => console.log(response));
    }

    title = "Weather";
}
