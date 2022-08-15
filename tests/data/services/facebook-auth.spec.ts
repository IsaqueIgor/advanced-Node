import { AuthenticationError } from '@/domain/errors'
import { FacebookAuthService } from '@/data/services'

describe('FacebookAuthService', () => {
  it('should call LoadFacebookUserApi with correct params', async () => {
    const loadFacebookUserApi = {
      loadUser: jest.fn()
    }
    const sut = new FacebookAuthService(loadFacebookUserApi)

    await sut.perform({ token: 'any_token' })

    expect(loadFacebookUserApi.loadUser).toHaveBeenCalledWith({ token: 'any_token' })
    expect(loadFacebookUserApi.loadUser).toHaveBeenCalledTimes(1)
  })

  it('should return Authentication Erro when LoadFacebookUserApi returns undefined', async () => {
    const loadFacebookUserApi = {
      loadUser: jest.fn()
    }
    loadFacebookUserApi.loadUser.mockReturnValueOnce(undefined)

    const sut = new FacebookAuthService(loadFacebookUserApi)

    const authResult = await sut.perform({ token: 'any_token' })

    expect(authResult).toEqual(new AuthenticationError())
  })
})
