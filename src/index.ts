import fetch from 'node-fetch'

class YuubinAPI {
  private baseURL = 'http://zipcloud.ibsnet.co.jp/api/search'

  public constructor() {}

  public async get(zipcode: string): Promise<string> {
    const res = await fetch(`${this.baseURL}?zipcode=${zipcode}`)
    return await res.text()
  }
}

const A = new YuubinAPI()
A.get('1000000')
  .then((text): void => {
    console.log(text)
  })
  .catch((err): void => {
    console.error(err)
  })
