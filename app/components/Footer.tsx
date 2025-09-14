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
          <h3 className="text-sm font-semibold mb-2">Контакты</h3>
          <p className="text-lg font-bold">+7 495 122 22 46</p>
          <p className="text-sm text-gray-400">9:00 до 22:00 по Москве</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Каталог</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Постельное белье</li>
            <li>Покрывала</li>
            <li>Декоративные наволочки</li>
            <li>Средства по уходу</li>
            <li>Текстиль для ванной</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">О Parpa</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>О компании</li>
            <li>Процесс производства</li>
            <li>Материалы</li>
            <li>Инструкции по уходу</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Еще</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Заказать образцы</li>
            <li>Оплата и доставка</li>
            <li>Примерка</li>
            <li>Обмен и возврат</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-gray-500">
        © Parpa 2019. Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
