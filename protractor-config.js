exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'mocha',
    baseUrl: 'http://localhost:3000',
    specs: ['tests/client/e2e/router.spec.js'],
    capabilities: {
        'browserName': 'chrome'
    }
}
