import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

export function App() {
  return (
    <div>
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}
