import { Routes, Route } from "react-router-dom";
import IndexLayout from "./layout/IndexLayout";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IndexLayout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
