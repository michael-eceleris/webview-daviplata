export const serviceRoutes = {
  auth: {
    getToken: (keyAuth) => `/api/v1/auth/${keyAuth}`,
  },
  imei: {
    getPolicy: (idPlan) => `/api/v1/imei?idPlan=${idPlan}`,
  },
};
