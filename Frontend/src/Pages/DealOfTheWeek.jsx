
// frontend/src/Pages/DealOfTheWeek.jsx

import React, { useEffect, useState } from "react";

const DealOfTheWeek = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 11,
    minutes: 16,
    seconds: 59,
  });

  useEffect(() => {
    const endTime = Date.now() + 30 * 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const difference = Math.max(0, endTime - Date.now());

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor((difference / 1000) % 60),
      });

      if (difference <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <section className="min-h-screen bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            Limited Time Offer
          </p>

          <h1 className="text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl lg:text-5xl">
            Deal Of The Week
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 bg-black" />
        </div>

        {/* Main Deal */}
        <div className="grid overflow-hidden rounded-2xl bg-gray-50 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-gray-100 p-6 sm:min-h-[450px] sm:p-10 lg:min-h-[580px]">
            <div className="absolute left-6 top-6 z-10 rounded-full bg-black px-5 py-2 text-xs font-bold uppercase tracking-wider text-white sm:left-8 sm:top-8">
              Deal Of The Week
            </div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTksRtIfAOKHK4kkOtyhHKLoPTQmJDVjZVkBV2cfh8Sg&s=10"
              alt="Featured shoes - Deal of the Week"
              className="h-full max-h-[460px] w-full object-contain transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Deal Details */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              This Week's Special
            </p>

            <h2 className="max-w-lg text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Step Into
              <span className="mt-2 block">Something Better.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-gray-600">
              Upgrade your everyday style with our featured shoes.
              Enjoy this week's special deal while it lasts.
            </p>

            {/* Price */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold text-black">
                Rs. 4,500
              </span>

              <span className="text-lg text-gray-400 line-through">
                Rs. 5,500
              </span>

              <span className="rounded-md bg-black px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Save 18%
              </span>
            </div>

            {/* Countdown */}
            <div className="mt-9">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-black">
                Offer Ends In
              </p>

              <div className="grid max-w-md grid-cols-4 gap-3">
                {countdownItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-2 py-4"
                  >
                    <span className="text-2xl font-bold tabular-nums text-black sm:text-3xl">
                      {String(item.value).padStart(2, "0")}
                    </span>

                    <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/products"
              className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-gray-800 sm:w-fit"
            >
              Shop The Deal
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </a>

            <p className="mt-4 text-xs text-gray-500">
              Limited-time offer. Shop now before the deal ends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheWeek;
