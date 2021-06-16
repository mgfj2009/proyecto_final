const base_url = 'http://api.weatherapi.com/v1/current.json?';
const api_key = '&key=bc3845958833402789102550212205';
const query_city = '&q=';
const query_lang = '&lang=';

export const getUrl = (city, lang) => `${ base_url }${api_key}${ query_city }${city}${ query_lang }${ lang }`;

