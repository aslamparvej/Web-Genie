import { Link } from "react-router-dom";
import { LinkIcon, IndianRupee, CircleQuestionMark } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-8 lg:px-0">
        <div className="grid grid-cols-1 gap-20 pb-4 lg:grid-cols-3">
          <div>
            <Link to="/" className="text-2xl text-white font-bold">
              Web <span className="text-amber-500">Genie</span>
            </Link>
            <p className="text-[16px] text-gray-400 mt-4">
              Generate a pixel-perfect, SEO-optimized single-page site in 60
              seconds. Download a clean .zip — ready for Hostinger, Bluehost, or
              any host you choose. Pay once. Own forever.
            </p>
          </div>

          <div>
            <h2 className="flex gap-2 items-center text-xl text-white font-bold mb-4">
              <LinkIcon color="#fe9a00" />
              Quice Links
            </h2>
            <ul className="flex flex-col gap-2 ps-8">
              <li>
                <span
                  onClick={() => scrollToSection("why_choose_us")}
                  className="flex items-center gap-1 text-[16px] text-gray-300 cursor-pointer"
                >
                  <IndianRupee size={18} color="#fe9a00" />
                  Why Choose Us
                </span>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection("how_it_works")}
                  className="flex items-center gap-1 text-[16px] text-gray-300 cursor-pointer"
                >
                  <CircleQuestionMark size={18} color="#fe9a00" />
                  How It Works
                </span>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection("features")}
                  className="flex items-center gap-1 text-[16px] text-gray-300 cursor-pointer"
                >
                  <IndianRupee size={18} color="#fe9a00" />
                  Features
                </span>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection("prompt_examples")}
                  className="flex items-center gap-1 text-[16px] text-gray-400 cursor-pointer"
                >
                  <IndianRupee size={18} color="#fe9a00" />
                  Prompt Examples
                </span>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection("pricing")}
                  className="flex items-center gap-1 text-[16px] text-gray-400 cursor-pointer"
                >
                  <IndianRupee size={18} color="#fe9a00" />
                  Pricing
                </span>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection("faqs")}
                  className="flex items-center gap-1 text-[16px] text-gray-400 cursor-pointer"
                >
                  <IndianRupee size={18} color="#fe9a00" />
                  FAQs
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-8 border-t border-gray-900 pt-4 lg:flex-row">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Dev Center. All rights reserved.
          </p>

          <ul className="flex flex-col items-center gap-2 lg:gap-4 lg:flex-row">
            <li>
              <Link to="/privacy-policy" className="text-sm text-gray-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="text-sm text-gray-600"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="text-sm text-gray-600">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="text-sm text-gray-600">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="text-sm text-gray-600">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
