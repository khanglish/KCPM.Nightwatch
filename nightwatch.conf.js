const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
module.exports = {
  src_folders: ['test'],
  output_folder: 'reports',
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    server_port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: false
      },
      globals: {
        waitForConditionTimeout: 5000
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    }
  }
};