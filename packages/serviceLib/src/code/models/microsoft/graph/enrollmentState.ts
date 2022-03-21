/** Provides operations to manage the deviceManagement singleton.  */
export enum EnrollmentState {
    Unknown = "unknown",
    Enrolled = "enrolled",
    PendingReset = "pendingReset",
    Failed = "failed",
    NotContacted = "notContacted",
}