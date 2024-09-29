// src/components/Header.tsx
const Header: React.FC = () => {
  return (
    <header className="text-white shadow-md border-b border-slate-700  ">
      <div className="container ml-10 w-11/12  flex justify-start items-center py-3 gap-14">
        {/* Logo Section */}

        <div className="flex w-11/12  items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8aeI-og93IV5tknuGGXGBvOGlWn9g_yYhQ&s"
            alt="Logo"
            className="h-14 w-14 rounded-full"
          />
          <h1 className="text-xl font-bold ">Payment</h1>
        </div>

        {/* Navigation Links */}

        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-gray-800   rounded-md p-2">
          <input
            type="text"
            placeholder="Search or jump to..."
            className="bg-transparent text-gray-400 focus:outline-none px-2"
          />
          <span className="text-gray-500 px-2">/</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
