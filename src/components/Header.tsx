import Link from "next/link";
import TypingAnimation from "./TypingAnimation";

const Header = () => {
  return (
    <header className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 flex-1">
            <Link href="/">
              <TypingAnimation fullText="Fashion Store" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
