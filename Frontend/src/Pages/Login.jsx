import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/shoelogo.png";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login API abhi connect nahi hai.
    console.log("Login details:", {
      ...formData,
      rememberMe,
    });
  };

  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      {/* Left Side */}
      <section className="relative hidden min-h-screen overflow-hidden bg-[#111111] text-white lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://themesdesign.in/heyauth/layouts/images/bg-img-2.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-amber-950/40" />

        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={logo}
              alt="THE SHOE SPOT"
              className="h-14 w-auto object-contain"
            />

            <span className="text-xl font-black tracking-wider">
              THE SHOE SPOT
            </span>
          </Link>
        </div>

        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
            Welcome to THE SHOE SPOT
          </p>

          <h1 className="text-5xl font-black leading-tight xl:text-6xl">
            Your Style.
            <br />
            Your <span className="text-amber-400">Shoes.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-8 text-gray-300">
            Discover your next favorite pair and step into
            a style that feels uniquely yours.
          </p>
        </div>

        <div className="relative z-10 border-t border-white/15 pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-amber-400"
          >
            <ArrowRight size={16} className="rotate-180" />
            Continue Shopping
          </Link>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="mb-10 text-center lg:hidden">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="THE SHOE SPOT"
                className="h-14 w-auto object-contain"
              />

              <span className="text-lg font-black tracking-wide text-black">
                THE SHOE SPOT
              </span>
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Welcome Back
            </p>

            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Sign In to Your
              <br />
              Account
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Enter your details below to continue shopping.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-amber-500 focus-within:bg-white">
                <Mail
                  size={19}
                  className="shrink-0 text-gray-400"
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full bg-transparent px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-amber-500 focus-within:bg-white">
                <LockKeyhole
                  size={19}
                  className="shrink-0 text-gray-400"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full bg-transparent px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="text-gray-400 transition hover:text-amber-600"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-amber-500"
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="font-semibold text-amber-700 transition hover:text-amber-800"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-4 text-sm font-bold text-white transition hover:bg-amber-600"
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Signup Link */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs uppercase tracking-wider text-gray-400">
              New to THE SHOE SPOT?
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-amber-700 transition hover:text-amber-800"
            >
              Create Account
            </Link>
          </p>

          {/* Mobile Continue Shopping */}
          <Link
            to="/"
            className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-amber-700 lg:hidden"
          >
            <ArrowRight size={16} className="rotate-180" />
            Continue Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}