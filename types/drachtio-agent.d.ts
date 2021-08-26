export = DrachtioAgent;
/**
 * @type {DrachtioAgent}
 * @type {Agent}
 * @extends {EventEmitter}
 */
declare class DrachtioAgent {
    constructor(callback: any);
    puntUpTheMiddleware: any;
    params: any;
    mapServer: any;
    verbs: any;
    cdrHandlers: any;
    pendingSipAuthTxnIdUpdate: any;
    _listen: any;
    get isListening(): any;
    get idle(): boolean;
    connect(opts: any, callback: any): void;
    secret: any;
    tags: any;
    wp: any;
    listen(opts: any, callback: any): any;
    on(event: any, fn: any, ...args: any[]): DrachtioAgent;
    sendMessage(socket: any, msg: any, opts: any): any;
    _normalizeParams(socket: any, uri: any, options: any, callback: any): {
        socket: any;
        uri: any;
        options: any;
        callback: any;
    };
    _makeRequest(params: any): void;
    request(socket: any, request_uri: any, options: any, callback: any): void;
    sendResponse(res: any, opts: any, callback: any, fnAck: any): void;
    sendAck(method: any, dialogId: any, req: any, res: any, opts: any, callback: any): void;
    proxy(req: any, opts: any, callback: any): void;
    set(prop: any, val: any): void;
    get(prop: any): any;
    route(verb: any): void;
    routeVerbs(socket: any): void;
    disconnect(socket: any): void;
    close(): void;
    _getDefaultSocket(): any;
    _initServer(socket: any): any;
    _onConnect(socket: any): void;
    _onClose(socket: any): void;
    _onMsg(socket: any, msg: any): void;
    uac: any;
}
