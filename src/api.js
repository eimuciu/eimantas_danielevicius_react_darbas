import { myFetch, BASE_URL } from './utils';

export async function sendLogin(credentials) {
  try {
    const resp = await myFetch(`${BASE_URL}/auth/login`, 'POST', credentials);
    return resp;
  } catch (error) {
    console.log('sendLogin error', error);
  }
}
