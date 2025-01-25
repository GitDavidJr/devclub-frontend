import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <header class="top-bar">
        <div>
          <span>Bem-vindo ao CRUD-base</span>
        </div>
      </header>
      <Outlet />

      <footer class="footer">
        <p>
          &copy; 2025 Desenvolvido por David Inácio Ferreira da Silva Júnior
        </p>
        <div class="social-links">
          <a href="https://www.instagram.com/davidjr0516/" target="_blank">
            Instagram
          </a>
          <a href="https://github.com/GitDavidJr" target="_blank">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
