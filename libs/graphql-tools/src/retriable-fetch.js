export const createRetriableFetch = ({ endpoint, storage, cache, onLogin, onLogout }) => async (uri, options) => {
  try {
    const initialReq = fetch(uri, options);
    const initialRes = await initialReq;

    if (initialRes.status === 401) {
      throw new Error('UnauthorizedError');
    }

    return initialRes.clone();
  } catch (e) {
    try {
      if (e.message === 'UnauthorizedError') {
        const { refreshToken, user } = storage;
        const { newAccessToken, newRefreshToken } = await getNewToken(endpoint, refreshToken, user);
        onLogin(storage, cache, user, newAccessToken, newRefreshToken);

        options.headers.authorization = newAccessToken;
        return fetch(uri, options);
      }
    } catch (error) {
      onLogout(storage, cache);
    }
  }
};


async function getNewToken(endpoint, refreshToken, user) {
  const res = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({
      query: `mutation {
        refreshToken(input: {user_id: "${user.id}", refresh_token: "${refreshToken}"}) { token, refresh_token }
      }`,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw Error('Not Ok');
  }

  const json = await res.json();

  if (json.errors && json.errors[0]) {
    throw json.errors[0];
  }

  const { token: newAccessToken, refresh_token: newRefreshToken } = json.data.refreshToken;

  return { newAccessToken, newRefreshToken };
}
