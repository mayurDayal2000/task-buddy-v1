import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import SignInPage from "./pages/SignInPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthProvider from "./providers/AuthProvider";
import ListPage from "./pages/Dashboard/ListPage";
import BoardPage from "./pages/Dashboard/BoardPage";
import { useEffect, useState } from "react";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1280);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/auth/sign-in" element={<SignInPage />} />

          <Route
            path="/dashboard/list-view"
            element={
              <ProtectedRoute>
                <ListPage />
              </ProtectedRoute>
            }
          />

          {isDesktop && (
            <Route
              path="/dashboard/board-view"
              element={
                <ProtectedRoute>
                  <BoardPage />
                </ProtectedRoute>
              }
            />
          )}

          <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
