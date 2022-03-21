/** Provides operations to manage the deviceManagement singleton.  */
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