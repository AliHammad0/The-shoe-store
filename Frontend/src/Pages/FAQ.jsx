import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";
import logo from "../assets/shoelogo.png";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Delivery time depends on your location. Once your order is confirmed, our team will process it and arrange delivery. Please check your order confirmation for any available delivery details.",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "If your shoes have a sizing issue or arrive damaged, please contact our support team with your order details. Items should be unused and in their original packaging. Return or exchange approval depends on our applicable policy.",
  },
  {
    question: "Do I need an account to place an order?",
    answer:
      "No. You can place an order through guest checkout without creating an account. Simply enter your contact and delivery details during checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "You can select Cash on Delivery if it is available for your order. Available payment methods will be shown during checkout.",
  },
  {
    question: "How can I choose the right shoe size?",
    answer:
      "Check the available sizes on the product page before adding an item to your cart. If you are unsure about sizing, contact our support team before placing your order.",
  },
  {
    question: "How can I track or check my order?",
    answer:
      "Keep your order confirmation and contact details available. You can contact our support team to ask about your order status. Order tracking is available only if the store provides it.",
  },
  {
    question: "What if a product is out of stock?",
    answer:
      "If a shoe size or product is out of stock, it may not be available to order. You can explore other styles and available sizes in our collection.",
  },
  {
    question: "How do I contact THE SHOE SPOT?",
    answer:
      "For questions about products, sizing, delivery, or an order, use the contact information provided on our website.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={logo}
              alt="THE SHOE SPOT"
              className="h-12 w-auto object-contain"
            />
            <span className="text-lg font-black tracking-[0.12em] text-black">
              THE SHOE SPOT
            </span>
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-amber-700">
            We Are Here to Help
          </p>

          <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Frequently Asked{" "}
            <span className="text-amber-600">Questions</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Everything you need to know about shopping with THE SHOE SPOT,
            from choosing your perfect pair to placing your order.
          </p>
        </div>

        {/* FAQ Card */}
        <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-8">
          <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-800">
              <MessageCircle size={21} />
            </div>

            <div>
              <h2 className="font-bold text-gray-950">
                Shopping Help
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Find answers to common questions
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`text-sm font-semibold sm:text-base ${
                        isOpen ? "text-amber-800" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-black text-white"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={17} />
                      ) : (
                        <Plus size={17} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-5 pr-8 text-sm leading-7 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-2xl bg-black px-6 py-8 text-center text-white sm:px-10">
          <h2 className="text-xl font-bold sm:text-2xl">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-300">
            We want you to shop with confidence and find your perfect pair.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-400"
          >
            Continue Shopping
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">
            STYLE · COMFORT · CONFIDENCE
          </p>

          <p className="mt-3 text-xs text-gray-400">
            © 2026 THE SHOE SPOT
          </p>
        </footer>
      </div>
    </main>
  );
}
