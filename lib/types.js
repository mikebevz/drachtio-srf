/**
 * @typedef {import('./request')} Request
 */

/**
 * @typedef {import('./response')} Response
 */

/**
 * @typedef {typeof import('./dialog')} Dialog
 */

// /**
//  * @typedef {import('./srf')} Srf
//  */

/**
 * @type {DialogState}
 */
class DialogState { }
/**
 * @type {DialogDirection}
 */
class DialogDirection {}

DialogState.Trying = 'trying';
DialogState.Proceeding = 'proceeding';
DialogState.Early = 'early';
DialogState.Confirmed = 'confirmed',
DialogState.Terminated = 'terminated';
DialogState.Rejected = 'rejected';
DialogState.Cancelled = 'cancelled';

DialogDirection.Initiator = 'initiator';
DialogDirection.Recipient = 'recipient';

module.exports = {
  DialogState,
  DialogDirection
};
