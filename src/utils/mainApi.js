class MainApi {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }

  getMovies(token) {
    return fetch(this.url + '/movies', {
      method: 'GET',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._getResponseData);
  }

  saveMovie(token, movieData) {
    return fetch(this.url + '/movies', {
      method: 'POST',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movieData),
    }).then(this._getResponseData);
  }

  deleteSaveMovie(token, id) {
    return fetch(this.url + '/movies/' + id, {
      method: 'DELETE',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._getResponseData);
  }

  register(name, email, password) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._getResponseData);
  }

  authorize(email, password) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then(this._getResponseData);
  }

  checkToken(token) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._getResponseData);
  }

  updateNameAndEmail(token, name, email) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email }),
    }).then(this._getResponseData);
  }

  _getResponseData(data) {
    if (!data.ok) {
      // eslint-disable-next-line no-undef
      return Promise.reject(`Ошибка: ${data.status}`);
    }
    return data.json();
  }
}

const configMainApi = {
  url: 'https://murat.movies.api.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json',
  },
};

const mainApi = new MainApi(configMainApi);

export default mainApi;
