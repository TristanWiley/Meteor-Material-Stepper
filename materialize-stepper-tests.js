// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by materialize-stepper.js.
import { name as packageName } from "meteor/materialize-stepper";

// Write your tests here!
// Here is an example.
Tinytest.add('materialize-stepper - example', function (test) {
  test.equal(packageName, "materialize-stepper");
});
