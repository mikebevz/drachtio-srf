declare const _exports: typeof SipError;
export = _exports;
/**
 * Class representing a SIP non-success response to a transaction
 * @extends {Error}
 * @type {SipError}
 */
declare class SipError extends Error {
    /**
     * Create a SipError object
     *
     * @constructor
     * @param  {number}  status SIP final status
     * @param  {string}  [reason] reason for failure; if not provided
     * the standard reason associated with the provided SIP status is used
     */
    constructor(...args: any[]);
    /** @type {number} */
    status: number;
    /** @type {string} */
    reason: string;
}
