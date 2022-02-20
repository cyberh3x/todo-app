const baseUrl = "http://localhost/todos";

const createRequest = async (method, url, options, withDefaultBaseUrl) => {
  const defaultOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    ...options,
  };
  return await fetch(
    `${withDefaultBaseUrl ? baseUrl : ""}${url}`,
    defaultOptions
  ).then((response) => {
    return response.json();
  });
};

export const _GET = (url, options = {}, withDefaultBaseUrl = true) => {
  return createRequest("GET", url, options, withDefaultBaseUrl);
};

export const _POST = (url, body, options = {}, withDefaultBaseUrl = true) => {
  options = { ...options, body: JSON.stringify(body) };
  return createRequest("POST", url, options, withDefaultBaseUrl);
};

export const _PATCH = (url, body, options = {}, withDefaultBaseUrl = true) => {
  options = { ...options, body: JSON.stringify(body) };
  return createRequest("PATCH", url, options, withDefaultBaseUrl);
};

export const _DELETE = (url, options = {}, withDefaultBaseUrl = true) => {
  return createRequest("DELETE", url, options, withDefaultBaseUrl);
};
