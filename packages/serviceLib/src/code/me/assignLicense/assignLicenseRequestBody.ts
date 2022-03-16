import {AssignedLicense} from '../../models/microsoft/graph/';
import {createAssignedLicenseFromDiscriminatorValue} from '../../models/microsoft/graph/createAssignedLicenseFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assignLicense method.  */
export class AssignLicenseRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _addLicenses?: AssignedLicense[] | undefined;
    private _removeLicenses?: string[] | undefined;
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
     * Gets the addLicenses property value. 
     * @returns a assignedLicense
     */
    public get addLicenses() {
        return this._addLicenses;
    };
    /**
     * Sets the addLicenses property value. 
     * @param value Value to set for the addLicenses property.
     */
    public set addLicenses(value: AssignedLicense[] | undefined) {
        this._addLicenses = value;
    };
    /**
     * Instantiates a new assignLicenseRequestBody and sets the default values.
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
            ["addLicenses", (o, n) => { (o as unknown as AssignLicenseRequestBody).addLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); }],
            ["removeLicenses", (o, n) => { (o as unknown as AssignLicenseRequestBody).removeLicenses = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Gets the removeLicenses property value. 
     * @returns a string
     */
    public get removeLicenses() {
        return this._removeLicenses;
    };
    /**
     * Sets the removeLicenses property value. 
     * @param value Value to set for the removeLicenses property.
     */
    public set removeLicenses(value: string[] | undefined) {
        this._removeLicenses = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AssignedLicense>("addLicenses", this.addLicenses);
        writer.writeCollectionOfPrimitiveValues<string>("removeLicenses", this.removeLicenses);
        writer.writeAdditionalData(this.additionalData);
    };
}
