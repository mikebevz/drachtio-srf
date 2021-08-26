export = DigestClient;
/**
 * @type {DigestClient}
 */
declare class DigestClient {
    /**
     *
     * @param {Response} res
     * @constructor
     */
    constructor(res: Response);
    /** @type {Response} */
    res: Response;
    /** @type {Request} */
    req: Request;
    /** @type {DrachtioAgent} */
    agent: DrachtioAgent;
    nc: any;
    /**
     *
     * @param {Function} callback
     */
    authenticate(callback: Function): void;
    _updateNC(): string;
    _compileParams(params: any): string;
    _parseChallenge(digest: any): {};
}
import Response = require("./response");
import Request = require("./request");
import DrachtioAgent = require("./drachtio-agent");
