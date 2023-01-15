import { useRouteError } from "react-router-dom";
import "./assets/css/error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="container">
        <div id="welcome-section">
        <h1 id="oops">Oops!</h1>
        <p id="oops-name">An error has occurred.</p>
        <i id="oops-message">{error.statusText || error.message}</i>
        </div>
    </div>

  );
}