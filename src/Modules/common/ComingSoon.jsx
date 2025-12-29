import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, });
  const launchDate = new Date("2025-12-01T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="h-full flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center p-5">
      <h1 className="text-5xl font-bold mb-4">🚀 Coming Soon</h1>
      <p className="text-lg mb-10 opacity-80">
        We're working hard to launch something amazing. Stay tuned!
      </p>

      <div className="flex gap-5 text-center">
        <div>
          <p className="text-4xl font-semibold">{timeLeft.days}</p>
          <span className="text-sm uppercase opacity-70">Days</span>
        </div>
        <div>
          <p className="text-4xl font-semibold">{timeLeft.hours}</p>
          <span className="text-sm uppercase opacity-70">Hours</span>
        </div>
        <div>
          <p className="text-4xl font-semibold">{timeLeft.minutes}</p>
          <span className="text-sm uppercase opacity-70">Minutes</span>
        </div>
        <div>
          <p className="text-4xl font-semibold">{timeLeft.seconds}</p>
          <span className="text-sm uppercase opacity-70">Seconds</span>
        </div>
      </div>

      <div className="mt-10">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-lg outline-none text-black"
        />
        <button className="px-5 py-2 bg-white text-purple-700 font-semibold rounded-r-lg hover:bg-gray-200 transition">
          Notify Me
        </button>
      </div>

      <footer className="mt-10 text-sm opacity-70">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default ComingSoon;
