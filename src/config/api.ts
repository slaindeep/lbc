const getApiUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://lumi-blue.com/api"
    : "http://localhost/LBC/api"; // Updated to match your local PHP server path
};

export const API_URL = getApiUrl();

export const apiEndpoints = {
  appointments: `${API_URL}/appointments.php`,
  testEmail: `${API_URL}/test-email`, // Added test endpoint
};
