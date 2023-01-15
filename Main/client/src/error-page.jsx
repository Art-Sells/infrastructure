import { useRouteError } from "react-router-dom";
import "./assets/css/error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="welcome-section">
      <h1>Oops!</h1>
      <p id="name">An error has occurred.</p>
    </div>
  );
}