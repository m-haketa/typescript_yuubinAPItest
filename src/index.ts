import fetch from 'node-fetch'

class YuubinAPI {
  private baseURL = 'http://zipcloud.ibsnet.co.jp/api/search'

  public constructor() {}

  public get(zipcode: string): void {
    fetch(this.baseURL + '?zipcode=' + zipcode)
      .then((res): void => res.text())
      .then((body): void => console.log(body))
  }
}

const A = new YuubinAPI()
A.get('1000000')
