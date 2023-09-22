import { ErrorBoundary } from "react-error-boundary";
import { AppRouter } from "./routeProvider";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./storeProvider";

export function AppEntry() {
  return (
    //Todo Create fallback commponent
    <ErrorBoundary fallback={<div>Error</div>}>
      <StoreProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  );
}
