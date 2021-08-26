export = createServer;
/**
 * Create a new server.
 *
 * @constructor
 * @api public
 */
declare function createServer(...args: any[]): {
    (req: Request, res: Response, next: Function): void;
    method: string;
    stack: any[];
    params: any[];
    _cachedEvents: any[];
    routedMethods: {};
    locals: any;
    /**
     *
     * @param {string} event
     * @param {VoidFunction} listener
     */
    on(event: string, listener: VoidFunction): any;
};
declare class createServer {
    /**
     * Create a new server.
     *
     * @constructor
     * @api public
     */
    constructor(...args: any[]);
}
declare namespace createServer {
    export { Agent };
    export { Request };
    export { Response };
    export { onSend };
}
import Request = require("./request");
import Response = require("./response");
import Agent = require("./drachtio-agent");
import onSend = require("./on-send");
