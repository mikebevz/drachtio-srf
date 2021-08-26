declare const _exports: typeof SipError;
export = _exports;
/**
 * Class representing a SIP non-success response to a transaction
 * @extends {Error}
 * @type {SipError}
 * @class
 */
declare class SipError extends Error {
    /**
     * Create a SipError object
     *
     * @constructor
     * @param  {number} status SIP final status
     * @param  {Array} [reason] reason for failure; if not provided
     * the standard reason associated with the provided SIP status is used
     */
    constructor(status: number, ...reason?: any[]);
    /** @type {number} */
    status: number;
    /** @type {string} */
    reason: string;
    /** @type {import('./srf').Response} */
    res: any;
}
