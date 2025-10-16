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
    { id: 1, number: 8, name: 'Zetka', position: 'Защитник', goals: 5, assists: 12, avatar: 'https://cdn.poehali.dev/projects/d5f8b1af-a412-40d9-a8a9-3e15db4c8baf/files/53a1b1ab-c588-4423-b8e2-abfb07d2f951.jpg' },
    { id: 2, number: 44, name: 'sharipzyanov', position: 'Нападающий', goals: 18, assists: 9, avatar: 'https://cdn.poehali.dev/projects/d5f8b1af-a412-40d9-a8a9-3e15db4c8baf/files/0d5c14ab-28e5-43db-a7f2-6c6e45962561.jpg' },
    { id: 3, number: 71, name: 'DellCall', position: 'Вратарь', goals: 0, assists: 3, avatar: 'https://cdn.poehali.dev/projects/d5f8b1af-a412-40d9-a8a9-3e15db4c8baf/files/01b1bfc4-5f0c-484d-b705-75286ae9b4f4.jpg' },
    { id: 4, number: 12, name: 'Kirieshka', position: 'Универсальный', goals: 11, assists: 14, avatar: 'https://cdn.poehali.dev/projects/d5f8b1af-a412-40d9-a8a9-3e15db4c8baf/files/e9ef11c8-f4f3-4ce8-bbef-3fcd76f42892.jpg' },
    { id: 5, number: 68, name: 'Kaly Way', position: 'Вратарь', goals: 0, assists: 1, avatar: 'https://cdn.poehali.dev/projects/d5f8b1af-a412-40d9-a8a9-3e15db4c8baf/files/b0283bb3-78f4-46ae-ac4e-7636de965c12.jpg' },
    { id: 6, number: 67, name: 'MEGADROCHER', position: 'Нападающий', goals: 22, assists: 15, avatar: 'https://cdn.poehali.dev/projects/d5f8b1af-a412-40d9-a8a9-3e15db4c8baf/files/7f06b103-0b75-47e9-a403-a4437bc8ef63.jpg' },
    { id: 7, number: 85, name: 'ПА', position: 'Нападающий', goals: 13, assists: 10, avatar: 'https://cdn.poehali.dev/projects/d5f8b1af-a412-40d9-a8a9-3e15db4c8baf/files/eb04ef24-28fa-4f03-846a-4ac17de9fc3a.jpg' },
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
              <h1 className="text-3xl font-teko tracking-wider text-primary">Красная Армия</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <Button variant="ghost" onClick={() => scrollToSection('home')} className="font-teko text-lg">
                Главная
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('team')} className="font-teko text-lg">
                Команда
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('schedule')} className="font-teko text-lg">
                Расписание
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('results')} className="font-teko text-lg">
                Результаты
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('news')} className="font-teko text-lg">
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
          <h2 className="text-7xl md:text-9xl font-teko text-primary mb-4 tracking-wider">
            Красная Армия
          </h2>
          <p className="text-2xl md:text-3xl font-teko text-foreground mb-8 tracking-wide">
            Сила. Скорость. Победа.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="font-teko text-xl px-8">
              <Icon name="Calendar" className="mr-2" size={20} />
              Расписание матчей
            </Button>
            <Button size="lg" variant="outline" className="font-teko text-xl px-8">
              <Icon name="Trophy" className="mr-2" size={20} />
              Статистика
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Trophy" className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-4xl font-teko text-primary">8</p>
                <p className="text-sm text-muted-foreground">Побед</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Target" className="mx-auto mb-2 text-accent" size={32} />
                <p className="text-4xl font-teko text-accent">23</p>
                <p className="text-sm text-muted-foreground">Голов забито</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Shield" className="mx-auto mb-2 text-secondary" size={32} />
                <p className="text-4xl font-teko text-secondary">9</p>
                <p className="text-sm text-muted-foreground">Голов пропущено</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name="Award" className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-4xl font-teko text-primary">17</p>
                <p className="text-sm text-muted-foreground">Очков</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <Card className="bg-card/90 backdrop-blur-sm border-primary/30">
              <CardHeader>
                <CardTitle className="text-3xl font-teko text-center text-primary">Детальная статистика сезона</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground text-sm mb-1">Всего игр</p>
                    <p className="text-3xl font-teko text-foreground">10</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground text-sm mb-1">Побед в основное время</p>
                    <p className="text-3xl font-teko text-primary">8</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground text-sm mb-1">Побед в ОТ</p>
                    <p className="text-3xl font-teko text-accent">0</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground text-sm mb-1">Поражений в ОТ</p>
                    <p className="text-3xl font-teko text-muted-foreground">1</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground text-sm mb-1">Поражений</p>
                    <p className="text-3xl font-teko text-destructive">1</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground text-sm mb-1">Разница шайб</p>
                    <p className="text-3xl font-teko text-primary">+14</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground text-sm mb-1">Побед по буллитам</p>
                    <p className="text-3xl font-teko text-muted-foreground">0</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground text-sm mb-1">Поражений по буллитам</p>
                    <p className="text-3xl font-teko text-muted-foreground">0</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground text-sm mb-1">Процент побед</p>
                    <p className="text-3xl font-teko text-primary">80%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-teko text-center mb-12 text-primary">Наша Команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {players.map((player) => (
              <Card key={player.id} className="hover:scale-105 transition-all bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 hover:border-primary overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-primary/30 to-accent/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={player.avatar} 
                      alt={player.name}
                      className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="text-3xl font-teko px-5 py-2 bg-primary text-primary-foreground shadow-lg">
                      {player.number}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4">
                    <h3 className="text-3xl font-teko text-foreground">{player.name}</h3>
                    <p className="text-accent font-teko text-lg">{player.position}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <Icon name="Target" className="mx-auto mb-1 text-primary" size={24} />
                      <p className="text-3xl font-teko text-primary">{player.goals}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Голы</p>
                    </div>
                    <div className="text-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <Icon name="ArrowRightLeft" className="mx-auto mb-1 text-accent" size={24} />
                      <p className="text-3xl font-teko text-accent">{player.assists}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Передачи</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Очки:</span>
                      <span className="text-2xl font-teko text-foreground">{player.goals + player.assists}</span>
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
          <h2 className="text-6xl font-teko text-center mb-12 text-primary">Расписание</h2>
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
                        <h3 className="text-2xl font-teko">VS {match.opponent}</h3>
                        <p className="text-sm text-muted-foreground">{match.date} • {match.time}</p>
                      </div>
                    </div>
                    <Badge variant={match.location === 'Домашний' ? 'default' : 'secondary'} className="font-teko text-lg px-4">
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
          <h2 className="text-6xl font-teko text-center mb-12 text-primary">Результаты</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {results.map((match) => (
              <Card key={match.id} className="hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <h3 className="text-2xl font-teko">VS {match.opponent}</h3>
                        <p className="text-sm text-muted-foreground">{match.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-4xl font-teko text-primary">{match.score}</p>
                      <Badge
                        variant={match.result === 'Победа' ? 'default' : 'secondary'}
                        className="font-teko text-lg px-4"
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
          <h2 className="text-6xl font-teko text-center mb-12 text-primary">Новости</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <Card key={article.id} className="hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-full h-40 bg-primary/20 rounded-md mb-4 flex items-center justify-center">
                    <Icon name="Newspaper" className="text-primary" size={48} />
                  </div>
                  <CardTitle className="font-teko text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="font-teko p-0">
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
            <h3 className="text-2xl font-teko text-primary">Красная Армия</h3>
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