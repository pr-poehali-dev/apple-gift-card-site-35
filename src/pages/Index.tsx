
import React from 'react';
import { Button } from '@/components/ui/button';
import GiftCard from '@/components/GiftCard';
import CartButton from '@/components/CartButton';
import Icon from '@/components/ui/icon';

const Index = () => {
  const giftCards = [
    { id: '1', name: 'Gift Card 1000 ₽', price: 1000 },
    { id: '2', name: 'Gift Card 2500 ₽', price: 2500 },
    { id: '3', name: 'Gift Card 5000 ₽', price: 5000 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Навигация */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Icon name="Apple" className="h-6 w-6 mr-2" />
                <span className="font-medium">Apple Gift Card</span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#gift-cards" className="text-sm font-medium transition-colors hover:text-gray-600">
                Карты
              </a>
              <a href="#how-to-use" className="text-sm font-medium transition-colors hover:text-gray-600">
                Как использовать
              </a>
            </nav>
            <div className="flex items-center">
              <CartButton />
            </div>
          </div>
        </div>
      </header>

      {/* Баннер */}
      <section className="pt-16 pb-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Подарите удовольствие<br />с картами Apple&nbsp;Gift&nbsp;Card
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Отличный подарок для всех, кто пользуется устройствами и сервисами Apple
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800" asChild>
              <a href="#gift-cards">Выбрать номинал</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Карты разного номинала */}
      <section id="gift-cards" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Выберите номинал карты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCards.map(card => (
              <GiftCard key={card.id} product={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Как использовать */}
      <section id="how-to-use" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Как использовать Gift Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Выберите и купите</h3>
              <p className="text-gray-600">
                Выберите подходящий номинал Gift Card и оформите заказ
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Получите код</h3>
              <p className="text-gray-600">
                Получите код активации на электронную почту после подтверждения оплаты
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Активируйте</h3>
              <p className="text-gray-600">
                Войдите в свой Apple ID и активируйте код в App Store или iTunes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-50 py-12 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Продукты</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#gift-cards" className="hover:text-gray-900">Gift Card 1000 ₽</a></li>
                <li><a href="#gift-cards" className="hover:text-gray-900">Gift Card 2500 ₽</a></li>
                <li><a href="#gift-cards" className="hover:text-gray-900">Gift Card 5000 ₽</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#how-to-use" className="hover:text-gray-900">Как использовать</a></li>
                <li><a href="#" className="hover:text-gray-900">Условия использования</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Служба поддержки</a></li>
                <li><a href="#" className="hover:text-gray-900">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Свяжитесь с нами</h3>
              <p className="text-sm text-gray-600 mb-4">
                Остались вопросы? Напишите нам на почту:
              </p>
              <a href="mailto:support@example.com" className="text-sm font-medium text-black hover:text-gray-900">
                support@example.com
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Apple Gift Card. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
