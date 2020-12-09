import axios from 'axios';


const KEY = 'AIzaSyAxJ_q4JMBx5vBxGlUXjaV6NW8dwlePPsA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});