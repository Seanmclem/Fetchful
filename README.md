# Fetchful

This is an HTTP library for Javascript. It uses the Fetch API, but presents it in a way that is more similar to Axios. 

I'm sure there are many like it, but this one's mine.

At this point I can drop it in to existing projects that were formally using axios, or use it in new projects without having to learn any new API.  

## API

```
httpGet(url: string, config?: RequestInit)
httpPost(url: string, data: object, config?: RequestInit)
httpPut(url: string, data: object, config?: RequestInit)
httpDelete(url: string, config?: RequestInit)
```
