exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }, {
    browserName: 'safari'
  }],

  specs: ['src/**/*.scenario.js']
}
