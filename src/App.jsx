import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import PageLayout from "./Layout/PageLayout/PageLayout.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase.js";

function App() {
  const [authUser] = useAuthState(auth);
  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
