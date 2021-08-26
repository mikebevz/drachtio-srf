/// <reference types="node" />
export = DrachtioAgent;
/**
  * @typedef {Object} SocketObject
  * @property {Set} socket.pendingPingRequests
  * @property {Map} socket.pendingRequests
  * @property {Map} socket.pendingSipRequests
  * @property {Map} socket.pendingSipAuthRequests
  * @property {Map} socket.pendingNetworkInvites
  * @property {Map} socket.pendingAckOrPrack
  * @property {boolean} socket.authenticated
  * @property {boolean} socket.ready
  * @property {string | null} socket.hostport
  * @property {string | null} socket.serverVersion
  */
/**
 * @type {DrachtioAgent}
 * @extends {Emitter}
 * @class
 */
declare class DrachtioAgent extends Emitter {
    /**
     *
     * @param {VoidFunction} callback
     * @constructor
     */
    constructor(callback: VoidFunction);
    puntUpTheMiddleware: any;
    /** @type {Map<string, string>} */
    params: Map<string, string>;
    /** @type {Map<net.Socket | tls.TLSSocket, SocketObject>} */
    mapServer: Map<net.Socket | tls.TLSSocket, SocketObject>;
    /** @type {Map<string, {sent: boolean; acknowledged: boolean; rid: any }>} */
    verbs: Map<string, {
        sent: boolean;
        acknowledged: boolean;
        rid: any;
    }>;
    /** @type {Map<string, Function>} */
    cdrHandlers: Map<string, Function>;
    pendingSipAuthTxnIdUpdate: any;
    _listen: any;
    get isListening(): any;
    get idle(): boolean;
    connect(opts: any, callback: any): void;
    secret: any;
    tags: any;
    wp: any;
    listen(opts: any, callback: any): any;
    sendMessage(socket: any, msg: any, opts: any): any;
    _normalizeParams(socket: any, uri: any, options: any, callback: any): {
        socket: any;
        uri: any;
        options: any;
        callback: any;
    };
    /**
     *
     * @param {Object} params
     * @param {net.Socket | tls.TLSSocket} params.socket
     * @param {Object} params.options
     * @param {string} params.options.uri
     * @param {string} params.options.stackDialogId
     * @param {string} params.options.stackTxnId
     * @param {string} params.options.proxy
     * @param {Object} params.options.auth
     */
    _makeRequest(params: {
        socket: net.Socket | tls.TLSSocket;
        options: {
            uri: string;
            stackDialogId: string;
            stackTxnId: string;
            proxy: string;
            auth: any;
        };
    }): void;
    request(socket: any, request_uri: any, options: any, callback: any): void;
    sendResponse(res: any, opts: any, callback: any, fnAck: any): void;
    sendAck(method: any, dialogId: any, req: any, res: any, opts: any, callback: any): void;
    proxy(req: any, opts: any, callback: any): void;
    set(prop: any, val: any): void;
    get(prop: any): string;
    /**
     *
     * @param {string} verb
     */
    route(verb: string): void;
    /**
     *
     * @param {net.Socket | tls.TLSSocket} socket
     */
    routeVerbs(socket: net.Socket | tls.TLSSocket): void;
    /**
     *
     * @param {net.Socket | tls.TLSSocket} socket
     */
    disconnect(socket: net.Socket | tls.TLSSocket): void;
    close(): void;
    /**
     *
     * @returns {net.Socket | tls.TLSSocket}
     */
    _getDefaultSocket(): net.Socket | tls.TLSSocket;
    /**
     *
     * @param {net.Socket | tls.TLSSocket} socket
     * @returns {SocketObject}
     */
    _initServer(socket: net.Socket | tls.TLSSocket): SocketObject;
    /**
     *
     * @param {net.Socket | tls.TLSSocket} socket
     */
    _onConnect(socket: net.Socket | tls.TLSSocket): void;
    /**
     *
     * @param {net.Socket | tls.TLSSocket} socket
     */
    _onClose(socket: net.Socket | tls.TLSSocket): void;
    /**
     *
     * @param {net.Socket | tls.TLSSocket} socket
     * @param {string} msg
     * @returns
     */
    _onMsg(socket: net.Socket | tls.TLSSocket, msg: string): void;
    uac: any;
}
declare namespace DrachtioAgent {
    export { SocketObject };
}
import Emitter = require("events");
import net = require("net");
import tls = require("tls");
type SocketObject = {
    pendingPingRequests: Set<any>;
    pendingRequests: Map<any, any>;
    pendingSipRequests: Map<any, any>;
    pendingSipAuthRequests: Map<any, any>;
    pendingNetworkInvites: Map<any, any>;
    pendingAckOrPrack: Map<any, any>;
    authenticated: boolean;
    ready: boolean;
    hostport: string | null;
    serverVersion: string | null;
};
