declare module 'fetchful' {
    export function httpGet(url: string, config?: RequestInit): Promise<any>
    export function httpPost(url: string, data: object, config?: RequestInit): Promise<any>
    export function httpPut(url: string, data: object, config?: RequestInit): Promise<any>
    export function httpDelete(url: string, config?: RequestInit): Promise<any>
    export function httpy(
        type: 'GET' | 'POST' | 'PUT' | 'DELETE',
        url: string,
        data: object,
        config?: object
    )
}