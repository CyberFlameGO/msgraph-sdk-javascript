import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the cleanWindowsDevice method.  */
export class CleanWindowsDeviceRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _keepUserData?: boolean | undefined;
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
     * Instantiates a new cleanWindowsDeviceRequestBody and sets the default values.
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
            ["keepUserData", (o, n) => { (o as unknown as CleanWindowsDeviceRequestBody).keepUserData = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the keepUserData property value. 
     * @returns a boolean
     */
    public get keepUserData() {
        return this._keepUserData;
    };
    /**
     * Sets the keepUserData property value. 
     * @param value Value to set for the keepUserData property.
     */
    public set keepUserData(value: boolean | undefined) {
        this._keepUserData = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("keepUserData", this.keepUserData);
        writer.writeAdditionalData(this.additionalData);
    };
}
