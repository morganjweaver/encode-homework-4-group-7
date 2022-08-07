import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = process.env.API_URL;

axios.interceptors.response.use(undefined, error => {
    
  // catch some server errors
  if (error.message === 'Network Error' && !error.response) {
      toast.error('Network error - make sure API works');
  }

  const { status } = error.response;

  if (status === 404) {
      history.push('/notfound');
  }

  if (status === 500) {
      toast.error('Server error - check the terminal for more info!');
  }

  throw error.response;
});

const responseBody = (response) => response.data;

const Contract = {
  tokenBalance: (address) => axios.get(`/contract/token-balance/${address}`).then(responseBody),
}

const File = {
  list: () => axios.get(`/`)
}

export default {
  Contract
}