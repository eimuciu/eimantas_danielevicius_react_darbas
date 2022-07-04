import { myFetch, BASE_URL } from './utils';

export async function sendLogin(credentials) {
  try {
    const resp = await myFetch(`${BASE_URL}/auth/login`, 'POST', credentials);
    return resp;
  } catch (error) {
    console.log('sendLogin error', error);
  }
}

export async function sendRegister(credentials) {
  try {
    const resp = await myFetch(
      `${BASE_URL}/auth/register`,
      'POST',
      credentials,
    );
    if (resp.changes === 1) {
      return { success: true, msg: 'Registration succeeded' };
    }
    return { success: false, msg: 'Registration failed' };
  } catch (error) {
    console.log('sendRegister error', error);
  }
}
