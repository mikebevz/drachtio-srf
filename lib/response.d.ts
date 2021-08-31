export = Response;
/**
 * @exports Response
 * @class
 */
declare class Response extends Emitter {
    /**
     *
     * @param {import('./drachtio-agent')} agent
     * @constructor
     */
    constructor(agent: import('./drachtio-agent'));
    _agent: import("./drachtio-agent");
    msg: sip.SipMessage;
    finished: boolean;
    /** @type {Srf}  */
    srf: any;
    /**
     * @param {import('./srf').Request} req
     */
    set req(arg: any);
    get req(): any;
    _req: any;
    set agent(arg: import("./drachtio-agent"));
    get agent(): import("./drachtio-agent");
    set meta(arg: {
        source: any;
        source_address: any;
        source_port: number;
        protocol: any;
        time: any;
        transactionId: any;
        dialogId: any;
    });
    get meta(): {
        source: any;
        source_address: any;
        source_port: number;
        protocol: any;
        time: any;
        transactionId: any;
        dialogId: any;
    };
    source: any;
    source_address: any;
    source_port: number;
    protocol: any;
    stackTime: any;
    stackTxnId: any;
    stackDialogId: any;
    set statusCode(arg: number);
    get statusCode(): number;
    set status(arg: number);
    get status(): number;
    get finalResponseSent(): boolean;
    get headersSent(): boolean;
    /**
     *
     * @param {number} status
     * @param {Function | Object} reason
     * @param {Object} opts
     * @param {Function} [callback]
     * @param {Function} [fnPrack]
     * @returns
     */
    send(status: number, reason: Function | any, opts: any, callback?: Function, fnPrack?: Function): void;
    /**
     *
     * @param {string} dialogId
     * @param {Object} opts
     * @param {VoidFunction} callback
     */
    sendAck(dialogId: string, opts: any, callback: VoidFunction): void;
    /**
     *
     * @param {string} dialogId
     * @param {Object} opts
     * @param {VoidFunction} callback
     */
    sendPrack(dialogId: string, opts: any, callback: VoidFunction): void;
    toJSON(): any;
    /**
     * for compatibility with expressjs res object so we can use passport etc and other frameworks
     * @param {string} hdrName
     */
    removeHeader(hdrName: string): void;
    /**
     *
     * @param {string} hdrName
     * @returns {string}
     */
    getHeader(hdrName: string): string;
    /**
     *
     * @param {string} hdrName
     * @param {string} hdrValue
     * @returns
     */
    setHeader(hdrName: string, hdrValue: string): sip.SipMessage;
    /**
     *
     * @param {VoidFunction | string} data
     * @param {VoidFunction | string} encoding
     * @param {VoidFunction} callback
     */
    end(data: VoidFunction | string, encoding: VoidFunction | string, callback: VoidFunction): void;
    get(...args: any[]): string;
    has(...args: any[]): boolean;
    getParsedHeader(...args: any[]): any;
    set(...args: any[]): sip.SipMessage;
    set headers(arg: Record<string, string>);
    get headers(): Record<string, string>;
    set body(arg: string);
    get body(): string;
    set payload(arg: any);
    get payload(): any;
    set reason(arg: string);
    get reason(): string;
    get raw(): string;
    get type(): "request" | "response";
}
import Emitter_1 = require("events");
import Emitter = Emitter_1.EventEmitter;
import sip = require("drachtio-sip");
