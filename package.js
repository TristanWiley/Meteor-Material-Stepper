Package.describe({
  name: 'materialize-stepper',
  version: '2.1.4',
  // Brief, one-line summary of the package.
  summary: 'A little plugin, inspired by MDL-Stepper, that implements a stepper to Materializecss framework.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/TristanWiley/Meteor-Material-Stepper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use('ecmascript');
  api.mainModule('materialize-stepper.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('materialize-stepper');
  api.mainModule('materialize-stepper-tests.js');
});
