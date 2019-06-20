import fetch from 'node-fetch'

class YuubinAPI {
  private baseURL = 'http://zipcloud.ibsnet.co.jp/api/search'

  public constructor() {}

  public async get(zipcode: string): Promise<void> {
    const res = await fetch(this.baseURL + '?zipcode=' + zipcode)
    console.log(await res.text())
  }
}

const A = new YuubinAPI()
A.get('1000000').catch((err): void => {
  console.error(err)
})
