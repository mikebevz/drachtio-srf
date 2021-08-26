export = createServer;
/**
 * Create a new server.
 *
 * @return {Function}
 * @api public
 */
declare function createServer(...args: any[]): Function;
declare namespace createServer {
    const Agent: any;
    const Request: Request;
    const Response: Response;
    const onSend: (res: any, listener: any) => Function;
}
