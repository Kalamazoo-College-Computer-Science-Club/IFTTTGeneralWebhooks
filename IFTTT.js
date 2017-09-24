const IFTTT = require('node-ifttt-maker');
const ifttt = new IFTTT(<TOKEN GOES HERE>);
//get token procedure https://openthings.freshdesk.com/support/solutions/articles/5000716372-creating-an-ifttt-key-and-applet
let callIFTTT = {
  triggerApplet: (event) => {
      // Simple request
      ifttt
        .request(event)
        .then((response) => {})
        .catch((err) => {});
    },
  triggerMessage: (event, params) => {

    ifttt
      .request({event, params})
      .then((response) => {})
      .catch((err) => {});}

};
module.exports = callIFTTT;
