import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignup = () => {
    const { firstName, lastName, email, password } = form;

    if (!firstName || !lastName || !email || !password) {
      alert("All fields are required");
      return;
    }

    console.log("SIGNUP", form);
  };

  const handleGoogleSignup = () => {
    console.log("Google Signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardContent className="p-8 space-y-6">

          <div className="text-center">
            <h1 className="text-2xl font-bold">Create Account 🚀</h1>
            <p className="text-sm text-gray-500">
              Join and unlock best deals
            </p>
          </div>

          <div className="space-y-4">
            <Input
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />

            <Input
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />

            <Input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <Input
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>

          <Button
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
            onClick={handleSignup}
          >
            Sign Up
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
            onClick={handleGoogleSignup}
          >
            Sign up with Google
          </Button>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="underline">
                Login
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}