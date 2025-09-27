import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-12 px-8 lg:px-48">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image
            src="/white_logo.svg"
            alt="Logo"
            width={145}
            height={40}
            className="mb-4"
          />
          <h3 className="text-sm font-semibold mb-2">Contacts</h3>
          <p className="text-lg font-bold">+7 706 706 65 00</p>
          <p className="text-sm text-gray-400">
            9:00 a.m. to 10:00 p.m. Astana time
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Catalog</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Bed linen</li>
            <li>Bedspreads</li>
            <li>Decorative pillowcases</li>
            <li>Care products</li>
            <li>Bathroom textiles</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">About Parpa</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About the company</li>
            <li>Production process</li>
            <li>Materials</li>
            <li>Care instructions</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">More</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Order samples</li>
            <li>Payment and delivery</li>
            <li>Fitting</li>
            <li>Exchanges and returns</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-gray-500">
        © Parpa 2019. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
