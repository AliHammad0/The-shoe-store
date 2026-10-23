import React, { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, Send, CheckCircle2 } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const informationLinks = [
    { name: "About Us", path: "/about" },
    { name: "Checkout", path: "/checkout" },
    { name: "Contact", path: "/contact" },
    { name: "Help & FAQ", path: "/faq" },
  ];

  const accountLinks = [
    { name: "My Account", path: "/login" },
    { name: "Contact", path: "/contact" },
    { name: "Shopping Cart", path: "/cart" },
    { name: "Shop", path: "/shop" },
  ];

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="shoe-footer w-full bg-white text-black">
      <style>{`
        .shoe-footer,
        .shoe-footer * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        .shoe-footer a {
          text-decoration: none;
        }

        .shoe-footer .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 14px;
          line-height: 1.8;
          transition: color .25s ease, transform .25s ease;
        }

        .shoe-footer .footer-link:hover {
          color: #000;
          transform: translateX(4px);
        }

        .shoe-footer .footer-link-arrow {
          color: #000;
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity .25s ease, transform .25s ease;
        }

        .shoe-footer .footer-link:hover .footer-link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .shoe-footer .footer-social {
          display: flex;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          border: 1px solid #dedede;
          border-radius: 50%;
          color: #222;
          font-size: 12px;
          font-weight: 700;
          transition: background .25s ease, color .25s ease,
            border-color .25s ease, transform .25s ease;
        }

        .shoe-footer .footer-social:hover {
          background: #111;
          color: #fff;
          border-color: #111;
          transform: translateY(-3px);
        }

        .shoe-footer .footer-input {
          min-width: 0;
          width: 100%;
          border: 1px solid #dedede;
          border-radius: 3px;
          background: #fff;
          padding: 14px 15px;
          color: #111;
          font-size: 14px;
          outline: none;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .shoe-footer .footer-input:focus {
          border-color: #111;
          box-shadow: 0 0 0 2px rgba(0,0,0,.05);
        }

        .shoe-footer .footer-input::placeholder {
          color: #999;
        }

        .shoe-footer .footer-submit {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid #111;
          border-radius: 3px;
          background: #111;
          padding: 13px 19px;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          transition: background .25s ease, color .25s ease;
        }

        .shoe-footer .footer-submit:hover {
          background: #fff;
          color: #111;
        }

        .shoe-footer .footer-heading {
          margin-bottom: 20px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #111;
        }

        .shoe-footer .footer-heading-line {
          width: 36px;
          height: 2px;
          background: #111;
          margin-bottom: 24px;
        }

        .shoe-footer .footer-contact {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #666;
          font-size: 13px;
          line-height: 1.8;
          transition: color .2s ease;
        }

        .shoe-footer .footer-contact:hover {
          color: #111;
        }

        .shoe-footer .footer-contact-icon {
          flex-shrink: 0;
          margin-top: 3px;
          color: #111;
        }

        @media (max-width: 640px) {
          .shoe-footer .footer-input {
            padding: 12px 10px;
            font-size: 12px;
          }

          .shoe-footer .footer-submit {
            gap: 5px;
            padding: 12px 10px;
            font-size: 10px;
            letter-spacing: .03em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shoe-footer *,
          .shoe-footer *::before,
          .shoe-footer *::after {
            transition: none !important;
          }
        }
      `}</style>

      {/* Newsletter Section */}
      <div className="border-y border-gray-200 bg-[#f8f8f8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-12">
          <div className="max-w-lg">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500">
              Stay in the loop
            </p>

            <h2 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
              Get 10% Off Your First Order
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Subscribe for new arrivals, exclusive offers and the latest
              footwear trends.
            </p>
          </div>

          <div className="w-full md:max-w-md">
            {subscribed ? (
              <div
                className="flex items-center gap-3 rounded border border-gray-200 bg-white px-4 py-4 text-sm text-black"
                role="status"
              >
                <CheckCircle2 size={19} />
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  autoComplete="email"
                  required
                  className="footer-input"
                />

                <button type="submit" className="footer-submit">
                  Subscribe
                  <Send size={14} />
                </button>
              </form>
            )}

            <p className="mt-3 text-xs text-gray-400">
              Join our community. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-12 lg:px-10 lg:py-16">

        {/* Brand & Contact */}
        <div>
          <a href="/" className="inline-block">
            <span className="text-2xl font-black tracking-[-0.06em] text-black sm:text-3xl">
              THE SHOE
              <span className="ml-1 text-black">SPOT.</span>
            </span>

            <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.32em] text-gray-500">
              Find Your Perfect Fit
            </span>
          </a>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
            Step into confidence. Discover timeless styles, everyday comfort
            and footwear that fits your lifestyle.
          </p>

          <div className="mt-6 space-y-4">
            <div className="footer-contact">
              <MapPin size={17} className="footer-contact-icon" />
              <span>214 Mercer Lane, Brooklyn, NY 11201</span>
            </div>

            <a href="tel:+15550142290" className="footer-contact">
              <Phone size={17} className="footer-contact-icon" />
              <span>+1 (555) 014-2290</span>
            </a>

            <a href="mailto:hello@example.com" className="footer-contact">
              <Mail size={17} className="footer-contact-icon" />
              <span>hello@example.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-7 flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social"
            >
              f
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social"
            >
              IG
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="footer-social"
            >
              X
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="footer-social"
            >
              YT
            </a>
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="footer-heading">Information</h3>
          <div className="footer-heading-line" />

          <ul className="space-y-3">
            {informationLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} className="footer-link">
                  <ArrowRight
                    size={13}
                    className="footer-link-arrow"
                  />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="footer-heading">My Account</h3>
          <div className="footer-heading-line" />

          <ul className="space-y-3">
            {accountLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} className="footer-link">
                  <ArrowRight
                    size={13}
                    className="footer-link-arrow"
                  />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Shopping Benefits */}
        <div>
          <h3 className="footer-heading">Why Shop With Us</h3>
          <div className="footer-heading-line" />

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-black">
                Quality You Can Feel
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Carefully selected styles for everyday wear.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-black">
                Styles for Every Day
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Find the right pair for every occasion.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-black">
                Easy Shopping
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                A smooth and simple shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-center text-xs leading-6 text-gray-500 md:text-left">
            Copyright © {new Date().getFullYear()} The Shoe Spot. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-600">
            <span className="mr-1 text-xs text-gray-400">We accept</span>

            <span className="rounded border border-gray-200 px-3 py-2 text-[10px] font-extrabold tracking-wide">
              VISA
            </span>

            <span className="rounded border border-gray-200 px-3 py-2 text-[10px] font-extrabold tracking-wide">
              Mastercard
            </span>

            <span className="rounded border border-gray-200 px-3 py-2 text-[10px] font-extrabold tracking-wide">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;