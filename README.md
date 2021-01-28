# Front End Development Challenge (Angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Objective
This project is designed to take a few hours to complete and test your knowledge of how to built web apps driven by APIs in a modern framework (Angular).

## Getting Started
* Fork the project on github
* Ensure that you have Angular installed and running locally (with all its dependencies), you can use their setup doc [here](https://angular.io/guide/setup-local) as a reference
* Run `npm i` to install dependencies
* Create an empty file named `database.json` in the `server` directory at the root of the project
* Generate some test data by running the `generate` script
* Start your [`json-server` server](https://www.npmjs.com/package/json-server) to serve the generated data by running the `server` script
* Develop according to spec

## Sample spec
![A single page application with a navigation item on the sidebar that takes you to an address book. The main content being a representation of the list of addresses served by the server, each displayed as a Material card.](AngularSampleSpec.png?raw=true)
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Starting up Server with json-server and ng-serve
In two separate terminals, run the following commands:
`json-server --watch database.json`
`ng serve`