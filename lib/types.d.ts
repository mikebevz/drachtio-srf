export type Request = import('./request');
export type Response = import('./response');
export type Dialog = typeof import('./dialog');
/**
 * @typedef {import('./request')} Request
 */
/**
 * @typedef {import('./response')} Response
 */
/**
 * @typedef {typeof import('./dialog')} Dialog
 */
/**
 * @type {DialogState}
 */
export class DialogState {
}
export namespace DialogState {
    const Trying: string;
    const Proceeding: string;
    const Early: string;
    const Confirmed: string;
    const Terminated: string;
    const Rejected: string;
    const Cancelled: string;
}
/**
 * @type {DialogDirection}
 */
export class DialogDirection {
}
export namespace DialogDirection {
    const Initiator: string;
    const Recipient: string;
}
