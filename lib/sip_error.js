const assert = require('assert');

/**
 * Class representing a SIP non-success response to a transaction
 * @extends {Error}
 * @type {SipError}
 * @class
 */
class SipError extends Error {

  /**
   * Create a SipError object
   *
   * @constructor
   * @param  {number} status SIP final status
   * @param  {Array} [reason] reason for failure; if not provided
   * the standard reason associated with the provided SIP status is used
   */
  constructor(status, ...reason /*status, reason*/) {
    super([status, ...reason].toString()) ;

    assert.ok(typeof status === 'number', 'first argument to SipError must be number');
    assert.ok(typeof reason[1] === 'string' || typeof reason[1] === 'undefined',
      'second argument to SipError, if provided, must be a string');

    /** @type {string} */
    this.name = 'SipError';
    /** @type {number} */
    this.status = status;
    if (reason[1])
      /** @type {string} */
      this.reason = reason[1];
    /** @type {string} */
    this.message = 'Sip non-success response: ' + this.status;
    /** @type {import('./srf').Response} */
    this.res = null;

    Error.captureStackTrace(this, SipError);
  }
}

module.exports = exports = SipError ;
