export const serviceRoutes = {
  auth: {
    getToken: (keyAuth) => `/api/v1/auth/${keyAuth}`,
  },
  imei: {
    getPolicy: (idPlan) => `/api/v1/imei?idPlan=${idPlan}`,
  },
  policy: {
    create: () => `/api/v1/policy`,
    getFile: () => `/api/v1/policy`,
  },
  encrypt: {
    getContent: () => `/api/v1/encrypt`,
  },
};
