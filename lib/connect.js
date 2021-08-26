
const EventEmitter = require('events').EventEmitter;
const proto = require('./proto') ;
const merge = require('utils-merge');
const methods = require('sip-methods') ;
const Agent = require('./drachtio-agent');
const Request = require('./request');
const Response = require('./response');
const onSend = require('./on-send') ;

const types =  require('./types');

exports = module.exports = createServer;


/**
 * Create a new server.
 *
 * @constructor
 * @api public
 */

function createServer() {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */
  function app(req, res, next) {
    app.handle(req, res, next);
  }
  app.method = '*';
  merge(app, proto);
  merge(app, EventEmitter.prototype);
  app.stack = [];
  app.params = [];
  app._cachedEvents = [] ;
  app.routedMethods = {} ;
  app.locals = Object.create(null);
  for (var i = 0; i < arguments.length; ++i) {
    app.use(arguments[i]);
  }

  //create methods app.invite, app.register, etc..
  methods.forEach((method) => {
    app[method.toLowerCase()] = app.use.bind(app, method.toLowerCase()) ;
  }) ;

  //special handling for cdr events
  /**
   *
   * @param {string} event
   * @param {VoidFunction} listener
   */
  app.on = function(event, listener) {
    if (0 === event.indexOf('cdr:')) {
      if (app.client) {
        app.client.on(event, function() {
          var args = Array.prototype.slice.call(arguments) ;
          EventEmitter.prototype.emit.apply(app, [event].concat(args)) ;
        }) ;
      }
      else {
        this._cachedEvents.push(event) ;
      }
    }
    //delegate all others to standard EventEmitter prototype
    return EventEmitter.prototype.addListener.call(app, event, listener) ;
  };

  return app;
}


/** @type {typeof Agent} */
createServer.Agent = Agent;
/** @type {typeof Request} */
createServer.Request = Request;
/** @type {typeof Response} */
createServer.Response = Response;
/** @type {typeof onSend} */
createServer.onSend = onSend;
