import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    {
      title: 'Брускетта с томатами',
      image: 'https://cdn.poehali.dev/projects/8dd5f800-ef06-4d72-acbd-472f0393c1bb/files/90a88f29-26f8-44b7-b460-199b67bb474c.jpg',
      price: '450 ₽'
    },
    {
      title: 'Паста Карбонара',
      image: 'https://cdn.poehali.dev/projects/8dd5f800-ef06-4d72-acbd-472f0393c1bb/files/90a88f29-26f8-44b7-b460-199b67bb474c.jpg',
      price: '680 ₽'
    },
    {
      title: 'Стейк из говядины',
      image: 'https://cdn.poehali.dev/projects/8dd5f800-ef06-4d72-acbd-472f0393c1bb/files/90a88f29-26f8-44b7-b460-199b67bb474c.jpg',
      price: '1250 ₽'
    },
    {
      title: 'Тирамису',
      image: 'https://cdn.poehali.dev/projects/8dd5f800-ef06-4d72-acbd-472f0393c1bb/files/90a88f29-26f8-44b7-b460-199b67bb474c.jpg',
      price: '420 ₽'
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/8dd5f800-ef06-4d72-acbd-472f0393c1bb/files/939028e0-7fc5-4dbe-a30b-1804391c7be0.jpg',
    'https://cdn.poehali.dev/projects/8dd5f800-ef06-4d72-acbd-472f0393c1bb/files/480ad23f-07da-439d-b0bc-38d37e666f16.jpg',
    'https://cdn.poehali.dev/projects/8dd5f800-ef06-4d72-acbd-472f0393c1bb/files/939028e0-7fc5-4dbe-a30b-1804391c7be0.jpg',
    'https://cdn.poehali.dev/projects/8dd5f800-ef06-4d72-acbd-472f0393c1bb/files/480ad23f-07da-439d-b0bc-38d37e666f16.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">CIRCLE</h1>
          <nav className="hidden md:flex gap-8">
            {['Главная', 'Меню', 'О нас', 'Галерея', 'Контакты'].map((item, index) => {
              const sectionId = ['home', 'menu', 'about', 'gallery', 'contact'][index];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                    activeSection === sectionId ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="text-center max-w-4xl animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
              CIRCLE
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
              Современная кухня в минималистичной атмосфере
            </p>
            <Button 
              size="lg" 
              className="text-base px-8"
              onClick={() => scrollToSection('menu')}
            >
              Посмотреть меню
            </Button>
          </div>
        </section>

        <section id="menu" className="py-24 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
              Наше меню
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {menuItems.map((item, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <span className="text-lg text-muted-foreground">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                  О нас
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Circle — это место, где минимализм встречается с гастрономией. 
                  Мы верим, что простота — это высшая форма изысканности.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Каждое блюдо создано с вниманием к деталям, используя только свежие 
                  сезонные продукты от проверенных поставщиков.
                </p>
              </div>
              <div className="aspect-square overflow-hidden animate-scale-in">
                <img
                  src="https://cdn.poehali.dev/projects/8dd5f800-ef06-4d72-acbd-472f0393c1bb/files/939028e0-7fc5-4dbe-a30b-1804391c7be0.jpg"
                  alt="Circle cafe interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
              Галерея
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
              Контакты
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      ул. Примерная, 12<br />
                      Москва, 101000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Часы работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Вс: 10:00 — 23:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-square bg-secondary/50 flex items-center justify-center animate-scale-in">
                <Icon name="Map" size={64} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Circle Cafe. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
