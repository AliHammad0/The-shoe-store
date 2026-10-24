
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/shoelogo.png'
import {
  Eye,
  EyeOff,
  LockKeyhole,
  UserRound,
  Footprints,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");

    console.log({
      username,
      password,
      rememberMe,
    });

    // Connect your backend login API here.
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] p-4 sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-[680px] w-full max-w-7xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">

        {/* LEFT PANEL */}
        <section className="relative flex flex-col justify-between overflow-hidden bg-[#151515] p-7 text-white sm:p-10 lg:p-12">

          {/* Background Design */}
          <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full border border-amber-500/20" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

          {/* Logo */}
          <Link
            to="/"
            className="relative z-10 flex w-fit items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-black">
              <Footprints size={28} strokeWidth={2.2} />
            </div>

            <div>
              <h2 className="text-xl font-black tracking-wider sm:text-2xl">
                THE SHOE SPOT
              </h2>
              <p className="mt-1 text-[9px] font-semibold tracking-[0.35em] text-amber-400">
                STEP INTO STYLE
              </p>
            </div>
          </Link>

          {/* Main Content */}
          <div className="relative z-10 my-12 max-w-lg">
            <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Find Your Perfect Pair
            </div>

            <h1 className="mt-8 text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Your Journey.
              <br />
              Your Shoes.
              <br />
              <span className="text-amber-400">
                Your Style.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
              Discover footwear that brings comfort,
              confidence, and style to every step. Find
              your everyday essentials and standout
              favorites in one place.
            </p>

            {/* Features */}
            <div className="mt-9 grid grid-cols-3 gap-3">
              <div className="border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                <Footprints
                  size={22}
                  className="mb-4 text-amber-400"
                />
                <h3 className="text-xs font-bold sm:text-sm">
                  Latest Styles
                </h3>
                <p className="mt-2 text-[10px] leading-4 text-neutral-400 sm:text-xs">
                  Fresh footwear
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                <ShieldCheck
                  size={22}
                  className="mb-4 text-amber-400"
                />
                <h3 className="text-xs font-bold sm:text-sm">
                  Quality First
                </h3>
                <p className="mt-2 text-[10px] leading-4 text-neutral-400 sm:text-xs">
                  Made for comfort
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                <Truck
                  size={22}
                  className="mb-4 text-amber-400"
                />
                <h3 className="text-xs font-bold sm:text-sm">
                  Easy Shopping
                </h3>
                <p className="mt-2 text-[10px] leading-4 text-neutral-400 sm:text-xs">
                  Simple checkout
                </p>
              </div>
            </div>
          </div>

          {/* Left Footer */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
            <p className="text-xs text-neutral-400">
              © 2026 THE SHOE SPOT
            </p>

            <p className="text-xs font-medium tracking-wider text-amber-400">
              WALK WITH CONFIDENCE
            </p>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-14">
          <div className="w-full max-w-md">

            {/* Heading */}
            <div className="mb-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <ShoppingBag size={27} />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Your Account
              </p>

              <h2 className="text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
                Welcome Back
              </h2>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Sign in to continue shopping at THE SHOE SPOT.
              </p>
            </div>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-neutral-800"
                >
                  Email or Username
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter email or username"
                    autoComplete="username"
                    required
                    className="w-full border border-neutral-200 bg-neutral-50 py-3.5 pl-12 pr-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-neutral-800"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full border border-neutral-200 bg-neutral-50 py-3.5 pl-12 pr-12 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition hover:text-amber-600"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                    className="h-4 w-4 accent-amber-600"
                  />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-amber-700 transition hover:text-amber-900"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 bg-[#171717] px-5 py-4 text-sm font-bold text-white transition duration-200 hover:bg-amber-600 active:scale-[0.99]"
              >
                Sign In
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-neutral-200" />
              <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-400">
                NEW CUSTOMER?
              </span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-neutral-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-amber-700 transition hover:text-amber-900"
              >
                Create an account
              </Link>
            </p>

            {/* Browse Products */}
            <Link
              to="/"
              className="mt-5 flex w-full items-center justify-center gap-2 border border-neutral-200 px-5 py-3.5 text-sm font-semibold text-neutral-700 transition hover:border-amber-500 hover:text-amber-700"
            >
              <ShoppingBag size={17} />
              Continue Shopping
              <ArrowRight size={16} />
            </Link>

            {/* Bottom Text */}
            <p className="mt-8 text-center text-[10px] font-semibold tracking-[0.25em] text-neutral-400">
              STYLE · COMFORT · CONFIDENCE
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
