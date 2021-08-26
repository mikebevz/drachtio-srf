export var _init: any;
export var connect: any;
export var listen: any;
export function endSession(socketHolder: any): void;
export function request(): never;
export function set(prop: any, value: any): void;
export function get(prop: any): any;
/**
 * Utilize the given middleware `handle` to the given `method`,
 * defaulting to _*_, which means execute for all methods.
 *
 * @param {String|Function} method or callback
 * @param {Function} callback
 * @return {Server} for chaining
 * @api public
 */
export function use(fn: any, ...args: any[]): any;
/**
 * Handle server requests, punting them down
 * the middleware stack.
 *
 * @api private
 */
export function handle(req: any, res: any, out: any): void;
