import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shoelogo.png";
import {
  Eye,
  EyeOff,
  Mail,
  UserRound,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({
      email,
      username,
      password,
      agreeTerms,
    });

    // Connect your backend signup API here.
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE - ONLY BRAND LOGO */}
        <section
          className="relative hidden min-h-screen overflow-hidden bg-cover bg-center lg:flex lg:items-start lg:justify-start lg:px-16 lg:py-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(10,10,10,0.88), rgba(25,18,10,0.72)), url('https://themesdesign.in/heyauth/layouts/images/bg-img-2.png')",
          }}
        >
          <Link
            to="/"
            className="relative z-10 inline-flex items-center gap-4"
          >
            <img
              src={logo}
              alt="THE SHOE SPOT"
              className="h-16 w-auto object-contain"
            />

            <span className="text-2xl font-extrabold tracking-wider text-white">
              THE SHOE SPOT
            </span>
          </Link>
        </section>

        {/* RIGHT SIDE - SIGNUP FORM */}
        <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-8 lg:hidden">
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src={logo}
                  alt="THE SHOE SPOT"
                  className="h-12 w-auto object-contain"
                />

                <span className="text-lg font-extrabold tracking-wider text-neutral-900">
                  THE SHOE SPOT
                </span>
              </Link>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Join Our Community
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Create Account
              </h2>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Register to explore our collection and enjoy
                a personalized shopping experience.
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border border-neutral-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  />
                </div>
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  Username
                </label>

                <div className="relative">
                  <UserRound
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Choose a username"
                    autoComplete="username"
                    minLength={3}
                    required
                    className="w-full rounded-md border border-neutral-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-neutral-700"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="w-full rounded-md border border-neutral-200 bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition placeholder:text-neutral-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition hover:text-amber-600"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                <p className="mt-2 text-xs text-neutral-400">
                  Password must be at least 8 characters.
                </p>
              </div>

              {/* Terms and Conditions */}
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-neutral-600">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-amber-500"
                />

                <span>
                  I agree to all the{" "}
                  <Link
                    to="/terms"
                    className="font-semibold text-amber-700 underline underline-offset-2 hover:text-amber-900"
                  >
                    terms and conditions
                  </Link>
                  .
                </span>
              </label>

              {/* Create Account Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 py-3.5 text-sm font-bold text-white transition hover:bg-amber-500 hover:text-black"
              >
                Create Account
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-7 text-center text-sm text-neutral-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-amber-700 transition hover:text-amber-900"
              >
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;