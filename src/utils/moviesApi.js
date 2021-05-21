class MoviesApi {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }
  getMovies() {
    return fetch(this.url, {
      method: 'GET',
      headers: this.headers,
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

const configMoviesApi = {
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};

const moviesApi = new MoviesApi(configMoviesApi);

export default moviesApi;
