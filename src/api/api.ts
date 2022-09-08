import axios from 'axios';
import { isDev } from '../common/isDev';

type ApiChoice = 'dev' | 'prod' | 'mock'

const choice:ApiChoice = 'prod';

const baseURLChoices = {
  prod: process.env.REACT_APP_API_URL,
  dev: process.env.REACT_APP_DEV_API_URL,
  mock: process.env.REACT_APP_MOCK_API_URL,
} as const;

let baseURL:string;
if (isDev) {
  baseURL = baseURLChoices[choice] as string;
} else {
  baseURL = baseURLChoices.prod as string;
}

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
