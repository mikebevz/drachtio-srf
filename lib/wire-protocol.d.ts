export = WireProtocol;
/**
 * @type {WireProtocol}
 * @extends {EventEmitter}
 */
declare class WireProtocol {
    constructor(opts: any);
    _logger: any;
    mapIncomingMsg: any;
    enablePing: any;
    pingInterval: any;
    mapTimerPing: any;
    connect(opts: any): void;
    host: any;
    port: any;
    reconnectOpts: any;
    reconnectVars: any;
    _evalPingOpts(opts: any): void;
    startPinging(socket: any): void;
    _stopPinging(socket: any): void;
    listen(opts: any): any;
    server: any;
    get isServer(): any;
    get isClient(): boolean;
    setLogger(logger: any): void;
    removeLogger(): void;
    installListeners(socket: any): void;
    initializeRetryVars(): void;
    _onConnectionGone(): void;
    socket: any;
    send(socket: any, msg: any): string;
    processMessageBuffer(socket: any, obj: any, length: any, start: any): void;
    _onData(socket: any, msg: any): void;
    disconnect(socket: any): void;
    closing: any;
    close(callback: any): void;
}
