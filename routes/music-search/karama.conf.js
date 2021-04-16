module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular/cli'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular/cli/plugins/karma')
        ],
        client: {
            clearContext: false
        },
        files: [
            { pattern: './src/test.ts', watched: false }
        ],
        preprocessors: {
            './src/test.ts': [ '@angular/cli' ]
        },
        mime: {
            'texts/x-typescript': ['ts', 'txs']
        },
        coverageIstanbulReporter: {
            reports: [ 'html', 'lcovonly' ],
            fixWebpackSourcePaths: true
        },
        angularCli: {
            environment: 'dev'
        },
        reporters: config.angularCli && config.angularCli.codeCoverage
            ? ['progress', 'coverage-istanbul']
            : ['progress', 'kjhtml'],
        port: 9876,
        color: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browser: ['Chrome'],
        singleRun: false
    });
}