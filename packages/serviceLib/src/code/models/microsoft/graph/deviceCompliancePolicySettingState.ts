import {ComplianceStatus, SettingSource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCompliancePolicySettingState implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Current value of setting on device  */
    private _currentValue?: string | undefined;
    /** Error code for the setting  */
    private _errorCode?: number | undefined;
    /** Error description  */
    private _errorDescription?: string | undefined;
    /** Name of setting instance that is being reported.  */
    private _instanceDisplayName?: string | undefined;
    /** The setting that is being reported  */
    private _setting?: string | undefined;
    /** Localized/user friendly setting name that is being reported  */
    private _settingName?: string | undefined;
    /** Contributing policies  */
    private _sources?: SettingSource[] | undefined;
    /** The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.  */
    private _state?: ComplianceStatus | undefined;
    /** UserEmail  */
    private _userEmail?: string | undefined;
    /** UserId  */
    private _userId?: string | undefined;
    /** UserName  */
    private _userName?: string | undefined;
    /** UserPrincipalName.  */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new deviceCompliancePolicySettingState and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the currentValue property value. Current value of setting on device
     * @returns a string
     */
    public get currentValue() {
        return this._currentValue;
    };
    /**
     * Gets the errorCode property value. Error code for the setting
     * @returns a int64
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Gets the errorDescription property value. Error description
     * @returns a string
     */
    public get errorDescription() {
        return this._errorDescription;
    };
    /**
     * Gets the instanceDisplayName property value. Name of setting instance that is being reported.
     * @returns a string
     */
    public get instanceDisplayName() {
        return this._instanceDisplayName;
    };
    /**
     * Gets the setting property value. The setting that is being reported
     * @returns a string
     */
    public get setting() {
        return this._setting;
    };
    /**
     * Gets the settingName property value. Localized/user friendly setting name that is being reported
     * @returns a string
     */
    public get settingName() {
        return this._settingName;
    };
    /**
     * Gets the sources property value. Contributing policies
     * @returns a settingSource
     */
    public get sources() {
        return this._sources;
    };
    /**
     * Gets the state property value. The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @returns a complianceStatus
     */
    public get state() {
        return this._state;
    };
    /**
     * Gets the userEmail property value. UserEmail
     * @returns a string
     */
    public get userEmail() {
        return this._userEmail;
    };
    /**
     * Gets the userId property value. UserId
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Gets the userName property value. UserName
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Gets the userPrincipalName property value. UserPrincipalName.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["currentValue", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).currentValue = n.getStringValue(); }],
            ["errorCode", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).errorCode = n.getNumberValue(); }],
            ["errorDescription", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).errorDescription = n.getStringValue(); }],
            ["instanceDisplayName", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).instanceDisplayName = n.getStringValue(); }],
            ["setting", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).setting = n.getStringValue(); }],
            ["settingName", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).settingName = n.getStringValue(); }],
            ["sources", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).sources = n.getCollectionOfObjectValues<SettingSource>(SettingSource); }],
            ["state", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); }],
            ["userEmail", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).userEmail = n.getStringValue(); }],
            ["userId", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).userId = n.getStringValue(); }],
            ["userName", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).userName = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as DeviceCompliancePolicySettingState).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("currentValue", this.currentValue);
        writer.writeNumberValue("errorCode", this.errorCode);
        writer.writeStringValue("errorDescription", this.errorDescription);
        writer.writeStringValue("instanceDisplayName", this.instanceDisplayName);
        writer.writeStringValue("setting", this.setting);
        writer.writeStringValue("settingName", this.settingName);
        writer.writeCollectionOfObjectValues<SettingSource>("sources", this.sources);
        writer.writeEnumValue<ComplianceStatus>("state", this.state);
        writer.writeStringValue("userEmail", this.userEmail);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userName", this.userName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the currentValue property value. Current value of setting on device
     * @param value Value to set for the currentValue property.
     */
    public set currentValue(value: string | undefined) {
        this._currentValue = value;
    };
    /**
     * Sets the errorCode property value. Error code for the setting
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: number | undefined) {
        this._errorCode = value;
    };
    /**
     * Sets the errorDescription property value. Error description
     * @param value Value to set for the errorDescription property.
     */
    public set errorDescription(value: string | undefined) {
        this._errorDescription = value;
    };
    /**
     * Sets the instanceDisplayName property value. Name of setting instance that is being reported.
     * @param value Value to set for the instanceDisplayName property.
     */
    public set instanceDisplayName(value: string | undefined) {
        this._instanceDisplayName = value;
    };
    /**
     * Sets the setting property value. The setting that is being reported
     * @param value Value to set for the setting property.
     */
    public set setting(value: string | undefined) {
        this._setting = value;
    };
    /**
     * Sets the settingName property value. Localized/user friendly setting name that is being reported
     * @param value Value to set for the settingName property.
     */
    public set settingName(value: string | undefined) {
        this._settingName = value;
    };
    /**
     * Sets the sources property value. Contributing policies
     * @param value Value to set for the sources property.
     */
    public set sources(value: SettingSource[] | undefined) {
        this._sources = value;
    };
    /**
     * Sets the state property value. The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @param value Value to set for the state property.
     */
    public set state(value: ComplianceStatus | undefined) {
        this._state = value;
    };
    /**
     * Sets the userEmail property value. UserEmail
     * @param value Value to set for the userEmail property.
     */
    public set userEmail(value: string | undefined) {
        this._userEmail = value;
    };
    /**
     * Sets the userId property value. UserId
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Sets the userName property value. UserName
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        this._userName = value;
    };
    /**
     * Sets the userPrincipalName property value. UserPrincipalName.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}