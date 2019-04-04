import axios from 'axios';
import pexelsSki from '../data/images/pexels-ski';

export function fetchImageSearch(query) {
  if(false && process.env.NODE_ENV !== 'production') {
    return Promise.resolve({data: pexelsSki});
  }

  return axios({
    method: 'get',
    url: 'https://us-central1-design-q.cloudfunctions.net/app/search/image',
    params: { q: query },
    crossDomain: true,
  })
}