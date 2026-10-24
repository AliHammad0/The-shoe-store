
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  UserRound,
  LockKeyhole,
  Footprints,
  ArrowRight,
  ShieldCheck,
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

        {/* LEFT SIDE */}
        <section
          className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-cover bg-center px-8 py-8 text-white sm:px-12 sm:py-10 lg:min-h-screen lg:px-16 lg:py-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(20,20,20,0.80), rgba(20,20,20,0.48)), url('https://themesdesign.in/heyauth/layouts/images/bg-img-2.png')",
          }}
        >
          {/* Brand */}
          <Link
            to="/"
            className="relative z-10 flex w-fit items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-black">
              <Footprints size={27} />
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-wider sm:text-2xl">
                THE SHOE SPOT
              </h2>
              <p className="mt-1 text-[10px] tracking-[0.3em] text-amber-300">
                STEP INTO STYLE
              </p>
            </div>
          </Link>

          {/* Hero Content */}
          <div className="relative z-10 my-12 max-w-lg">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Find Your Perfect Pair
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
              Learn and
              <br />
              <span className="text-amber-300">
                Discover.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              No matter what your style is, discover
              footwear that matches your personality.
              Start your shopping journey with THE SHOE SPOT.
            </p>

            {/* Features */}
            <div className="mt-9 grid grid-cols-3 gap-3">
              <div className="border border-white/15 bg-white/5 p-3 sm:p-4">
                <Footprints
                  size={22}
                  className="mb-4 text-amber-400"
                />
                <p className="text-xs font-bold sm:text-sm">
                  Latest Styles
                </p>
                <p className="mt-2 text-[10px] text-white/60 sm:text-xs">
                  Fresh footwear
                </p>
              </div>

              <div className="border border-white/15 bg-white/5 p-3 sm:p-4">
                <ShieldCheck
                  size={22}
                  className="mb-4 text-amber-400"
                />
                <p className="text-xs font-bold sm:text-sm">
                  Quality First
                </p>
                <p className="mt-2 text-[10px] text-white/60 sm:text-xs">
                  Comfort matters
                </p>
              </div>

              <div className="border border-white/15 bg-white/5 p-3 sm:p-4">
                <UserRound
                  size={22}
                  className="mb-4 text-amber-400"
                />
                <p className="text-xs font-bold sm:text-sm">
                  Your Account
                </p>
                <p className="mt-2 text-[10px] text-white/60 sm:text-xs">
                  Join our store
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-5">
            <p className="text-xs text-white/70">
              © 2026 THE SHOE SPOT
            </p>

            <p className="text-xs font-medium tracking-widest text-amber-300">
              WALK YOUR STYLE
            </p>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full max-w-md">

            {/* Logo */}
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-amber-400">
                <Footprints size={23} />
              </div>

              <span className="text-lg font-extrabold tracking-wider text-neutral-900">
                THE SHOE SPOT
              </span>
            </Link>

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
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-amber-600"
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

              {/* Terms & Conditions */}
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
                className="font-bold text-amber-700 hover:text-amber-900"
              >
                Sign in
              </Link>
            </p>

            {/* Bottom Images */}
            <div className="mt-9 flex items-center justify-center gap-5 border-t border-neutral-100 pt-5">
              <img
                src="https://themesdesign.in/heyauth/layouts/images/img-1.png"
                alt="Footwear collection"
                className="h-12 w-16 object-contain opacity-80"
              />

              <div className="h-8 w-px bg-neutral-200" />

              <img
                src="https://themesdesign.in/heyauth/layouts/images/img-2.png"
                alt="Shoe styles"
                className="h-12 w-16 object-contain opacity-80"
              />
            </div>

            <p className="mt-5 text-center text-xs tracking-widest text-neutral-400">
              STYLE · COMFORT · CONFIDENCE
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;
