
import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
  Heart,
  Eye,
  RotateCcw,
  Check,
  Plus,
} from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Men Formal Oxford MF8018-Coffee",
    category: "Formal Shoes",
    price: 13950,
    oldPrice: 15950,
    color: "Brown",
    sizes: ["40", "41", "42", "43"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Men Formal Oxford MF8014-Dark Brown",
    category: "Formal Shoes",
    price: 14950,
    oldPrice: 16950,
    color: "Brown",
    sizes: ["40", "41", "42", "43"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=85",
    badge: "New",
  },
  {
    id: 3,
    name: "Classic Leather Derby Shoes",
    category: "Formal Shoes",
    price: 12950,
    oldPrice: 14950,
    color: "Black",
    sizes: ["39", "40", "41", "42"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85",
    badge: "",
  },
  {
    id: 4,
    name: "Premium Black Leather Loafers",
    category: "Casual Shoes",
    price: 10950,
    oldPrice: 12950,
    color: "Black",
    sizes: ["40", "41", "42", "43"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=900&q=85",
    badge: "Popular",
  },
  {
    id: 5,
    name: "Everyday White Sneakers",
    category: "Sneakers",
    price: 7990,
    oldPrice: 9990,
    color: "White",
    sizes: ["39", "40", "41", "42", "43"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    badge: "Sale",
  },
  {
    id: 6,
    name: "Urban Running Sneakers",
    category: "Sports Shoes",
    price: 8990,
    oldPrice: 10990,
    color: "Blue",
    sizes: ["40", "41", "42", "43"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85",
    badge: "",
  },
  {
    id: 7,
    name: "Minimal White Casual Shoes",
    category: "Casual Shoes",
    price: 6990,
    oldPrice: 8490,
    color: "White",
    sizes: ["39", "40", "41", "42"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85",
    badge: "",
  },
  {
    id: 8,
    name: "Classic Black Oxford Shoes",
    category: "Formal Shoes",
    price: 13950,
    oldPrice: 15950,
    color: "Black",
    sizes: ["40", "41", "42", "43"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85",
    badge: "Premium",
  },
  {
    id: 9,
    name: "Comfort Sport Sneakers",
    category: "Sports Shoes",
    price: 5990,
    oldPrice: 7490,
    color: "Black",
    sizes: ["39", "40", "41"],
    availability: "Out of Stock",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",
    badge: "",
  },
  {
    id: 10,
    name: "Brown Premium Leather Loafers",
    category: "Casual Shoes",
    price: 11950,
    oldPrice: 13950,
    color: "Brown",
    sizes: ["40", "41", "42", "43"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=900&q=85",
    badge: "New",
  },
  {
    id: 11,
    name: "Lightweight Running Shoes",
    category: "Sports Shoes",
    price: 8490,
    oldPrice: 9990,
    color: "Blue",
    sizes: ["40", "41", "42"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85",
    badge: "",
  },
  {
    id: 12,
    name: "Essential Everyday Sneakers",
    category: "Sneakers",
    price: 7490,
    oldPrice: 8990,
    color: "White",
    sizes: ["39", "40", "41", "42", "43"],
    availability: "In Stock",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    badge: "",
  },
];

const INITIAL_FILTERS = {
  minPrice: "",
  maxPrice: "",
  colors: [],
  sizes: [],
  availability: "All",
};

const CATEGORIES = [
  "All",
  "Formal Shoes",
  "Casual Shoes",
  "Sneakers",
  "Sports Shoes",
];

const COLORS = [
  { name: "Black", hex: "#171717" },
  { name: "White", hex: "#ffffff" },
  { name: "Brown", hex: "#795548" },
  { name: "Blue", hex: "#3159a5" },
];

const SIZES = ["39", "40", "41", "42", "43"];

const formatPrice = (price) =>
  `Rs. ${Number(price).toLocaleString("en-PK")}`;

function FilterSection({ title, open, onToggle, children }) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-900">
          {title}
        </span>

        {open ? (
          <ChevronUp size={18} strokeWidth={1.6} />
        ) : (
          <Plus size={18} strokeWidth={1.6} />
        )}
      </button>

      {open && <div className="pb-5">{children}</div>}
    </div>
  );
}

function FilterDrawer({
  open,
  onClose,
  filters,
  setFilters,
  onApply,
  onRemoveAll,
}) {
  const [expanded, setExpanded] = useState({
    Price: true,
    Color: true,
    Size: true,
    Availability: true,
  });

  const toggleSection = (section) => {
    setExpanded((previous) => ({
      ...previous,
      [section]: !previous[section],
    }));
  };

  const toggleValue = (key, value) => {
    setFilters((previous) => {
      const values = previous[key];
      const exists = values.includes(value);

      return {
        ...previous,
        [key]: exists
          ? values.filter((item) => item !== value)
          : [...values, value],
      };
    });
  };

  const handleRemoveAll = () => {
    setFilters({ ...INITIAL_FILTERS });
    onRemoveAll();
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[70] bg-black/50 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Product filters"
        className={`fixed right-0 top-0 z-[80] flex h-dvh w-full max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold tracking-wide text-gray-900">
              Filters
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Find your perfect pair
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          <FilterSection
            title="Price"
            open={expanded.Price}
            onToggle={() => toggleSection("Price")}
          >
            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs text-gray-500">
                Minimum price
                <input
                  type="number"
                  min="0"
                  placeholder="Rs. 0"
                  value={filters.minPrice}
                  onChange={(event) =>
                    setFilters((previous) => ({
                      ...previous,
                      minPrice: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none transition focus:border-black"
                />
              </label>

              <label className="text-xs text-gray-500">
                Maximum price
                <input
                  type="number"
                  min="0"
                  placeholder="No limit"
                  value={filters.maxPrice}
                  onChange={(event) =>
                    setFilters((previous) => ({
                      ...previous,
                      maxPrice: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded border border-gray-300 px-3 py-3 text-sm text-gray-900 outline-none transition focus:border-black"
                />
              </label>
            </div>
          </FilterSection>

          <FilterSection
            title="Color"
            open={expanded.Color}
            onToggle={() => toggleSection("Color")}
          >
            <div className="space-y-4">
              {COLORS.map((color) => (
                <label
                  key={color.name}
                  className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color.name)}
                    onChange={() => toggleValue("colors", color.name)}
                    className="h-4 w-4 accent-black"
                  />

                  <span
                    className="h-5 w-5 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />

                  <span>{color.name}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection
            title="Size"
            open={expanded.Size}
            onToggle={() => toggleSection("Size")}
          >
            <div className="grid grid-cols-5 gap-2">
              {SIZES.map((size) => {
                const selected = filters.sizes.includes(size);

                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => toggleValue("sizes", size)}
                    className={`flex h-10 items-center justify-center border text-sm transition ${
                      selected
                        ? "border-black bg-black text-white"
                        : "border-gray-300 text-gray-700 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </FilterSection>

          <FilterSection
            title="Availability"
            open={expanded.Availability}
            onToggle={() => toggleSection("Availability")}
          >
            <div className="space-y-4">
              {["All", "In Stock", "Out of Stock"].map((status) => (
                <label
                  key={status}
                  className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="availability"
                    checked={filters.availability === status}
                    onChange={() =>
                      setFilters((previous) => ({
                        ...previous,
                        availability: status,
                      }))
                    }
                    className="h-4 w-4 accent-black"
                  />
                  {status}
                </label>
              ))}
            </div>
          </FilterSection>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-gray-200 bg-white p-5">
          <button
            type="button"
            onClick={handleRemoveAll}
            className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-800 transition hover:border-black hover:bg-gray-50"
          >
            <RotateCcw size={15} />
            Remove All
          </button>

          <button
            type="button"
            onClick={onApply}
            className="flex items-center justify-center gap-2 bg-black px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-gray-800"
          >
            <Check size={15} />
            Apply
          </button>
        </div>
      </aside>
    </>
  );
}

function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
}) {
  const [showSizes, setShowSizes] = useState(false);

  return (
    <article
      className="group min-w-0"
      onMouseEnter={() => setShowSizes(true)}
      onMouseLeave={() => setShowSizes(false)}
      onFocus={() => setShowSizes(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setShowSizes(false);
        }
      }}
    >
      <div
        className="relative cursor-pointer overflow-hidden bg-[#f5f5f3]"
        onClick={() => setShowSizes((previous) => !previous)}
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-white px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-900">
            {product.badge}
          </span>
        )}

        {product.availability === "Out of Stock" && (
          <span className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white">
            Out of stock
          </span>
        )}

        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button
            type="button"
            aria-label={
              isWishlisted ? "Remove from wishlist" : "Add to wishlist"
            }
            onClick={(event) => {
              event.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-black hover:text-white ${
              isWishlisted ? "text-red-600" : "text-gray-800"
            }`}
          >
            <Heart
              size={17}
              fill={isWishlisted ? "currentColor" : "none"}
              strokeWidth={1.6}
            />
          </button>

          <button
            type="button"
            aria-label="Quick view product"
            onClick={(event) => {
              event.stopPropagation();
              onQuickView(product);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow-sm transition hover:bg-black hover:text-white"
          >
            <Eye size={17} strokeWidth={1.6} />
          </button>
        </div>

        {/* Sizes sirf hover, focus ya card click par nazar aayengi */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-white/95 px-3 py-4 backdrop-blur-sm transition-all duration-200 ${
            showSizes
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          }`}
          aria-hidden={!showSizes}
        >
          <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-600">
            Select your size
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                disabled={product.availability === "Out of Stock"}
                onClick={(event) => {
                  event.stopPropagation();
                }}
                className="min-w-9 border border-gray-300 px-2 py-2 text-xs text-gray-800 transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-gray-500">
          {product.category}
        </p>

        <h3 className="line-clamp-2 min-h-10 text-sm font-medium leading-5 text-gray-900 transition group-hover:text-gray-600">
          {product.name}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-sm font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>

          {product.oldPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <p className="mt-2 text-[10px] uppercase tracking-wider text-gray-500">
          {product.availability}
        </p>
      </div>
    </article>
  );
}

export default function ProductsShowcase() {
  const [products] = useState(PRODUCTS);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Featured");
  const [viewBy, setViewBy] = useState(4);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState(1);

  // Draft filters: drawer ke andar tabdeel hote hain.
  const [draftFilters, setDraftFilters] = useState({
    ...INITIAL_FILTERS,
  });

  // Applied filters: sirf Apply button par update hote hain.
  const [appliedFilters, setAppliedFilters] = useState({
    ...INITIAL_FILTERS,
  });

  const PAGE_SIZE = 6;

  const activeFilterCount =
    appliedFilters.minPrice !== "" ||
    appliedFilters.maxPrice !== "" ||
    appliedFilters.colors.length > 0 ||
    appliedFilters.sizes.length > 0 ||
    appliedFilters.availability !== "All"
      ? [
          appliedFilters.minPrice !== "",
          appliedFilters.maxPrice !== "",
          appliedFilters.colors.length > 0,
          appliedFilters.sizes.length > 0,
          appliedFilters.availability !== "All",
        ].filter(Boolean).length
      : 0;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (search.trim()) {
      const query = search.trim().toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.color.toLowerCase().includes(query)
      );
    }

    if (appliedFilters.minPrice !== "") {
      result = result.filter(
        (product) => product.price >= Number(appliedFilters.minPrice)
      );
    }

    if (appliedFilters.maxPrice !== "") {
      result = result.filter(
        (product) => product.price <= Number(appliedFilters.maxPrice)
      );
    }

    if (appliedFilters.colors.length > 0) {
      result = result.filter((product) =>
        appliedFilters.colors.includes(product.color)
      );
    }

    if (appliedFilters.sizes.length > 0) {
      result = result.filter((product) =>
        product.sizes.some((size) => appliedFilters.sizes.includes(size))
      );
    }

    if (appliedFilters.availability !== "All") {
      result = result.filter(
        (product) => product.availability === appliedFilters.availability
      );
    }

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Name: A to Z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Newest") {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [products, category, search, sortBy, appliedFilters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleProducts = filteredProducts.slice(0, currentPage * PAGE_SIZE);

  const resetAllFilters = () => {
    setDraftFilters({ ...INITIAL_FILTERS });
    setAppliedFilters({ ...INITIAL_FILTERS });
    setCategory("All");
    setSearch("");
    setPage(1);
  };

  const applyFilters = () => {
    const min = draftFilters.minPrice;
    const max = draftFilters.maxPrice;

    if (
      min !== "" &&
      max !== "" &&
      Number(min) > Number(max)
    ) {
      window.alert("Minimum price maximum price se zyada nahi ho sakti.");
      return;
    }

    setAppliedFilters({
      ...draftFilters,
      colors: [...draftFilters.colors],
      sizes: [...draftFilters.sizes],
    });
    setPage(1);
    setDrawerOpen(false);
  };

  const toggleWishlist = (productId) => {
    setWishlist((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-[1600px] px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pt-12">
        {/* Page heading */}
        <div className="mb-8 border-b border-gray-200 pb-7 text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">
            SOLEORA Collection
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Shop All Shoes
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
            Discover timeless styles, everyday essentials and premium footwear.
          </p>
        </div>

        {/* Category selector */}
        <div className="mb-7 flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setPage(1);
              }}
              className={`shrink-0 border px-4 py-2.5 text-xs font-medium transition sm:px-5 ${
                category === item
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-y border-gray-200 py-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setDraftFilters({
                  ...appliedFilters,
                  colors: [...appliedFilters.colors],
                  sizes: [...appliedFilters.sizes],
                });
                setDrawerOpen(true);
              }}
              className="relative flex items-center gap-2 border border-gray-300 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition hover:border-black"
            >
              <SlidersHorizontal size={16} />
              Filter
              {activeFilterCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <span className="text-xs text-gray-500">
              {filteredProducts.length === 0
                ? "No products found"
                : `Showing ${Math.min(
                    currentPage * PAGE_SIZE,
                    filteredProducts.length
                  )} of ${filteredProducts.length} item(s)`}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 text-xs text-gray-500">
              <span className="hidden sm:inline">SORT BY:</span>

              <select
                value={sortBy}
                onChange={(event) => {
                  setSortBy(event.target.value);
                  setPage(1);
                }}
                className="max-w-[165px] cursor-pointer border-0 bg-white py-2 text-xs font-semibold text-gray-900 outline-none"
              >
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </label>

            <div className="hidden items-center gap-2 border-l border-gray-200 pl-4 sm:flex">
              <span className="text-[10px] tracking-wider text-gray-500">
                VIEW:
              </span>

              {[3, 4, 6].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setViewBy(count)}
                  className={`px-1.5 py-1 text-xs transition ${
                    viewBy === count
                      ? "font-bold text-black underline underline-offset-4"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-7">
          <div className="flex max-w-md items-center gap-3 border-b border-gray-300 py-2.5 focus-within:border-black">
            <Search size={17} className="text-gray-500" />

            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="text-gray-500 hover:text-black"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Products grid */}
        {visibleProducts.length > 0 ? (
          <div
            className={`grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-12 ${
              viewBy === 3
                ? "lg:grid-cols-3"
                : viewBy === 6
                  ? "lg:grid-cols-4 xl:grid-cols-6"
                  : "lg:grid-cols-4"
            }`}
          >
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={toggleWishlist}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <Search size={22} className="text-gray-500" />
            </div>

            <h2 className="text-lg font-semibold">No products found</h2>

            <p className="mt-2 text-sm text-gray-500">
              Try changing your search or filters.
            </p>

            <button
              type="button"
              onClick={resetAllFilters}
              className="mt-5 border border-black px-5 py-3 text-xs font-semibold uppercase tracking-wider transition hover:bg-black hover:text-white"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > currentPage * PAGE_SIZE && (
          <div className="mt-12 flex flex-col items-center justify-center">
            <p className="mb-4 text-xs text-gray-500">
              Showing {Math.min(currentPage * PAGE_SIZE, filteredProducts.length)} of {filteredProducts.length} products
            </p>

            <button
              type="button"
              onClick={() =>
                setPage((previous) =>
                  Math.min(previous + 1, totalPages)
                )
              }
              className="min-w-44 border border-black bg-black px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Sliding filter drawer */}
      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        filters={draftFilters}
        setFilters={setDraftFilters}
        onApply={applyFilters}
        onRemoveAll={resetAllFilters}
      />

      {/* Quick View */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Product quick view"
            className="relative max-h-[90dvh] w-full max-w-3xl overflow-y-auto bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuickViewProduct(null)}
              aria-label="Close quick view"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
            >
              <X size={20} />
            </button>

            <div className="grid sm:grid-cols-2">
              <div className="bg-[#f5f5f3]">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="h-full max-h-[560px] min-h-[300px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-9">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  {quickViewProduct.category}
                </p>

                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  {quickViewProduct.name}
                </h2>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="text-lg font-semibold">
                    {formatPrice(quickViewProduct.price)}
                  </span>

                  {quickViewProduct.oldPrice > quickViewProduct.price && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(quickViewProduct.oldPrice)}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  Color: {quickViewProduct.color}
                </p>

                <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider">
                  Available sizes
                </p>

                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      disabled={quickViewProduct.availability === "Out of Stock"}
                      className="border border-gray-300 px-4 py-3 text-sm transition hover:border-black disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <p className="mt-5 text-xs text-gray-500">
                  Availability: {quickViewProduct.availability}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    toggleWishlist(quickViewProduct.id);
                  }}
                  className="mt-7 flex items-center justify-center gap-2 border border-black px-5 py-3 text-xs font-semibold uppercase tracking-wider transition hover:bg-black hover:text-white"
                >
                  <Heart
                    size={16}
                    fill={
                      wishlist.includes(quickViewProduct.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                  {wishlist.includes(quickViewProduct.id)
                    ? "Saved to Wishlist"
                    : "Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
