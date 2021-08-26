export = Response;
/**
 * @type {SipResponse}
 * @type {Response}
 */
declare class Response extends Emitter {
    constructor(agent: any);
    _agent: any;
    msg: any;
    finished: boolean;
    set req(arg: any);
    get req(): any;
    _req: any;
    set agent(arg: any);
    get agent(): any;
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
    set statusCode(arg: any);
    get statusCode(): any;
    status: any;
    get finalResponseSent(): boolean;
    get headersSent(): boolean;
    send(status: any, reason: any, opts: any, callback: any, fnPrack: any): void;
    sendAck(dialogId: any, opts: any, callback: any): void;
    sendPrack(dialogId: any, opts: any, callback: any): void;
    toJSON(): any;
    removeHeader(hdrName: any): void;
    getHeader(hdrName: any): any;
    setHeader(hdrName: any, hdrValue: any): any;
    end(data: any, encoding: any, callback: any): void;
}
import Emitter_1 = require("events");
import Emitter = Emitter_1.EventEmitter;
