import { FacebookAuth } from '@/domain/features'
import { AuthenticationError } from '@/domain/errors'
import { LoadFacebookUserApi } from '@/data/contracts/apis'

export class FacebookAuthService {
  constructor (
    private readonly loadFacebookUserByTokenApi: LoadFacebookUserApi
  ) {}

  async perform (params: FacebookAuth.Params): Promise<AuthenticationError> {
    await this.loadFacebookUserByTokenApi.loadUser(params)
    return new AuthenticationError()
  }
}
