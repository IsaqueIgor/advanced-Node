import { AccessToken } from '@/domain/models'
import { AuthenticationError } from '@/domain/errors'

namespace FacebookAuth {
  export type Params = {
    token: string
  }

  export type Result = AccessToken | AuthenticationError
}

export interface FacebookAuth {
  perform: (params: FacebookAuth.Params) => Promise<FacebookAuth.Result>
}
