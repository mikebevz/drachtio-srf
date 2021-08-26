export = WireProtocol;
/**
 * @type {WireProtocol}
 * @extends {Emitter}
 */
declare class WireProtocol extends Emitter {
    /**
     *
     * @param {Object} opts
     * @param {Object} opts.logger
     */
    constructor(opts: {
        logger: any;
    });
    _logger: any;
    mapIncomingMsg: any;
    enablePing: any;
    pingInterval: any;
    mapTimerPing: any;
    /**
     *
     * @param {Object} opts
     * @param {string} opts.host
     * @param {number} opts.port
     * @param {Object} [opts.reconnect]
     * @param {import('tls').ConnectionOptions} [opts.tls]
     */
    connect(opts: {
        host: string;
        port: number;
        reconnect?: any;
        tls?: import('tls').ConnectionOptions;
    }): void;
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
import Emitter = require("events");
