export class AccessToken {
  constructor (private readonly value: string) {}

  /* Expiration token in MS
    1800000 ms = 30 minute
  */
  static get expirationInMs (): number {
    return 30 * 60 * 1000
  }
}
