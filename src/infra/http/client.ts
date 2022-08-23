export interface HttpGetClient {
  get: (params: HttpGetClient.Params) => Promise<void>
}

export namespace HttpGetClient {
  export type Params = {
    url: string
    params: {
      client_id: string
      client_secret: string
      grant_type: string
    }
  }
}
