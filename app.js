'use strict';

const Homey = require('homey');

module.exports = class NexaZwaveDevicesApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('NexaZwaveDevicesApp has been initialized');
  }
};
