import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the validatePermission method.  */
export class ValidatePermissionRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _challengeToken?: string | undefined;
    private _password?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the challengeToken property value. 
     * @returns a string
     */
    public get challengeToken() {
        return this._challengeToken;
    };
    /**
     * Sets the challengeToken property value. 
     * @param value Value to set for the challengeToken property.
     */
    public set challengeToken(value: string | undefined) {
        this._challengeToken = value;
    };
    /**
     * Instantiates a new validatePermissionRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["challengeToken", (o, n) => { (o as unknown as ValidatePermissionRequestBody).challengeToken = n.getStringValue(); }],
            ["password", (o, n) => { (o as unknown as ValidatePermissionRequestBody).password = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the password property value. 
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. 
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("challengeToken", this.challengeToken);
        writer.writeStringValue("password", this.password);
        writer.writeAdditionalData(this.additionalData);
    };
}