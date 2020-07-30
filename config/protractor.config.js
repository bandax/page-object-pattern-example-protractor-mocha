exports.config = {
    directConnect: true,
    framework: 'mocha',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs:[
        '../test/specs/*spec.js'
    ],

    capabilities:{
        'browserName': 'chrome'
    },

    mochaOpts: {
        reporter: 'spec',
        timeout: 80000
    }

}