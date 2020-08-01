// Defining types related to service worker manually as it is not fully compatible with TS
export type ServiceWorkerEvent = Event & { [key: string]: any }
export type ServiceWorkerInstallResult = {
    outcome: string
}
