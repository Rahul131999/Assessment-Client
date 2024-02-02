import React from "react";
import OAuth from "../Components/OAuth";

function Login() {

  return (
    <div className="p-3 max-w-lg my-20 mx-auto bg-cover text-center">
      <h1 className="text-4xl font-semibold my-10">Login</h1>
        <OAuth/>
    </div>
  );
}

export default Login;
