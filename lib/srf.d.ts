/// <reference types="node" />
declare const _exports: typeof Srf;
export = _exports;
/**
 * Applications create an instance of Srf in order to create and manage SIP [Dialogs]{@link Dialog}
 * and SIP transactions.  An application may have one or more Srf instances, although for most cases a single
 * instance is sufficient.
 * @extends {Emitter}
 */
declare class Srf extends Emitter {
    /**
     * a SIP Dialog
     * @return {Dialog}
     */
    static get Dialog(): any;
    /**
     * inherits from Error and represents a non-success final SIP response to a request;
     * status and reason properties provide the numeric sip status code and the reason for the failure.
     * @return {SipError}
     */
    static get SipError(): any;
    /**
     * parses a SIP uri string
     * @return {Function} a function that takes a SIP uri and returns an object
     * @example
     * const Srf = require('drachtio-srf');
     * const srf = new Srf();
     * const parseUri = Srf.parseUri;
     *
     * // connect, etc..
     *
     * srf.invite((req, res) => {
     *  const uri = parseUri(req.get('From'));
     *  console.log(`parsed From header: ${JSON.stringify(uri)}`);
     *  // {
     *  //   "scheme": "sip",
     *  //   "family": "ipv4",
     *  //   "user": "+15083084807",
     *  //   "host": "192.168.1.100",
     *  //   "port": 5080,
     *  //   "params": {
     *  //      "tag": "3yid87"
     *  //    }
     *  // }
     * });
     */
    static get parseUri(): Function;
    static get stringifyUri(): any;
    /**
     * @returns {import('drachtio-sip').SipMessage}
     */
    static get SipMessage(): any;
    /**
     * @return {typeof Request}
     */
    static get SipRequest(): typeof Request;
    /**
     * @return {typeof Response}
     */
    static get SipResponse(): typeof Response;
    /**
     * @return {typeof DialogState}
     */
    static get DialogState(): typeof DialogState;
    /**
     * @return {typeof DialogDirection}
     */
    static get DialogDirection(): typeof DialogDirection;
    /**
     * Creates an instance of an signaling resource framework.
     * @param {string|Array|Object} [app] a string or array of strings, representing tag values for this application.
     * Tags can be used in conjunction with a call routing web callback to direct requests to particular applications.
     * @constructor
     */
    constructor(app?: string | any[] | any);
    /** @type {Map<string, Dialog>} */
    _dialogs: Map<string, any>;
    _tags: any[];
    _app: import('./connect');
    get app(): drachtio;
    /**
     *
     * @param {Object} opts
     * @param {string} opts.host
     * @param {number} opts.port
     * @param {string} opts.secret
     * @param {Function} [callback]
     * @returns
     */
    connect(opts: {
        host: string;
        port: number;
        secret: string;
    }, callback?: Function): any;
    /**
     *
     * @param {Object} opts
     * @param {Function} [callback]
     * @returns
     */
    listen(opts: any, callback?: Function): any;
    /**
     * drachtio middleware that enables Dialog handling
     * @param {Object} opts - configuration arguments, if any (currently unused)
     */
    dialog(opts: any): (req: Request, res: Response, next: Function) => void;
    /**
     * create a SIP dialog, acting as a UAS (user agent server); i.e.
     * respond to an incoming SIP INVITE with a 200 OK
     * (or to a SUBSCRIBE request with a 202 Accepted).
     *
     * Note that the {@link Dialog} is generated (i.e. the callback invoked / the Promise resolved)
     * at the moment that the 200 OK is sent back towards the requestor, not when the ACK is subsequently received.
     * @param  {Request} req the incoming sip request object
     * @param  {Response} res the sip response object
     * @param  {Object} opts configuration options
     * @param {Object} [opts.dialogStateEmitter]
     * @param {string} [opts.body]
     * @param {string|Function} [opts.localSdp] the local session description protocol to include in the SIP response
     * @param {Object} [opts.headers] SIP headers to include on the SIP response to the INVITE
     * @param  {function} [callback] if provided, callback with signature <code>(err, dialog)</code>
     * @return {Srf|Promise<Srf>} if a callback is supplied, a reference to the Srf instance.
     * <br/>If no callback is supplied, then a Promise that is resolved
     * with the [sip dialog]{@link Dialog} that is created.
     *
     * @example <caption>returning a Promise</caption>
     * const Srf = require('drachtio-srf');
     * const srf = new Srf();
     *
     * srf.invite((req, res) => {
     *   const mySdp; // populated somehow with SDP we want to answer in 200 OK
     *   srf.createUas(req, res, {localSdp: mySdp})
     *     .then((uas) => {
     *       console.log(`dialog established, remote uri is ${uas.remote.uri}`);
     *       uas.on('destroy', () => {
     *         console.log('caller hung up');
     *       });
     *     })
     *     .catch((err) => {
     *       console.log(`Error establishing dialog: ${err}`);
     *     });
     * });
     * @example <caption>using callback</caption>
     * const Srf = require('drachtio-srf');
     * const srf = new Srf();
     *
     * srf.invite((req, res) => {
     *   const mySdp; // populated somehow with SDP we want to offer in 200 OK
     *   srf.createUas(req, res, {localSdp: mySdp},
     *     (err, uas) => {
     *       if (err) {
     *         return console.log(`Error establishing dialog: ${err}`);
     *       }
     *       console.log(`dialog established, local tag is ${uas.sip.localTag}`);
     *       uas.on('destroy', () => {
     *         console.log('caller hung up');
     *       });
     *     });
     * });
     * @example <caption>specifying standard or custom headers</caption>
     * srf.createUas(req, res, {
     *     localSdp: mySdp,
     *     headers: {
     *       'User-Agent': 'drachtio/iechyd-da',
     *       'X-Linked-UUID': '1e2587c'
     *     }
     *   }).then((uas) => { ..});
     */
    createUAS(req: Request, res: Response, opts?: {
        dialogStateEmitter?: any;
        body?: string;
        localSdp?: string | Function;
        headers?: any;
    }, callback?: Function): Srf | Promise<Srf>;
    /**
    * create a SIP dialog, acting as a UAC (user agent client)
    *
    * @param  {string}   uri -  request uri to send to
    * @param  {Object}  opts   configuration options
    * @param  {Object}  [opts.headers] SIP headers to include on the SIP INVITE request
    * @param  {string}  opts.localSdp the local session description protocol to include in the SIP INVITE request
    * @param  {string}  [opts.proxy] send the request through an outbound proxy,
    * specified as full sip uri or address[:port]
    * @param  {Object}  opts.auth sip credentials to use if challenged,
    * or a function invoked with (req, res) and returning (err, username, password) where req is the
    * request that was sent and res is the response that included the digest challenge
    * @param  {string}  opts.auth.username sip username
    * @param  {string}  opts.auth.password sip password
    * @param  {string} opts.method
    * @param {string} opts.uri
    * @param {string} opts.calledNumber
    * @param {string} opts.callingNumber
    * @param {string} opts.callingName
    * @param {Function|Object} [cbRequest] - callback that provides request sent over the wire,
    * with signature (req)
    * @param {Function} [cbProvisional] - callback that provides a provisional response
    * with signature (provisionalRes)
    * @param  {Function} [callback] if provided, callback with signature <code>(err, dialog)</code>
    * @return {Srf|Promise} if a callback is supplied, a reference to the Srf instance.
    * <br/>If no callback is supplied, then a Promise that is resolved
    * with the [sip dialog]{@link Dialog} that is created.
    * @example <caption>returning a Promise</caption>
    * const Srf = require('drachtio-srf');
    * const srf = new Srf();
    *
    * const mySdp; // populated somehow with SDP we want to offer
    * srf.createUac('sip:1234@10.10.100.1', {localSdp: mySdp})
    *   .then((uac) => {
    *     console.log(`dialog established, call-id is ${uac.sip.callId}`);
    *     uac.on('destroy', () => {
    *       console.log('called party hung up');
    *     });
    *   })
    *   .catch((err) => {
    *     console.log(`INVITE rejected with status: ${err.status}`);
    *   });
    * });
    * @example <caption>Using a callback</caption>
    * const Srf = require('drachtio-srf');
    * const srf = new Srf();
    *
    * const mySdp; // populated somehow with SDP we want to offer
    * srf.createUac('sip:1234@10.10.100.1', {localSdp: mySdp},
    *    (err, uac) => {
    *      if (err) {
    *        return console.log(`INVITE rejected with status: ${err.status}`);
    *      }
    *     uac.on('destroy', () => {
    *       console.log('called party hung up');
    *     });
    *   });
    * @example <caption>Canceling a request by using a progress callback</caption>
    * const Srf = require('drachtio-srf');
    * const srf = new Srf();
    *
    * const mySdp; // populated somehow with SDP we want to offer
    * let inviteSent;
    * srf.createUAC('sip:1234@10.10.100.1', {localSdp: mySdp},
    *   {
    *     cbRequest: (reqSent) => { inviteSent = req; }
    *   })
    *   .then((uac) => {
    *     // unexpected, in this case
    *     console.log('dialog established before we could cancel');
    *   })
    *   .catch((err) => {
    *     assert(err.status === 487); // expected sip response to a CANCEL
    *   });
    * });
    *
    * // cancel the request after 0.5s
    * setTimeout(() => {
    *   inviteSent.cancel();
    * }, 500);
    */
    createUAC(uri: string, opts: {
        headers?: any;
        localSdp: string;
        proxy?: string;
        auth: {
            username: string;
            password: string;
        };
        method: string;
        uri: string;
        calledNumber: string;
        callingNumber: string;
        callingName: string;
    }, cbRequest?: Function | any, cbProvisional?: Function, callback?: Function): Srf | Promise<any>;
    /**
    * create back-to-back dialogs; i.e. act as a back-to-back user agent (B2BUA), creating a
    * pair of dialogs {uas, uac} -- a UAS dialog facing the caller or A party, and a UAC dialog
    * facing the callee or B party such that media flows between them
    * @param  {Object}  req  - incoming sip request object
    * @param  {Object}  res  - incoming sip response object
    * @param  {string}  uri - sip uri or IP address[:port] to send the UAC INVITE to
    * @param  {Object}  opts -   configuration options
    * @param {Object} [opts.headers] SIP headers to include on the SIP INVITE request to the B party
    * @param {Object} [opts.responseHeaders] SIP headers to include on responses to the A party.
    * Either an object containing SIP headers, or a function returning an object may be provided.
    * If a function is provided, it will be called with the signature (uacRes, headers),
    * where 'uacRes' is the response received from the B party, and 'headers' are the SIP headers
    * that have currently been set for the response.
    * @param {string|function} [opts.localSdpA] the local session description protocol
    * to offer in the response to the SIP INVITE request on the A leg; either a string or a function
    * may be provided. If a function is
    * provided, it will be invoked with two parameters (sdp, res) correspnding to the SDP received from the B
    * party, and the sip response object received on the response from B.
    * The function must return either the SDP (as a string)
    * or a Promise that resolves to the SDP. If no value is provided (neither string nor function), then the SDP
    * returned by the B party in the provisional/final response on the UAC leg will be
    * sent back to the A party in the answer.
    * @param {string} [opts.localSdpB] the local session description protocol to offer in the SIP INVITE
    * request on the B leg
    * @param {Array} [opts.proxyRequestHeaders] an array of header names which, if they appear in the INVITE request
    * on the A leg, should be included unchanged on the generated B leg INVITE
    * @param {Array} [opts.proxyResponseHeaders] an array of header names which, if they appear
    * in the response to the outgoing INVITE, should be included unchanged on the generated response to the A leg
    * @param {Boolean} [opts.passFailure=true] specifies whether to pass a failure returned from B leg back to the A leg
    * @param {Boolean} [opts.passProvisionalResponses=true] specifies whether to pass provisional responses
    * from B leg back to the A leg
    * @param  {string}  [opts.proxy] send the request through an outbound proxy,
    * specified as full sip uri or address[:port]
    * @param  {Object}  opts.auth sip credentials to use if challenged,
    * or a function invoked with (req, res) and returning (err, username, password) where req is the
    * request that was sent and res is the response that included the digest challenge
    * @param  {string}  [opts.auth.username] sip username
    * @param  {string}  [opts.auth.password] sip password
    * @param {Function|Object} [cbRequest] - callback that provides request sent over the wire,
    * with signature (req)
    * @param {Function} [cbProvisional] - callback that provides a provisional response
    * with signature (provisionalRes)
    * @param  {function} [callback] if provided, callback with signature <code>(err, {uas, uac})</code>
    * @return {Srf|Promise} if a callback is supplied, a reference to the Srf instance.
    * <br/>If no callback is supplied, then a Promise that is resolved
    * with the [sip dialog]{@link Dialog} that is created.
    * @example <caption>simple B2BUA</caption>
    * const Srf = require('drachtio-srf');
    * const srf = new Srf();
    *
    * srf.invite((req, res) => {
    *   srf.createB2BUA('sip:1234@10.10.100.1', req, res, {localSdpB: req.body})
    *     .then(({uas, uac}) => {
    *       console.log('call connected');
    *
    *       // when one side terminates, hang up the other
    *       uas.on('destroy', () => { uac.destroy(); });
    *       uac.on('destroy', () => { uas.destroy(); });
    *     })
    *     .catch((err) => {
    *       console.log(`call failed to connect: ${err}`);
    *     });
    * });
    * @example <caption>use opts.passFailure to attempt a fallback URI on failure</caption>
    * const Srf = require('drachtio-srf');
    * const srf = new Srf();
    *
    * function endCall(dlg1, dlg2) {
    *   dlg1.on('destroy', () => {dlg2.destroy();})
    *   dlg2.on('destroy', () => {dlg1.destroy();})
    * }
    * srf.invite((req, res) => {
    *   srf.createB2BUA('sip:1234@10.10.100.1', req, res, {localSdpB: req.body, passFailure: false})
    *     .then({uas, uac} => {
    *       console.log('call connected to primary destination');
    *       endcall(uas, uac);
    *     })
    *     .catch((err) => {
    *       // try backup if we got a sip non-success response and the caller did not hang up
    *       if (err instanceof Srf.SipError && err.status !== 487) {
    *           console.log(`failed connecting to primary, will try backup: ${err}`);
    *           srf.createB2BUA('sip:1234@10.10.100.2', req, res, {
    *             localSdpB: req.body}
    *           })
    *             .then({uas, uac} => {
    *               console.log('call connected to backup destination');
    *               endcall(uas.uac);
    *             })
    *             catch((err) => {
    *               console.log(`failed connecting to backup uri: ${err}`);
    *             });
    *       }
    *     });
    * });
    * @example <caption>B2BUA with media proxy using rtpengine</caption>
    * const Srf = require('drachtio-srf');
    * const srf = new Srf();
    * const rtpengine = require('rtpengine-client').Client
    *
    * // helper functions
    *
    * // clean up and free rtpengine resources when either side hangs up
    * function endCall(dlg1, dlg2, details) {
    *   [dlg1, dlg2].each((dlg) => {
    *     dlg.on('destroy', () => {(dlg === dlg1 ? dlg2 : dlg1).destroy();});
    *     rtpengine.delete(details);
    *   });
    * }
    *
    * // function returning a Promise that resolves with the SDP to offer A leg in 18x/200 answer
    * function getSdpA(details, remoteSdp, res) {
    *   return rtpengine.answer(Object.assign(details, {
    *     'sdp': remoteSdp,
    *     'to-tag': res.getParsedHeader('To').params.tag
    *    }))
    *     .then((response) => {
    *       if (response.result !== 'ok') throw new Error(`Error calling answer: ${response['error-reason']}`);
    *       return response.sdp;
    *    })
    * }
    *
    * // handle incoming invite
    * srf.invite((req, res) => {
    *   const from = req.getParsedHeader('From');
    *   const details = {'call-id': req.get('Call-Id'), 'from-tag': from.params.tag};
    *
    *   rtpengine.offer(Object.assign(details, {'sdp': req.body})
    *     .then((rtpResponse) => {
    *       if (rtpResponse && rtpResponse.result === 'ok') return rtpResponse.sdp;
    *       throw new Error('rtpengine failure');
    *     })
    *     .then((sdpB) => {
    *       return srf.createB2BUA('sip:1234@10.10.100.1', req, res, {
    *         localSdpB: sdpB,
    *         localSdpA: getSdpA.bind(null, details)
    *       });
    *     })
    *     .then({uas, uac} => {
    *       console.log('call connected with media proxy');
    *       endcall(uas, uac, details);
    *     })
    *     .catch((err) => {
    *       console.log(`Error proxying call with media: ${err}`);
    *     });
    * });
  
    */
    createB2BUA(req: any, res: any, uri: string, opts: {
        headers?: any;
        responseHeaders?: any;
        localSdpA?: string | Function;
        localSdpB?: string;
        proxyRequestHeaders?: any[];
        proxyResponseHeaders?: any[];
        passFailure?: boolean;
        passProvisionalResponses?: boolean;
        proxy?: string;
        auth: {
            username?: string;
            password?: string;
        };
    }, cbRequest?: Function | any, cbProvisional?: Function, callback?: Function): Srf | Promise<any>;
    /**
    * proxy an incoming request
    * @param  {Request}   req - drachtio request object representing an incoming SIP request
    * @param {String|Array} [destination] -  an IP address[:port], or list of same, to proxy the request to
    * @param  {Object}   [opts] - configuration options for the proxy operation
    * @param {String} [opts.forking=sequential] - when multiple destinations are provided,
    * this option governs whether they are attempted sequentially or in parallel.
    * Valid values are 'sequential' or 'parallel'
    * @param {Boolean} [opts.remainInDialog=false] - if true, add Record-Route header and
    * remain in the SIP dialog (i.e. receiving futher SIP messaging for the dialog,
    * including the terminating BYE request).
    * Alias: `recordRoute`.
    * @param {String} [opts.provisionalTimeout] - timeout after which to attempt the next destination
    * if no 100 Trying response has been received.  Examples of valid syntax for this property is '1500ms', or '2s'
      * @param {String} [opts.finalTimeout] - timeout, in milliseconds, after which to cancel
      * the current request and attempt the next destination if no final response has been received.
      * Syntax is the same as for the provisionalTimeout property.
    * @param {Boolean} [opts.followRedirects=false] - if true, handle 3XX redirect responses by
    * generating a new request as per the Contact header; otherwise, proxy the 3XX response
    * back upstream without generating a new response
    * @param  {function} [callback] - callback invoked when proxy operation completes, signature (err, results)
    * where `results` is a JSON object describing the individual sip call attempts and results
    * @returns {Srf|Promise} returns a Promise if no callback is supplied, otherwise the Srf object
    * @example <caption>simple proxy</caption>
    * const Srf = require('drachtio-srf');
    * const srf = new Srf();
    *
    * srf.invite((req, res) => {
    *   srf.proxyRequest(req, 'sip.example.com');
    * });
    *
    * @example <caption>proxy with options</caption>
    * const Srf = require('drachtio-srf');
    * const srf = new Srf();
    *
    * srf.invite((req, res) => {
    *   srf.proxyRequest(req, ['sip.example1.com', 'sip.example2.com'], {
    *     recordRoute: true,
    *     followRedirects: true,
    *     provisionalTimeout: '2s'
    *   }).then((results) => {
    *     console.log(JSON.stringify(result)); // {finalStatus: 200, finalResponse:{..}, responses: [..]}
    *   });
    * });
    */
    proxyRequest(req: Request, destination?: string | any[], opts?: {
        forking?: string;
        remainInDialog?: boolean;
        provisionalTimeout?: string;
        finalTimeout?: string;
        followRedirects?: boolean;
    }, callback?: Function): Srf | Promise<any>;
    /**
     * Send an outbound request outside of a Dialog.
     * @param {Socket} socket
     * @param {Request|Object} uri - request-uri
     * @param {Object} opts - options
     * @param {String} opts.method SIP method for the request
     * @param {Object} [opts.headers] SIP headers to include on the request
     * @param {String} [opts.body] body to include with the request
     * @param {Object} [opts.auth] authentication to use if challenged
     * @param {String} [opts.auth.username] sip username
     * @param {String} [opts.auth.password] sip password
     * @param {Function|Object} [callback] - callback invoked when request is sent, signature (err, requestSent)
    * where `requestSent` is a SipRequest sent out over the wire
    * @returns {Srf|Promise} returns a Promise if no callback is supplied, otherwise the Srf object
     */
    request(socket: Socket, uri: Request | any, opts: {
        method: string;
        headers?: any;
        body?: string;
        auth?: {
            username?: string;
            password?: string;
        };
    }, callback?: Function | any): Srf | Promise<any>;
    /**
     * Returns an existing dialog for a given dialog id, if it exists
     * @param {String} stackDialogId dialog id
     */
    findDialogById(stackDialogId: string): any;
    /**
     * Returns an existing dialog for a given sip call-id and from tag, if it exists
     * @param {String} callId SIP Call-ID
     * @param {String} tag SIP From tag
     */
    findDialogByCallIDAndFromTag(callId: string, tag: string): any;
    createUasDialog(req: any, res: any, opts: any, cb: any): void;
    createUacDialog(uri: any, opts: any, cb: any, cbProvisional: any): Promise<any>;
    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @param {string|string[]} uri
     * @param {Object} opts
     * @param {string} [opts.method]
     * @param {Array} [opts.proxyRequestHeaders]
     * @param {Array} [opts.proxyResponseHeaders]
     * @param {string} [opts.callingNumber]
     * @param {string} [opts.calledNumber]
     * @param {Object} [opts.headers]
     * @param {Object|string} [opts.localSdpB]
     * @param {Object|string} [opts.localSdp]
     * @param {Function} [opts.onProvisional]
     * @param {Function|string} [opts.localSdpA]
     * @param {Function} cb
     * @returns
     */
    createBackToBackDialogs(req: Request, res: Response, uri: string | string[], opts: {
        method?: string;
        proxyRequestHeaders?: any[];
        proxyResponseHeaders?: any[];
        callingNumber?: string;
        calledNumber?: string;
        headers?: any;
        localSdpB?: any | string;
        localSdp?: any | string;
        onProvisional?: Function;
        localSdpA?: Function | string;
    }, cb: Function): undefined;
    /**
     *
     * @param {Object} dialog
     */
    addDialog(dialog: any): void;
    /**
     *
     * @param {Object} dialog
     */
    removeDialog(dialog: any): void;
    /**
     *
     * @param {Object} dlg
     * @param {Request} req
     * @param {Response} res
     * @param {*} proxyRequestHeaders
     * @param {*} proxyResponseHeaders
     * @param {Function} [callback]
     */
    _b2bRequestWithinDialog(dlg: any, req: Request, res: Response, proxyRequestHeaders: any, proxyResponseHeaders: any, callback?: Function): void;
    endSession(...args: any[]): any;
    disconnect(...args: any[]): any;
    set(...args: any[]): any;
    get(...args: any[]): any;
    use(...args: any[]): any;
    set locals(arg: any);
    get locals(): any;
    get idle(): any;
    /**
     *
     * @param {(req: Request, res: Response) => void} cb
     * @returns
     */
    invite(cb: (req: Request, res: Response) => void): any;
    /**
     *
     * @param {(req: Request, res: Response) => void} cb
     * @returns
     */
    register(cb: (req: Request, res: Response) => void): any;
}
import Emitter = require("events");
import drachtio = require("./connect");
import Request = require("./request");
import Response = require("./response");
import Socket_1 = require("net");
import Socket = Socket_1.Socket;
import { DialogState } from "./types";
import { DialogDirection } from "./types";
