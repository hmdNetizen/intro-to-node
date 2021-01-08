const EventEmitter = require("events");

const url = "https://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // sent HTTP Request
    console.log(message);

    //raise an event
    this.emit("Loading", { data: "Message" });
  }
}

module.exports = Logger;
