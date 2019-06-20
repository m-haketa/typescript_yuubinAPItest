import request from 'request'

class YuubinAPI {
  private baseURL = 'http://zipcloud.ibsnet.co.jp/api/search'

  public constructor() {}

  public get(zipcode: string): Promise<string> {
    const options = {
      method: 'GET',
      url: this.baseURL,
      qs: { zipcode: zipcode }
    }

    return new Promise<string>(
      (
        resolve: (body?: string) => void,
        reject: (error?: any) => void
      ): void => {
        request(options, function(
          error,
          response: request.Response,
          body
        ): void {
          if (error) {
            reject(error)
          } else {
            resolve(body)
          }
        })
      }
    )
  }
}

async function main(): Promise<void> {
  const A = new YuubinAPI()
  const ret: string = await A.get('1000000')
  console.log(ret)
}

main()
