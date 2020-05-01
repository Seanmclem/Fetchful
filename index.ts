const defaults: RequestInit = {
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}
// Thanks https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

export const httpGet = (url: string, config?: RequestInit) => {
    return httpy('GET', url, config)
}

export const httpPost = (url: string, data: object, config?: RequestInit) => {
    return httpy('POST', url, data, config)
}

export const httpPut = (url: string, data: object, config?: RequestInit) => {
    return httpy('PUT', url, data, config)
}

export const httpDelete = (url: string, config?: RequestInit) => {
    return httpy('DELETE', url, config)
}

export const httpy = async (
    type: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data: object = {},
    config?: any
) => {
    const params = {
        ...defaults,
        ...config,
        method: type,
        body: type === 'POST' || type === 'PUT' ? JSON.stringify(data) : undefined,
    }

    let response = undefined;

    try {
        response = await fetch(url, params);
    } catch (e) {
        return e
    }

    try {
        const data = await response.json();
        return {
            data,
            status: response.status,
            statusText: response.statusText,
            //headers: Object.fromEntries(response.headers.values()), // not well supported in safari
        }
    } catch (e) {
        console.error('Fetchful: Failed to parse response data.')
        return response;
    }

}