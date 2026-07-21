import { NavLink, Link } from "react-router-dom";
import { Show, UserButton } from "@clerk/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { useUser } from "@clerk/react";

const Header = () => {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const _credit = 10;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveMenu(id);
  };

  return (
    <header className="min-h-20 px-8 sticky top-0 z-20 bg-black border-b border-gray-800 lg:px-0">
      <div className="max-w-7xl min-h-20 mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl text-white font-bold">
          Web <span className="text-amber-500">Genie</span>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-12 items-center">
            {isSignedIn ? (
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-amber-500 font-medium" : "text-white"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="site/generate"
                    className={({ isActive }) =>
                      isActive ? "text-amber-500 font-medium" : "text-white"
                    }
                  >
                    Generate
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sites"
                    className={({ isActive }) =>
                      isActive ? "text-amber-500 font-medium" : "text-white"
                    }
                  >
                    Generated Sites
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span
                    onClick={() => scrollToSection("why_choose_us")}
                    className={`${activeMenu === "why_choose_us" ? "text-amber-500" : "text-gray-400"} text-[16px] cursor-pointer`}
                  >
                    Why Choose Us
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => scrollToSection("how_it_works")}
                     className={`${activeMenu === "how_it_works" ? "text-amber-500" : "text-gray-400"} text-[16px] cursor-pointer`}
                  >
                    How It Works
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => scrollToSection("features")}
                    className={`${activeMenu === "features" ? "text-amber-500" : "text-gray-400"} text-[16px] cursor-pointer`}
                  >
                    Features
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => scrollToSection("prompt_examples")}
                     className={`${activeMenu === "prompt_examples" ? "text-amber-500" : "text-gray-400"} text-[16px] cursor-pointer`}
                  >
                    Prompt Examples
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => scrollToSection("pricing")}
                     className={`${activeMenu === "pricing" ? "text-amber-500" : "text-gray-400"} text-[16px] cursor-pointer`}
                  >
                    Pricing
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => scrollToSection("faqs")}
                     className={`${activeMenu === "faqs" ? "text-amber-500" : "text-gray-400"} text-[16px] cursor-pointer`}
                  >
                    FAQs
                  </span>
                </li>
              </>
            )}
          </ul>
        </nav>

        {isOpen && (
          <div className="fixed inset-0 top-20 bg-black z-50 lg:hidden">
            <ul className="flex flex-col items-center gap-8 pt-10">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl"
                >
                  Home
                </Link>
              </li>

              {!isSignedIn && (
                <>
                  <li>
                    <button
                      onClick={() => {
                        scrollToSection("why_choose_us");
                        setIsOpen(false);
                      }}
                      className="text-white text-xl"
                    >
                      Why Choose Us
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        scrollToSection("features");
                        setIsOpen(false);
                      }}
                      className="text-white text-xl"
                    >
                      Features
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        scrollToSection("pricing");
                        setIsOpen(false);
                      }}
                      className="text-white text-xl"
                    >
                      Pricing
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        scrollToSection("faqs");
                        setIsOpen(false);
                      }}
                      className="text-white text-xl"
                    >
                      FAQs
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}

        <div className="flex gap-8 items-center">
          {isSignedIn && (
            <div className="hidden lg:block px-4 py-1.5 rounded-full border text-amber-500 font-medium border-amber-500">
              Available Credit: <span className="font-bold">{_credit}</span>
            </div>
          )}
          <div>
            <Show when="signed-out">
              <Link
                to="/login"
                className="px-4 py-1.5 rounded-sm text-gray-800 font-medium cursor-pointer bg-amber-500 hover:bg-amber-600"
              >
                Sign in
              </Link>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
