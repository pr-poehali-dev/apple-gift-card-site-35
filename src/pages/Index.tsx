
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Apple" className="h-6 w-6" />
            <span className="font-medium text-lg">Gift Card</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Главная
            </a>
            <a href="#cards" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Карты
            </a>
            <a href="#howto" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Инструкция
            </a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Apple Gift Card
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Идеальный подарок для всех, кто любит Apple
              </p>
              <div className="flex justify-center pt-4">
                <Button 
                  className="rounded-full px-8 py-6 bg-black text-white hover:bg-gray-800 transition-colors"
                  size="lg"
                >
                  Выбрать карту
                </Button>
              </div>
            </div>
          </div>
          {/* Decorative background */}
          <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-gray-100 to-white opacity-50 blur-3xl"></div>
        </section>

        {/* Gift Cards Section */}
        <section id="cards" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите номинал</h2>
              <p className="text-lg text-gray-600">
                Мы предлагаем карты разного номинала для любого бюджета
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1000, 2500, 5000].map((price) => (
                <Card key={price} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-[4/3] bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                      <Icon name="CreditCard" className="h-16 w-16 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{price} ₽</h3>
                    <p className="text-gray-500 mb-4">
                      Apple Gift Card для покупок в App Store и не только
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button className="w-full rounded-full bg-black text-white hover:bg-gray-800">
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How To Section */}
        <section id="howto" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
              <p className="text-lg text-gray-600">
                Три простых шага для использования вашей Apple Gift Card
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "ShoppingBag",
                  title: "Купите карту",
                  description: "Выберите номинал и совершите покупку с помощью удобного способа оплаты"
                },
                {
                  icon: "Mailbox",
                  title: "Получите код",
                  description: "Вы мгновенно получите код карты на указанный email"
                },
                {
                  icon: "AppWindow",
                  title: "Активируйте",
                  description: "Войдите в свой Apple ID и активируйте карту в App Store"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="h-8 w-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Apple" className="h-6 w-6" />
                <span className="font-medium">Gift Card</span>
              </div>
              <p className="text-sm text-gray-500">
                Официальный партнер по продаже Apple Gift Card в России
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Разделы</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-gray-500 hover:text-black">Главная</a></li>
                <li><a href="#cards" className="text-sm text-gray-500 hover:text-black">Карты</a></li>
                <li><a href="#howto" className="text-sm text-gray-500 hover:text-black">Инструкция</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-500 hover:text-black">О нас</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-black">Условия</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-black">Конфиденциальность</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-500">support@applegiftcard.ru</li>
                <li className="text-sm text-gray-500">+7 (800) 123-45-67</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Apple Gift Card. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
