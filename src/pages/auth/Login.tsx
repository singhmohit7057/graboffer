import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("LOGIN", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardContent className="p-8 space-y-6">

          <div className="text-center">
            <h1 className="text-2xl font-bold">Welcome Back 👋</h1>
            <p className="text-sm text-gray-500">
              Login to access exclusive offers
            </p>
          </div>

          <div className="space-y-4">
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
            onClick={handleLogin}
          >
            Login
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="flex-1 h-px bg-gray-200" />
            OR
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
          >
            Continue with Google
          </Button>

          <p className="text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="underline">
                Sign up
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}