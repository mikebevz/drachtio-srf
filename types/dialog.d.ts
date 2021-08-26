declare const _exports: typeof Dialog;
export = _exports;
/**
 * Class representing a SIP Dialog.
 *
 * Note that instances of this class are not created directly by your code;
 * rather they are returned from the {@link Srf#createUAC}, {@link Srf#createUAC}, and {@link Srf#createB2BUA}
 * @extends EventEmitter
 * @type {Dialog}
 */
declare class Dialog {
    /**
     * Constructor that is called internally by Srf when generating a Dialog instance.
     * @param {Srf} srf - Srf instance that created this dialog
     * @param {string} type - type of SIP dialog: 'uac', or 'uas'
     * @param {Dialog~Options} opts
     */
    constructor(srf: any, type: string, opts: any);
    srf: any;
    type: any;
    req: any;
    res: any;
    agent: any;
    onHold: any;
    connected: any;
    queuedRequests: any;
    _queueRequests: any;
    _reinvitesInProgress: any;
    /**
     * sip properties that uniquely identify this Dialog
     * @type {Object}
     * @property {String} callId - SIP Call-ID
     * @property {String} localTag - tag generated by local side of the Dialog
     * @property {String} remoteTag  - tag generated by the remote side of the Dialog
     */
    sip: any;
    /**
     * local side of the Dialog
     * @type {Object}
     * @property {String} uri - sip
     * @property {String} sdp - session description protocol
     */
    local: any;
    /**
     * remote side of the Dialog
     * @type {Object}
     * @property {String} uri - sip
     * @property {String} sdp - session description protocol
     */
    remote: any;
    subscriptions: any;
    get id(): any;
    get dialogType(): any;
    get subscribeEvent(): any;
    get socket(): any;
    set stateEmitter(arg: any);
    _emitter: any;
    _state: any;
    set queueRequests(arg: any);
    toJSON(): any;
    toString(): any;
    getCountOfSubscriptions(): any;
    addSubscription(req: any): any;
    removeSubscription(uri: any, event: any): any;
    /**
     * destroy the sip dialog by generating a BYE request (in the case of INVITE dialog),
     * or NOTIFY (in the case of SUBSCRIBE)
     * @param {Object} [opts] configuration options
     * @param {Object} [opts.headers] SIP headers to add to the outgoing BYE or NOTIFY
     * @param  {function} [callback] if provided, callback with signature <code>(err, msg)</code>
     * that provides the BYE or NOTIFY message that was sent to terminate the dialog
     * @return {Promise|Dialog} if no callback is supplied, otherwise a reference to the Dialog
     */
    destroy(opts?: {
        headers?: any;
    }, callback?: Function): Promise<any> | Dialog;
    /**
     * modify the dialog session by changing attributes of the media connection
     * @param  {string} sdp - 'hold', 'unhold', or a session description protocol
     * @param  {function} [callback] - callback invoked with signature <code>(err)</code> when operation has completed
     * @return {Promise|Dialog} if no callback is supplied, otherwise the function returns a reference to the Dialog
     */
    modify(sdp: string, opts: any, callback?: Function): Promise<any> | Dialog;
    _promiseTxnInProgress: any;
    /**
     * send a request within a dialog.
     * Note that you may also call <code>request.info(..)</code> as a shortcut
     * to send an INFO message, <code>request.notify(..)</code>
     * to send a NOTIFY, etc..
     * @param {Object} [opts]
     * @param {string} opts.method - SIP method to use for the request
     * @param {Object} [opts.headers] - SIP headers to apply to the request
     * @param {string} [opts.body] - body of the SIP request
     * @param {function} [callback]  - callback invoked with signature <code>(err, req)</code>
     * when operation has completed
     * @return {Promise|Dialog} if no callback is supplied a Promise that resolves to the response received,
     * otherwise the function returns a reference to the Dialog
     */
    request(opts?: {
        method: string;
        headers?: any;
        body?: string;
    }, callback?: Function): Promise<any> | Dialog;
    handle(req: any, res: any): void;
}
