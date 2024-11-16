// src/utils/test-utils.tsx
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppointmentProvider } from "../contexts/AppointmentContext";
import { AuthProvider } from "../contexts/AuthContext";

function render(ui: React.ReactElement, { route = "/" } = {}) {
  window.history.pushState({}, "Test page", route);

  return rtlRender(
    <BrowserRouter>
      <AuthProvider>
        <AppointmentProvider>{ui}</AppointmentProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
