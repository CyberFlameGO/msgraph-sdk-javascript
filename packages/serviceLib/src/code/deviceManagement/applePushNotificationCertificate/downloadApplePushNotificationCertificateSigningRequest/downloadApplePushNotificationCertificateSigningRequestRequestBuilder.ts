import {createDownloadApplePushNotificationCertificateSigningRequestResponseFromDiscriminatorValue} from './createDownloadApplePushNotificationCertificateSigningRequestResponseFromDiscriminatorValue';
import {DownloadApplePushNotificationCertificateSigningRequestResponse} from './index';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the downloadApplePushNotificationCertificateSigningRequest method.  */
export class DownloadApplePushNotificationCertificateSigningRequestRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new DownloadApplePushNotificationCertificateSigningRequestRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/applePushNotificationCertificate/microsoft.graph.downloadApplePushNotificationCertificateSigningRequest()";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Download Apple push notification certificate signing request
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createGetRequestInformation(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Download Apple push notification certificate signing request
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DownloadApplePushNotificationCertificateSigningRequestResponse
     */
    public get(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DownloadApplePushNotificationCertificateSigningRequestResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendAsync<DownloadApplePushNotificationCertificateSigningRequestResponse>(requestInfo, createDownloadApplePushNotificationCertificateSigningRequestResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
