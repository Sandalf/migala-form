export class ApiService {

  handleErrors(res: any) {
    if (res.error && res.status !== 401) {
      console.log(res)
      throw new Error(res.message || 'Error generico')
    } else if (res.error && res.status === 401) {
      console.log(res)
      throw res;
    } else {
      return res;
    }
  }

  public getHeaders(sessionData?: any) {
    let headerObject: any = {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    };
    return headerObject;
  }

  public get(url: string, params?: any, reqOpts?: any, parseJson?: boolean): Promise<any> {
    if (!reqOpts) {
      reqOpts = {
        headers: this.getHeaders()
      }
    }
    let config = {
      method: 'GET',
      headers: reqOpts.headers
    };
    let queryString = params ? `?${this.getQueryString(params)}` : '';
    return fetch(`${url}${queryString}`, config).then((response) => !parseJson ? response.text() : response.json()).then(this.handleErrors)
  }

  public post(url: string, body: any, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: this.getHeaders()
      }
    }
    let config = {
      method: 'POST',
      headers: reqOpts.headers,
      body: JSON.stringify(body)
    };
    let queryString = params ? `?${this.getQueryString(params)}` : '';
    return fetch(`${url}${queryString}`, config).then((response) => response.json()).then(this.handleErrors)
  }

  public put(url: string, body: any, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: this.getHeaders()
      }
    }
    let config = {
      method: 'PUT',
      headers: reqOpts.headers,
      body: JSON.stringify(body)
    };
    let queryString = params ? `?${this.getQueryString(params)}` : '';
    return fetch(`${url}${queryString}`, config).then((response) => response.json()).then(this.handleErrors)
  }

  public delete(url: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: this.getHeaders()
      }
    }
    let config = {
      method: 'DELETE',
      headers: reqOpts.headers
    };
    let queryString = params ? `?${this.getQueryString(params)}` : '';
    return fetch(`${url}${queryString}`, config).then((response) => response.json()).then(this.handleErrors)
  }

  private getQueryString(params: any) {
    let esc = encodeURIComponent;
    return Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');
  }
}
