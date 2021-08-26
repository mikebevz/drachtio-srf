export = onSend;
/**
 * Execute a listener when a response is about to be sent.
 *
 * @param { Response } res
 * @param {VoidFunction} listener
 * @return {void}
 * @api public
 */
declare function onSend(res: Response, listener: VoidFunction): void;
