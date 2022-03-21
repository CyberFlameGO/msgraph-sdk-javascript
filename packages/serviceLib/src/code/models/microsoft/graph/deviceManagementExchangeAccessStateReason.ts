/** Provides operations to manage the deviceManagement singleton.  */
export enum DeviceManagementExchangeAccessStateReason {
    None = "none",
    Unknown = "unknown",
    ExchangeGlobalRule = "exchangeGlobalRule",
    ExchangeIndividualRule = "exchangeIndividualRule",
    ExchangeDeviceRule = "exchangeDeviceRule",
    ExchangeUpgrade = "exchangeUpgrade",
    ExchangeMailboxPolicy = "exchangeMailboxPolicy",
    Other = "other",
    Compliant = "compliant",
    NotCompliant = "notCompliant",
    NotEnrolled = "notEnrolled",
    UnknownLocation = "unknownLocation",
    MfaRequired = "mfaRequired",
    AzureADBlockDueToAccessPolicy = "azureADBlockDueToAccessPolicy",
    CompromisedPassword = "compromisedPassword",
    DeviceNotKnownWithManagedApp = "deviceNotKnownWithManagedApp",
}