const getApiUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://your-production-domain.com/api"; // Replace with your actual production API domain
  }
  return "http://localhost:3001/api";
};

export const API_URL = getApiUrl();
