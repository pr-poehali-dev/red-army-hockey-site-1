import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const upcomingMatches = [
    { id: 1, opponent: 'Динамо Москва', date: '25 октября 2024', time: '19:00', location: 'Домашний' },
    { id: 2, opponent: 'СКА', date: '28 октября 2024', time: '18:30', location: 'Выездной' },
    { id: 3, opponent: 'Локомотив', date: '1 ноября 2024', time: '19:30', location: 'Домашний' },
  ];

  const results = [
    { id: 1, opponent: 'Спартак', score: '3-1', result: 'Победа', date: '18 октября 2024' },
    { id: 2, opponent: 'Металлург', score: '2-2', result: 'Ничья', date: '15 октября 2024' },
    { id: 3, opponent: 'Авангард', score: '4-2', result: 'Победа', date: '12 октября 2024' },
  ];

  const players = [
    { id: 1, number: 71, name: 'Александр Овечкин', position: 'Левый нападающий', goals: 12, assists: 8 },
    { id: 2, number: 13, name: 'Павел Дацюк', position: 'Центральный нападающий', goals: 8, assists: 15 },
    { id: 3, number: 8, name: 'Илья Ковальчук', position: 'Правый нападающий', goals: 10, assists: 11 },
    { id: 4, number: 1, name: 'Сергей Бобровский', position: 'Вратарь', goals: 0, assists: 2 },
    { id: 5, number: 91, name: 'Владимир Тарасенко', position: 'Правый нападающий', goals: 9, assists: 12 },
    { id: 6, number: 47, name: 'Александр Радулов', position: 'Левый нападающий', goals: 7, assists: 14 },
    { id: 7, number: 27, name: 'Артемий Панарин', position: 'Левый нападающий', goals: 11, assists: 13 },
    { id: 8, number: 86, name: 'Никита Кучеров', position: 'Правый нападающий', goals: 14, assists: 16 },
    { id: 9, number: 9, name: 'Иван Проворов', position: 'Защитник', goals: 3, assists: 9 },
    { id: 10, number: 77, name: 'Виктор Хедман', position: 'Защитник', goals: 2, assists: 11 },
    { id: 11, number: 65, name: 'Андрей Василевский', position: 'Вратарь', goals: 0, assists: 1 },
    { id: 12, number: 19, name: 'Евгений Малкин', position: 'Центральный нападающий', goals: 10, assists: 14 },
    { id: 13, number: 92, name: 'Евгений Кузнецов', position: 'Центральный нападающий', goals: 6, assists: 10 },
    { id: 14, number: 72, name: 'Артемий Анисимов', position: 'Центральный нападающий', goals: 5, assists: 7 },
    { id: 15, number: 42, name: 'Андрей Марков', position: 'Защитник', goals: 1, assists: 8 },
    { id: 16, number: 2, name: 'Андрей Свечников', position: 'Правый нападающий', goals: 8, assists: 9 },
  ];

  const news = [
    {
      id: 1,
      title: 'Красная Армия одержала убедительную победу',
      date: '18 октября 2024',
      excerpt: 'В напряжённом матче наша команда одержала победу со счётом 3:1 над Спартаком...',
    },
    {
      id: 2,
      title: 'Новый контракт с ведущим нападающим',
      date: '16 октября 2024',
      excerpt: 'Руководство клуба объявило о продлении контракта с ключевым игроком команды...',
    },
    {
      id: 3,
      title: 'Подготовка к решающему матчу',
      date: '14 октября 2024',
      excerpt: 'Команда провела интенсивную тренировку перед важной встречей с Динамо...',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Shield" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-3xl font-bebas tracking-wider text-primary">Красная Армия</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <Button variant="ghost" onClick={() => scrollToSection('home')} className="font-bebas text-lg">
                Главная
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('team')} className="font-bebas text-lg">
                Команда
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('schedule')} className="font-bebas text-lg">
                Расписание
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('results')} className="font-bebas text-lg">
                Результаты
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('news')} className="font-bebas text-lg">
                Новости
              </Button>
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/d5f8b1af-a412-40d9-a8a9-3e15db4c8baf/files/290fe775-a7ef-49ac-9078-2e31f2ee9a2a.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 speed-lines opacity-20 animate-slide-in-right"
              style={{
                top: `${20 + i * 15}%`,
                width: `${300 + i * 100}px`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-7xl md:text-9xl font-bebas text-primary mb-4 tracking-wider">
            Красная Армия
          </h2>
          <p className="text-2xl md:text-3xl font-bebas text-foreground mb-8 tracking-wide">
            Сила. Скорость. Победа.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="font-bebas text-xl px-8">
              <Icon name="Calendar" className="mr-2" size={20} />
              Расписание матчей
            </Button>
            <Button size="lg" variant="outline" className="font-bebas text-xl px-8">
              <Icon name="Trophy" className="mr-2" size={20} />
              Статистика
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Trophy" className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-4xl font-bebas text-primary">15</p>
                <p className="text-sm text-muted-foreground">Побед</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Target" className="mx-auto mb-2 text-accent" size={32} />
                <p className="text-4xl font-bebas text-accent">48</p>
                <p className="text-sm text-muted-foreground">Голов</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Users" className="mx-auto mb-2 text-secondary" size={32} />
                <p className="text-4xl font-bebas text-secondary">25</p>
                <p className="text-sm text-muted-foreground">Игроков</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Award" className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-4xl font-bebas text-primary">3</p>
                <p className="text-sm text-muted-foreground">Чемпионства</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bebas text-center mb-12 text-primary">Наша Команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.map((player) => (
              <Card key={player.id} className="hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="text-2xl font-bebas px-4 py-1">{player.number}</Badge>
                    <Icon name="User" className="text-muted-foreground" size={24} />
                  </div>
                  <CardTitle className="font-bebas text-2xl">{player.name}</CardTitle>
                  <CardDescription>{player.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Голы</p>
                      <p className="text-2xl font-bebas text-primary">{player.goals}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Передачи</p>
                      <p className="text-2xl font-bebas text-accent">{player.assists}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bebas text-center mb-12 text-primary">Расписание</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {upcomingMatches.map((match) => (
              <Card key={match.id} className="hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name="Shield" className="text-primary-foreground" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bebas">VS {match.opponent}</h3>
                        <p className="text-sm text-muted-foreground">{match.date} • {match.time}</p>
                      </div>
                    </div>
                    <Badge variant={match.location === 'Домашний' ? 'default' : 'secondary'} className="font-bebas text-lg px-4">
                      {match.location}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bebas text-center mb-12 text-primary">Результаты</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {results.map((match) => (
              <Card key={match.id} className="hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <h3 className="text-2xl font-bebas">VS {match.opponent}</h3>
                        <p className="text-sm text-muted-foreground">{match.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-4xl font-bebas text-primary">{match.score}</p>
                      <Badge
                        variant={match.result === 'Победа' ? 'default' : 'secondary'}
                        className="font-bebas text-lg px-4"
                      >
                        {match.result}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bebas text-center mb-12 text-primary">Новости</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <Card key={article.id} className="hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-full h-40 bg-primary/20 rounded-md mb-4 flex items-center justify-center">
                    <Icon name="Newspaper" className="text-primary" size={48} />
                  </div>
                  <CardTitle className="font-bebas text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="font-bebas p-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Shield" className="text-primary-foreground" size={20} />
            </div>
            <h3 className="text-2xl font-bebas text-primary">Красная Армия</h3>
          </div>
          <p className="text-muted-foreground mb-4">Хоккейный клуб • Москва, Россия</p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">© 2024 Красная Армия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;