import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="text-center py-40">
      <h1>404 Page Not Found...</h1>
      <Link to="" className="bg-blue-900 text-white rounded px-3 py-1">
        Back To Home Page
      </Link>
    </div>
  );
}

export default ErrorPage;
