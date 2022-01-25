export const serviceRoutes = {
  auth: {
    getToken: (keyAuth) => `/api/v1/auth/${keyAuth}`,
  },
  imei: {
    getPolicy: () => `/api/v1/imei`,
  },
};
