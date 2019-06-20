import fetch from 'node-fetch'
import { URLSearchParams } from 'url'

class YuubinAPI {
  private baseURL = 'http://zipcloud.ibsnet.co.jp/api/search'

  public constructor() {}

  public async get(zipcode: string): Promise<string> {
    const qs = new URLSearchParams({ zipcode: zipcode })
    const res = await fetch(`${this.baseURL}?${qs}`)
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
