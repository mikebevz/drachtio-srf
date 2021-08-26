export = app;
/**
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */
declare function app(req: Request, res: Response, next: Function): void;
declare namespace app {
    /**
     * @api private
     * @returns {Agent}
     */
    function _init(): Agent;
    /**
     * @api private
     * @returns {app}
     */
    function connect(...args: any[]): typeof app;
    /**
     * @api private
     * @returns {app}
     */
    function listen(...args: any[]): typeof app;
    /**
     *
     * @param {Object} socketHolder
     */
    function endSession(socketHolder: any): void;
    function request(): never;
    function set(prop: any, value: any): void;
    function get(prop: any): any;
    /**
     * Utilize the given middleware `handle` to the given `method`,
     * defaulting to _*_, which means execute for all methods.
     *
     * @param {String|Function} fn method or callback
     * @return {app} for chaining
     * @api public
     */
    function use(fn: string | Function, ...args: any[]): typeof app;
    /**
     * Handle server requests, punting them down
     * the middleware stack.
     * @param {Request} req
     * @param {Response} res
     * @api private
     *
     */
    function handle(req: Request, res: Response, out: any): void;
}
import Agent = require("./drachtio-agent");
