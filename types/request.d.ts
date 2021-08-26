export = Request;
/**
 * @extends {EventEmitter}
 * @type {SipRequest}
 * @type {Request}
 */
declare class Request {
    constructor(msg: any, meta: any);
    msg: any;
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
    set res(arg: any);
    get res(): any;
    _res: any;
    get isNewInvite(): boolean;
    get url(): any;
    set agent(arg: any);
    get agent(): any;
    _agent: any;
    source: any;
    source_address: any;
    source_port: number;
    protocol: any;
    stackTime: any;
    stackTxnId: any;
    stackDialogId: any;
    server: any;
    receivedOn: any;
    /**
   * Cancel a request that was sent by the application
   * @param {Object} [opts.headers] optional headers to attach to the CANCEL request
   * @param  {Request~cancelCallback} callback - invoked with cancel operation completes
   */
    cancel(opts: any, callback: any): void;
    /**
    * This callback is invoked when the application has sent a CANCEL for a request.
    * @callback Request~cancelCallback
    * @param {Error} err - if an error occurred while attempting to send the cancel
    * @param {Request} req - the cancel request that was sent
    */
    /**
    * Proxy an incoming request
    * @param  {Request~proxyOptions} opts - options governing the proxy operation
    * @param  {Request~proxyCallback} [callback] - callback invoked when proxy operation completes
    * @returns {Promise|Request} returns a Promise if not callback is supplied, otherwise the Request object
    */
    proxy(opts: any, callback: any): Promise<any> | Request;
    /**
    * Options governing a proxy operation
    * @typedef {Object} Request~proxyOptions
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
    */
    /**
    * This callback is invoked when proxy operation has completed.
    * @callback Request~proxyCallback
    * @param {Error} err - if an error occurred while attempting to proxy the request
    * @param {Request~proxyResults} results - results summarizing the proxy operation
    */
    logIn(user: any, options: any, done: any): void;
    session: any;
    logOut(): void;
    isAuthenticated(): boolean;
    isUnauthenticated(): boolean;
}
