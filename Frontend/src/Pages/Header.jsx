
import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  UserRound,
  ChevronDown,
  Mail,
  Phone,
  Heart,
  House,
  ShoppingBag,
  Layers3,
  BookOpen,
  Headphones,
  Menu,
  X,
  ArrowRight,
  Globe,
  User,
  PackageCheck,
  RotateCcw,
  CircleHelp,
} from "lucide-react";

const Header = () => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [mobileCustomerCareOpen, setMobileCustomerCareOpen] = useState(false);

  const mainLinks = [
    { name: "Home", path: "/", icon: House },
    { name: "Shop", path: "/shop", icon: ShoppingBag },
    { name: "Collection", path: "/collection", icon: Layers3 },
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Contact", path: "/contact", icon: Headphones },
  ];

  const shoeCategories = [
    { name: "Sneakers", path: "/shop?category=Sneakers" },
    { name: "Sports Shoes", path: "/shop?category=Sports%20Shoes" },
    { name: "Casual Shoes", path: "/shop?category=Casual%20Shoes" },
    { name: "Formal Shoes", path: "/shop?category=Formal%20Shoes" },
    { name: "Boots", path: "/shop?category=Boots" },
  ];

  const customerCareLinks = [
    { name: "Contact Us", path: "/contact", icon: Headphones },
    { name: "FAQ", path: "/faq", icon: CircleHelp },
    {
      name: "Shipping & Returns",
      path: "/shipping-returns",
      icon: RotateCcw,
    },
    {
      name: "Order Tracking",
      path: "/track-order",
      icon: PackageCheck,
    },
  ];

  const isActive = (path) => currentPath === path;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileCategoriesOpen(false);
    setMobileCustomerCareOpen(false);
  };

  return (
    <header className="shoe-header relative z-50 w-full bg-white text-[#171717]">
      <style>{`
        .shoe-header,
        .shoe-header * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        .shoe-header a {
          color: inherit;
          text-decoration: none;
        }

        .shoe-header button,
        .shoe-header input {
          color: inherit;
          font: inherit;
        }

        .shoe-header button {
          cursor: pointer;
        }

        .shoe-header svg {
          flex-shrink: 0;
        }

        .shoe-top-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #555 !important;
          transition: color .2s ease;
        }

        .shoe-top-link:hover {
          color: #111 !important;
        }

        .shoe-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 13px 12px;
          border-radius: 7px;
          color: #454545 !important;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          transition: background .2s ease, color .2s ease;
        }

        .shoe-nav-link:hover,
        .shoe-nav-link.active {
          background: #f4f4f4;
          color: #111 !important;
        }

        .shoe-nav-link.active::after {
          position: absolute;
          bottom: 4px;
          left: 12px;
          right: 12px;
          height: 2px;
          background: #171717;
          content: "";
        }

        .shoe-dropdown-parent {
          position: relative;
        }

        .shoe-dropdown {
          position: absolute;
          top: calc(100% + 7px);
          z-index: 80;
          min-width: 230px;
          padding: 7px;
          border: 1px solid #ededed;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 14px 35px rgba(0,0,0,.09);
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transform: translateY(7px);
          transition: opacity .18s ease, transform .18s ease, visibility .18s ease;
        }

        .shoe-dropdown-parent:hover > .shoe-dropdown,
        .shoe-dropdown-parent:focus-within > .shoe-dropdown {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .shoe-dropdown-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 11px 12px;
          border-radius: 7px;
          color: #444 !important;
          font-size: 13px;
          transition: background .18s ease, color .18s ease;
        }

        .shoe-dropdown-link:hover {
          background: #f5f5f5;
          color: #111 !important;
        }

        .shoe-icon-button {
          position: relative;
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid #ededed;
          border-radius: 50%;
          background: #fff;
          color: #222 !important;
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }

        .shoe-icon-button:hover {
          transform: translateY(-1px);
          border-color: #cfcfcf;
          background: #f7f7f7;
        }

        .shoe-cart-count {
          position: absolute;
          top: -4px;
          right: -4px;
          display: flex;
          min-width: 18px;
          height: 18px;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          border: 2px solid white;
          border-radius: 999px;
          background: #171717;
          color: #fff !important;
          font-size: 9px;
          font-weight: 700;
        }

        .shoe-search-input {
          width: 100%;
          min-width: 0;
          border: 0;
          background: transparent;
          outline: none;
        }

        .shoe-mobile-link {
          display: flex;
          min-height: 44px;
          align-items: center;
          gap: 11px;
          padding: 11px 12px;
          border-radius: 8px;
          color: #333 !important;
          font-size: 13px;
          font-weight: 500;
          transition: background .18s ease;
        }

        .shoe-mobile-link:hover,
        .shoe-mobile-link.active {
          background: #f3f3f3;
          color: #111 !important;
        }

        .shoe-mobile-link svg {
          width: 18px;
          height: 18px;
          color: #555;
        }

        .shoe-mobile-category {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 14px;
          border-bottom: 1px solid #f1f1f1;
          color: #333 !important;
          font-size: 13px;
        }

        .shoe-mobile-category:last-child {
          border-bottom: 0;
        }

        .shoe-mobile-category:hover {
          background: #f7f7f7;
        }

        .shoe-mobile-dropdown {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height .25s ease, opacity .2s ease;
        }

        .shoe-mobile-dropdown.open {
          max-height: 500px;
          opacity: 1;
        }

        @media (max-width: 1023px) {
          .shoe-desktop-navigation,
          .shoe-desktop-search {
            display: none !important;
          }
        }

        @media (min-width: 1024px) {
          .shoe-mobile-search,
          .shoe-mobile-menu {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .shoe-topbar {
            display: none !important;
          }

          .shoe-logo {
            font-size: 19px !important;
            letter-spacing: -1px !important;
          }

          .shoe-tagline {
            font-size: 8px !important;
            letter-spacing: 2px !important;
          }

          .shoe-header-main {
            gap: 10px !important;
            padding: 15px 12px !important;
          }

          .shoe-icon-button {
            width: 37px;
            height: 37px;
          }

          .shoe-mobile-actions {
            gap: 9px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shoe-header *,
          .shoe-header *::before,
          .shoe-header *::after {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Top Information Bar */}
      <div className="shoe-topbar border-b border-[#eeeeee]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 text-[11px] lg:px-8">
          <div className="flex items-center gap-6">
            <a href="mailto:hello@example.com" className="shoe-top-link">
              <Mail size={14} strokeWidth={1.7} />
              hello@example.com
            </a>

            <a href="tel:+15550142290" className="shoe-top-link">
              <Phone size={14} strokeWidth={1.7} />
              +1 (555) 014-2290
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/login" className="shoe-top-link">
              <UserRound size={14} strokeWidth={1.7} />
              Sign In
            </a>

            <span className="h-3 w-px bg-gray-200" />

            <span className="flex items-center gap-2 text-[#555]">
              <Globe size={14} strokeWidth={1.7} />
              English
              <ChevronDown size={13} />
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="shoe-header-main mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 lg:gap-8 lg:px-8">
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => {
            setMobileMenuOpen((previous) => !previous);
            setMobileCategoriesOpen(false);
            setMobileCustomerCareOpen(false);
          }}
          className="shoe-icon-button lg:hidden"
        >
          {mobileMenuOpen ? (
            <X size={21} strokeWidth={1.7} />
          ) : (
            <Menu size={21} strokeWidth={1.7} />
          )}
        </button>

        {/* Logo */}
        <a href="/" className="shrink-0">
          <span className="shoe-logo block text-[27px] font-black tracking-[-1.5px] text-[#171717]">
            THE SHOE SPOT<span className="text-[#888]">.</span>
          </span>

          <span className="shoe-tagline mt-1 block text-[9px] font-medium uppercase tracking-[3px] text-[#777]">
            Find Your Perfect Fit
          </span>
        </a>

        {/* Desktop Search */}
        <form
          action="/shop"
          method="get"
          className="shoe-desktop-search flex min-w-0 max-w-xl flex-1 items-center rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4 transition focus-within:border-[#999] focus-within:bg-white"
        >
          <Search
            size={19}
            strokeWidth={1.7}
            className="mr-3 shrink-0 text-[#777]"
          />

          <input
            type="search"
            name="search"
            placeholder="Search shoes, sneakers, collections..."
            className="shoe-search-input py-3 text-[13px] text-[#222] placeholder:text-[#999]"
          />

          <button
            type="submit"
            aria-label="Search"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-white transition hover:bg-[#444]"
          >
            <ArrowRight size={16} className="text-white" />
          </button>
        </form>

        {/* Shopping Actions */}
        <div className="shoe-mobile-actions flex shrink-0 items-center gap-3 sm:gap-4">
          <a
            href="/login"
            aria-label="My Account"
            className="shoe-icon-button hidden sm:inline-flex"
          >
            <User size={20} strokeWidth={1.6} />
          </a>

          <a
            href="/wishlist"
            aria-label="Wishlist"
            className="shoe-icon-button hidden md:inline-flex"
          >
            <Heart size={20} strokeWidth={1.6} />
          </a>

          <a
            href="/cart"
            aria-label="Shopping Cart"
            className="shoe-icon-button"
          >
            <ShoppingCart size={20} strokeWidth={1.6} />
            <span className="shoe-cart-count">0</span>
          </a>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="shoe-desktop-navigation border-y border-[#eeeeee]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
          <div className="shoe-dropdown-parent">
            <button
              type="button"
              className="flex items-center gap-3 rounded-lg border border-[#e8e8e8] px-4 py-3 text-[12px] font-semibold transition hover:bg-[#f7f7f7]"
            >
              <Menu size={18} strokeWidth={1.7} />
              All Categories
              <ChevronDown size={14} />
            </button>

            <div className="shoe-dropdown left-0">
              {shoeCategories.map((category) => (
                <a
                  key={category.name}
                  href={category.path}
                  className="shoe-dropdown-link"
                >
                  {category.name}
                  <ArrowRight size={14} className="text-[#aaa]" />
                </a>
              ))}
            </div>
          </div>

          <nav className="flex items-center gap-1">
            {mainLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.path}
                  className={`shoe-nav-link ${
                    isActive(link.path) ? "active" : ""
                  }`}
                >
                  <Icon size={16} strokeWidth={1.7} />
                  {link.name}
                </a>
              );
            })}

            <div className="shoe-dropdown-parent">
              <button
                type="button"
                className={`shoe-nav-link ${
                  customerCareLinks.some((link) => isActive(link.path))
                    ? "active"
                    : ""
                }`}
              >
                <Headphones size={16} strokeWidth={1.7} />
                Customer Care
                <ChevronDown size={14} />
              </button>

              <div className="shoe-dropdown right-0">
                {customerCareLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      className="shoe-dropdown-link"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={16} className="text-[#777]" />
                        {link.name}
                      </span>
                      <ArrowRight size={14} className="text-[#aaa]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>

          <a
            href="/shop"
            className="flex items-center gap-2 text-[12px] font-semibold text-[#444] transition hover:text-black"
          >
            Explore Shoes
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Mobile Search */}
      <form
        action="/shop"
        method="get"
        className="shoe-mobile-search mx-4 mb-3 flex items-center rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4"
      >
        <Search
          size={18}
          strokeWidth={1.7}
          className="mr-3 shrink-0 text-[#777]"
        />

        <input
          type="search"
          name="search"
          placeholder="Search your favourite shoes..."
          className="shoe-search-input py-3 text-[12px] placeholder:text-[#999]"
        />

        <button type="submit" aria-label="Search">
          <ArrowRight size={17} />
        </button>
      </form>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="shoe-mobile-menu border-y border-[#eeeeee] bg-white px-4 py-4 lg:hidden">
          <nav className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {mainLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={closeMobileMenu}
                  className={`shoe-mobile-link ${
                    isActive(link.path) ? "active" : ""
                  }`}
                >
                  <Icon size={18} strokeWidth={1.7} />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Shop By Category */}
          <button
            type="button"
            aria-expanded={mobileCategoriesOpen}
            onClick={() => {
              setMobileCategoriesOpen((previous) => !previous);
              setMobileCustomerCareOpen(false);
            }}
            className="mt-3 flex w-full items-center justify-between rounded-lg border border-[#ededed] px-3 py-3 text-[13px] font-semibold"
          >
            <span className="flex items-center gap-3">
              <Layers3 size={18} strokeWidth={1.7} />
              Shop By Category
            </span>

            <ChevronDown
              size={17}
              className={`transition-transform ${
                mobileCategoriesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`shoe-mobile-dropdown ${
              mobileCategoriesOpen ? "open" : ""
            }`}
          >
            <div className="mt-2 rounded-lg border border-[#eeeeee]">
              {shoeCategories.map((category) => (
                <a
                  key={category.name}
                  href={category.path}
                  onClick={closeMobileMenu}
                  className="shoe-mobile-category"
                >
                  {category.name}
                  <ArrowRight size={15} className="text-[#999]" />
                </a>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <button
            type="button"
            aria-expanded={mobileCustomerCareOpen}
            onClick={() => {
              setMobileCustomerCareOpen((previous) => !previous);
              setMobileCategoriesOpen(false);
            }}
            className="mt-3 flex w-full items-center justify-between rounded-lg border border-[#ededed] px-3 py-3 text-[13px] font-semibold"
          >
            <span className="flex items-center gap-3">
              <Headphones size={18} strokeWidth={1.7} />
              Customer Care
            </span>

            <ChevronDown
              size={17}
              className={`transition-transform ${
                mobileCustomerCareOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`shoe-mobile-dropdown ${
              mobileCustomerCareOpen ? "open" : ""
            }`}
          >
            <div className="mt-2 rounded-lg border border-[#eeeeee]">
              {customerCareLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={closeMobileMenu}
                    className="shoe-mobile-category"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={17} className="text-[#777]" />
                      {link.name}
                    </span>
                    <ArrowRight size={15} className="text-[#999]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Email */}
          <div className="mt-4 flex items-center gap-2 border-t border-[#eeeeee] pt-4 text-[11px] text-[#777]">
            <Mail size={14} />
            hello@example.com
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
