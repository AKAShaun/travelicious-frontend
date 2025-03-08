import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegistering) {
        // Register new user
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Login existing user
        await signInWithEmailAndPassword(auth, email, password);
      }
      alert("Success!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold">{isRegistering ? "Register" : "Login"}</h2>

      <form onSubmit={handleAuth} className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {isRegistering ? "Register" : "Login"}
        </button>
      </form>

      <button onClick={() => setIsRegistering(!isRegistering)} className="mt-3 text-blue-500">
        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>

      <button onClick={handleLogout} className="mt-3 bg-red-500 text-white p-2 rounded">
        Logout
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default Login;
