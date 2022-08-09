import { Routes, Route } from "react-router-dom";
import IndexLayout from "./layout/IndexLayout";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<IndexLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
  );
}

export default App;
