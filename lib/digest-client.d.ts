export = DigestClient;
/**
 * @type {DigestClient}
 */
declare class DigestClient {
    constructor(res: any);
    res: any;
    req: any;
    agent: any;
    nc: any;
    authenticate(callback: any): void;
    _updateNC(): string;
    _compileParams(params: any): string;
    _parseChallenge(digest: any): {};
}
