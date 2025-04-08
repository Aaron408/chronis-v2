import axios from "axios";

const getToken = () => {
  const userData = JSON.parse(localStorage.getItem("cronisUsuario"));
  return userData ? userData.token : null;
};

export const AuthApi = axios.create({
  baseURL:
    "https://vercel-authservice-25xpahwzu-aarons-projects-ab43df53.vercel.app",
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  },
  timeout: 30000, // 30 seconds timeout
});

export const UsersApi = axios.create({
  baseURL: "https://users-services.vercel.app",
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  },
  timeout: 30000, // 30 seconds timeout
});

export const ActivitiesApi = axios.create({
  baseURL:
    "https://activities-services-48l42a9y4-aarons-projects-ab43df53.vercel.app",
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  },
  timeout: 30000, // 30 seconds timeout
});

export const ReportsApi = axios.create({
  baseURL: "https://reports-services.vercel.app",
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  },
  timeout: 30000, // 30 seconds timeout
});

export const SuscriptionApi = axios.create({
  baseURL: "https://suscription-services.vercel.app",
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  },
  timeout: 30000, // 30 seconds timeout
});

export const NotificationsApi = axios.create({
  baseURL:
    "https://notifications-services-ccxm5z4rn-aarons-projects-ab43df53.vercel.app",
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  },
  timeout: 30000, // 30 seconds timeout
});

// Función auxiliar para realizar peticiones sin await
export const makeRequest = (apiCall) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      apiCall
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    }, 0);
  });
};

const setupInterceptors = (apiInstance) => {
  apiInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        // Evitar redirección si la ruta es "/api/login"
        if (
          error.response.status === 401 &&
          !error.config.url.includes("/api/login")
        ) {
          // Si no estamos en la ruta de login, borrar el token y redirigir
          localStorage.removeItem("cronisUsuario");
          window.location.href = "/";
        }
      }
      return Promise.reject(error);
    }
  );
};

setupInterceptors(AuthApi);
setupInterceptors(UsersApi);
setupInterceptors(ActivitiesApi);
setupInterceptors(ReportsApi);
setupInterceptors(SuscriptionApi);
setupInterceptors(NotificationsApi);
