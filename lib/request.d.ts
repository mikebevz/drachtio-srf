export = Request;
/**
 * @extends {Emitter}
 * @class
 */
declare class Request extends Emitter {
    /**
     *
     * @param {sip.SipMessage} msg
     * @param {Object} meta
     * @constructor
     */
    constructor(msg: sip.SipMessage, meta: any);
    /** @type {import('net').Socket | import('tls').TLSSocket} */
    socket: import('net').Socket | import('tls').TLSSocket;
    _passport: any;
    _originalParams: any;
    auth: any;
    /** @type {import('./connect') | null} */
    app: import('./connect') | null;
    srf: any;
    _dialogState: any;
    canceled: boolean;
    /** @type {sip.SipMessage} */
    msg: sip.SipMessage;
    set meta(arg: {
        source: string;
        source_address: string;
        source_port: number;
        protocol: string;
        time: string;
        transactionId: string;
        dialogId: string;
    });
    get meta(): {
        source: string;
        source_address: string;
        source_port: number;
        protocol: string;
        time: string;
        transactionId: string;
        dialogId: string;
    };
    set res(arg: Response);
    /**
     * @return {Response}
     */
    get res(): Response;
    /** @type {Response} */
    _res: Response;
    /**
     * @return {boolean}
     */
    get isNewInvite(): boolean;
    get url(): string;
    set agent(arg: DrachtioAgent);
    get agent(): DrachtioAgent;
    /** @type {import('./drachtio-agent')} */
    _agent: import('./drachtio-agent');
    /** @type {'network'|string} */
    source: 'network' | string;
    /** @type {string} */
    source_address: string;
    /** @type {number} */
    source_port: number;
    /** @type {string} */
    protocol: string;
    /** @type {string} */
    stackTime: string;
    /** @type {string} */
    stackTxnId: string;
    /** @type {string} */
    stackDialogId: string;
    /** @type {string} */
    server: string;
    /** @type {string} */
    receivedOn: string;
    /**
   * Cancel a request that was sent by the application
   * @param {Object} opts
   * @param {Record<string, string>} [opts.headers] optional headers to attach to the CANCEL request
   * @param {cancelCallback} callback - invoked with cancel operation completes
   */
    cancel(opts: {
        headers?: Record<string, string>;
    }, callback: (err: Error, req: Request) => any): void;
    /**
    * This callback is invoked when the application has sent a CANCEL for a request.
    * @callback cancelCallback
    * @param {Error} err - if an error occurred while attempting to send the cancel
    * @param {Request} req - the cancel request that was sent
    */
    /**
    * Proxy an incoming request
    * @param  {proxyOptions} opts - options governing the proxy operation
    * @param  {proxyCallback} [callback] - callback invoked when proxy operation completes
    * @returns {Promise|Request} returns a Promise if not callback is supplied, otherwise the Request object
    */
    proxy(opts: {
        /**
         * - an ordered list of one or more SIP URIs to proxy the request to
         */
        destination: string | any[];
        /**
         * - if true add a Record-Route header and emain in the SIP dialog
         * after the INVITE transaction.
         */
        remainInDialog?: boolean;
        /**
         * - if true respond to 3XX redirect responses by generating
         * a new INVITE to the SIP URI in the Contact header of the response
         */
        followRedirects?: boolean;
        /**
         * - 'simultaneous' or 'sequential'; dicates whether the proxy waits
         * for a failure response from one target before trying the next, or forks the request to all targets simultaneously
         */
        forking?: string;
        /**
         * - amount of time to wait for a 100 Trying response from a target before
         * trying the next target; valid syntax is '2s' or '1500ms' for example
         */
        provisionalTimeout?: string;
        /**
         * - amount of time to wait for a final response from a target before trying
         * the next target; syntax is as described above for provisionalTimeout
         */
        finalTimeout?: string;
        path?: boolean;
        recordRoute?: boolean;
    }, callback?: (err: Error, results: any) => any): Promise<any> | Request;
    /**
    * Options governing a proxy operation
    * @typedef {Object} proxyOptions
    * @property {string|Array} destination - an ordered list of one or more SIP URIs to proxy the request to
    * @property {boolean} [remainInDialog=false] - if true add a Record-Route header and emain in the SIP dialog
    * after the INVITE transaction.
    * @property {boolean} [followRedirects=false] - if true respond to 3XX redirect responses by generating
    * a new INVITE to the SIP URI in the Contact header of the response
    * @property {string} [forking=sequential] - 'simultaneous' or 'sequential'; dicates whether the proxy waits
    * for a failure response from one target before trying the next, or forks the request to all targets simultaneously
    * @property {string} [provisionalTimeout] - amount of time to wait for a 100 Trying response from a target before
    * trying the next target; valid syntax is '2s' or '1500ms' for example
    * @property {string} [finalTimeout] - amount of time to wait for a final response from a target before trying
    * the next target; syntax is as described above for provisionalTimeout
    * @property {boolean} [path]
    * @property {boolean} [recordRoute]
    */
    /**
    * This callback is invoked when proxy operation has completed.
    * @callback proxyCallback
    * @param {Error} err - if an error occurred while attempting to proxy the request
    * @param {Request.proxyResults} results - results summarizing the proxy operation
    */
    /**
     *
     * @param {Object} user
     * @param {Object} options
     * @param {Function} done
     */
    logIn(user: any, options: any, done: Function): void;
    session: any;
    logOut(): void;
    /**
     *
     * @returns {boolean}
     */
    isAuthenticated(): boolean;
    /**
     *
     * @returns {boolean}
     */
    isUnauthenticated(): boolean;
    get(...args: any[]): string;
    has(...args: any[]): boolean;
    getParsedHeader(...args: any[]): any;
    set(...args: any[]): sip.SipMessage;
    set method(arg: string);
    /**
     * @type {string | 'INVITE' | 'REFER' | 'NOTIFY' | 'BYE'}
     */
    get method(): string;
    set uri(arg: string);
    get uri(): string;
    set headers(arg: Record<string, string>);
    /**
     * @return {Record<string, string>}
     */
    get headers(): Record<string, string>;
    set body(arg: string);
    /**
     * @return {string}
     */
    get body(): string;
    set payload(arg: any);
    get payload(): any;
    get type(): "request" | "response";
    get raw(): string;
    get callingNumber(): string;
    get callingName(): string;
    get calledNumber(): string;
    get canFormDialog(): boolean;
}
import Emitter_1 = require("events");
import Emitter = Emitter_1.EventEmitter;
import sip = require("drachtio-sip");
import DrachtioAgent = require("./drachtio-agent");
