
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Minus,
  Plus,
  X,
  ArrowRight,
  ShoppingBag,
  Lock,
  Truck,
  Check,
} from "lucide-react";

const initialProducts = [
  {
    id: 1,
    name: "Nimbus ANC Headphones",
    variant: "Silver · 2-year warranty",
    price: 219,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
  },
  {
    id: 2,
    name: "Meridian Leather Watch",
    variant: "Tan strap · 40 mm",
    price: 165,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
  },
  {
    id: 3,
    name: "Slim Card Wallet",
    variant: "Premium leather · Black",
    price: 45,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300",
  },
];

const money = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

const checkoutSteps = ["Cart", "Shipping", "Payment", "Confirmation"];

export default function Cart() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(initialProducts);

  const subtotal = useMemo(
    () =>
      products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      ),
    [products]
  );

  const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 9.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  const itemCount = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const changeQuantity = (id, amount) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, product.quantity + amount),
            }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setProducts((current) =>
      current.filter((product) => product.id !== id)
    );
  };

  const continueToShipping = () => {
    if (!products.length) return;

    navigate("/shipping", {
      state: {
        products,
        subtotal,
        shipping,
        tax,
        total,
      },
    });
  };

  return (
    <main className="min-h-screen bg-[#faf8ff] px-4 py-7 text-[#211638] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Brand and Page Heading */}
        <header className="mb-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-purple-600">
            THE SHOE SPOT.
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Complete your order in a few simple steps.
          </p>
        </header>

        {/* Sticky Checkout Progress */}
        <section
          aria-label="Checkout progress"
          className="sticky top-0 z-50 mb-9 w-full rounded-xl border border-purple-200 bg-white px-3 py-5 shadow-[0_8px_25px_rgba(109,40,217,0.10)] sm:px-8 sm:py-6"
        >
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-5 h-[2px] bg-purple-100" />

            <div className="absolute left-[12.5%] top-5 h-[2px] w-0 bg-purple-600" />

            <div className="relative grid grid-cols-4">
              {checkoutSteps.map((step, index) => {
                const active = index === 0;
                const completed = false;

                return (
                  <div
                    key={step}
                    className="flex min-w-0 flex-col items-center"
                  >
                    <div
                      className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all ${
                        active
                          ? "border-purple-600 bg-purple-600 text-white shadow-[0_0_0_4px_rgba(147,51,234,0.12)]"
                          : completed
                            ? "border-purple-600 bg-purple-600 text-white"
                            : "border-purple-200 bg-white text-purple-400"
                      }`}
                    >
                      {completed ? <Check size={17} /> : index + 1}
                    </div>

                    <span
                      className={`mt-3 whitespace-nowrap text-[10px] sm:text-sm ${
                        active
                          ? "font-bold text-purple-700"
                          : "font-medium text-gray-400"
                      }`}
                    >
                      <span className="hidden sm:inline">
                        {index + 1}.{" "}
                      </span>
                      {step}
                    </span>

                    {active && (
                      <span className="mt-1 h-1 w-5 rounded-full bg-purple-600 sm:hidden" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cart Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Review your cart
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Check your items and order details before continuing.
          </p>
        </div>

        {products.length === 0 ? (
          <section className="rounded-2xl border border-purple-100 bg-white px-6 py-14 text-center shadow-sm">
            <ShoppingBag size={36} className="mx-auto text-purple-300" />

            <h3 className="mt-4 text-lg font-semibold">
              Your cart is empty
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Add a product before continuing to checkout.
            </p>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-6 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Continue shopping
            </button>
          </section>
        ) : (
          <section className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-[0_8px_30px_rgba(109,40,217,0.06)]">
            {/* Items Header */}
            <div className="flex items-center justify-between border-b border-purple-100 px-4 py-5 sm:px-6">
              <div>
                <h3 className="text-base font-semibold sm:text-lg">
                  Your items
                </h3>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
                </p>
              </div>

              <ShoppingBag size={21} className="text-purple-500" />
            </div>

            {/* Product List */}
            <div className="divide-y divide-purple-50 px-4 sm:px-6">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="flex items-center gap-3 py-5 sm:gap-5"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[76px] w-[76px] shrink-0 rounded-xl border border-purple-100 bg-purple-50 object-cover sm:h-24 sm:w-24"
                  />

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold leading-5 sm:text-base">
                      {product.name}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                      {product.variant}
                    </p>

                    <div className="mt-3 inline-flex items-center rounded-lg border border-purple-200 bg-white">
                      <button
                        type="button"
                        aria-label={`Decrease ${product.name} quantity`}
                        onClick={() => changeQuantity(product.id, -1)}
                        className="flex h-8 w-8 items-center justify-center text-purple-700 transition hover:bg-purple-50"
                      >
                        <Minus size={13} />
                      </button>

                      <span className="min-w-8 text-center text-xs font-semibold">
                        {product.quantity}
                      </span>

                      <button
                        type="button"
                        aria-label={`Increase ${product.name} quantity`}
                        onClick={() => changeQuantity(product.id, 1)}
                        className="flex h-8 w-8 items-center justify-center text-purple-700 transition hover:bg-purple-50"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-3">
                    <span className="text-sm font-bold sm:text-base">
                      {money(product.price * product.quantity)}
                    </span>

                    <button
                      type="button"
                      aria-label={`Remove ${product.name}`}
                      onClick={() => removeProduct(product.id)}
                      className="flex items-center gap-1 text-xs text-gray-400 transition hover:text-red-600"
                    >
                      <X size={15} />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Order Summary */}
            <div className="border-t border-purple-100 bg-purple-50/40 px-4 py-6 sm:px-6 sm:py-7">
              <h3 className="mb-5 text-base font-bold">
                Order summary
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-semibold">{money(subtotal)}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-gray-500">
                    <Truck size={15} className="text-purple-600" />
                    Shipping
                  </span>

                  <span className="font-semibold">
                    {shipping === 0 ? "Free" : money(shipping)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-500">
                    Estimated tax (7%)
                  </span>

                  <span className="font-semibold">{money(tax)}</span>
                </div>

                <div className="border-t border-purple-200 pt-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-bold">Total</span>
                    <span className="text-xl font-bold text-purple-800">
                      {money(total)}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    {subtotal >= 100
                      ? "Free shipping has been applied to your order."
                      : `Spend ${money(100 - subtotal)} more to qualify for free shipping.`}
                  </p>
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="button"
                onClick={continueToShipping}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-700 bg-purple-600 px-5 py-4 text-sm font-bold text-white shadow-[0_6px_18px_rgba(109,40,217,0.22)] transition duration-200 hover:border-purple-800 hover:bg-purple-700 hover:shadow-[0_8px_22px_rgba(109,40,217,0.30)] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-purple-200"
              >
                Continue to shipping
                <ArrowRight size={17} />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                <Lock size={13} className="text-purple-500" />
                Secure checkout
              </div>
            </div>
          </section>
        )}

        <p className="mt-5 text-center text-xs text-gray-400">
          Your information is protected during checkout.
        </p>
      </div>
    </main>
  );
}
