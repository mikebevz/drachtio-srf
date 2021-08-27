declare const _exports: {
    new (status: number, ...reason?: any[]): SipError;
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
    SipError: typeof SipError;
};
export = _exports;
/**
 * Class representing a SIP non-success response to a transaction
 * @extends {Error}
 * @type {SipError}
 * @class
 */
export class SipError extends Error {
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
    /** @type {Response} */
    res: Response;
}
import Response = require("./response");
