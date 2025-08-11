import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Eye" size={28} className="text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">SecureVision</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#systems" className="text-gray-600 hover:text-blue-600 transition-colors">Системы</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Консультация</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-24 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Современные системы
              <span className="text-blue-600 block">видеонаблюдения</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессиональное проектирование, установка и обслуживание систем безопасности 
              для дома и бизнеса. Гарантия качества и надежности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Надежная защита</h3>
              <p className="text-gray-600">Круглосуточный контроль и мгновенные уведомления о любых событиях</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Удаленный доступ</h3>
              <p className="text-gray-600">Просмотр видео с любого устройства в режиме реального времени</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Простая настройка</h3>
              <p className="text-gray-600">Интуитивно понятный интерфейс и профессиональная установка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section id="systems" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Системы видеонаблюдения</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий выбор современного оборудования для любых задач безопасности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/36ac8ff5-33f6-4567-893b-e549946ef812.jpg" 
                    alt="IP-камера видеонаблюдения"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">IP-камеры</CardTitle>
                <CardDescription>
                  Высокое разрешение до 4K, ночное видение, защита от погодных условий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">4K разрешение</Badge>
                  <Badge variant="secondary">Ночное видение</Badge>
                  <Badge variant="secondary">IP67</Badge>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-4">от 15 000 ₽</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/d69cfd64-f7cf-45bc-b8ef-0ee5adf41db6.jpg" 
                    alt="Системы записи видеонаблюдения"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">Системы записи</CardTitle>
                <CardDescription>
                  Надежные NVR и DVR регистраторы для хранения видеоархива
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">До 32 каналов</Badge>
                  <Badge variant="secondary">RAID</Badge>
                  <Badge variant="secondary">Облако</Badge>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-4">от 25 000 ₽</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/9c0b591d-daf4-484a-a1ef-2f09c8da8a57.jpg" 
                    alt="Беспроводные системы видеонаблюдения"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">Беспроводные системы</CardTitle>
                <CardDescription>
                  Современные Wi-Fi камеры и системы без проводов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Wi-Fi 6</Badge>
                  <Badge variant="secondary">Автономные</Badge>
                  <Badge variant="secondary">Быстрый монтаж</Badge>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-4">от 12 000 ₽</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги по установке</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный цикл работ от проектирования до технического обслуживания
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Search" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Проектирование</h3>
                  <p className="text-gray-600">Разработка индивидуального проекта с учетом особенностей объекта и требований безопасности</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Wrench" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Установка</h3>
                  <p className="text-gray-600">Профессиональный монтаж оборудования с соблюдением всех технических требований</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Cog" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Настройка</h3>
                  <p className="text-gray-600">Конфигурация системы, настройка удаленного доступа и обучение персонала</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="HeartHandshake" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Гарантийное обслуживание</h3>
                  <p className="text-gray-600">Полная гарантия на оборудование и работы сроком до 3 лет</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Техподдержка 24/7</h3>
                  <p className="text-gray-600">Круглосуточная техническая поддержка и оперативное устранение неисправностей</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Обучение</h3>
                  <p className="text-gray-600">Подробное обучение работе с системой и передача документации</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании SecureVision</h2>
              <p className="text-lg text-gray-600 mb-6">
                Уже более 10 лет мы специализируемся на проектировании и установке систем видеонаблюдения 
                для частных и коммерческих объектов. Наша команда состоит из сертифицированных специалистов 
                с большим опытом работы.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Успешных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Техподдержка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3 года</div>
                  <div className="text-gray-600">Гарантия</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-800">Сертифицированные специалисты</Badge>
                <Badge className="bg-blue-100 text-blue-800">Официальный партнер Hikvision</Badge>
                <Badge className="bg-blue-100 text-blue-800">ISO 9001:2015</Badge>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши преимущества</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500" />
                    <span className="text-gray-700">Бесплатный выезд на объект</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500" />
                    <span className="text-gray-700">Гарантия лучшей цены</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500" />
                    <span className="text-gray-700">Работаем с НДС</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500" />
                    <span className="text-gray-700">Рассрочка без переплат</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500" />
                    <span className="text-gray-700">Быстрые сроки установки</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Получите бесплатную консультацию и расчет стоимости системы видеонаблюдения
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (800) 123-45-67 (бесплатно)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@securevision.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Адрес</h4>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123, оф. 456</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Время работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб-Вс: по договоренности</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Заказать консультацию</CardTitle>
                  <CardDescription>
                    Оставьте заявку, и мы свяжемся с вами в течение 15 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" type="tel" />
                  </div>
                  <div>
                    <Input placeholder="Email" type="email" />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите ваши задачи..." className="min-h-[100px]" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Eye" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">SecureVision</h3>
              </div>
              <p className="text-gray-400">
                Профессиональные системы видеонаблюдения для вашей безопасности
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">IP-камеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Системы записи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Беспроводные системы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Техобслуживание</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@securevision.ru</p>
                <p>г. Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SecureVision. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;