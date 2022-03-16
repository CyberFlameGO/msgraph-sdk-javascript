/** Provides operations to manage the collection of drive entities.  */
export enum ManagementAgentType {
    Eas = "eas",
    Mdm = "mdm",
    EasMdm = "easMdm",
    IntuneClient = "intuneClient",
    EasIntuneClient = "easIntuneClient",
    ConfigurationManagerClient = "configurationManagerClient",
    ConfigurationManagerClientMdm = "configurationManagerClientMdm",
    ConfigurationManagerClientMdmEas = "configurationManagerClientMdmEas",
    Unknown = "unknown",
    Jamf = "jamf",
    GoogleCloudDevicePolicyController = "googleCloudDevicePolicyController",
    Microsoft365ManagedMdm = "microsoft365ManagedMdm",
    MsSense = "msSense",
}
