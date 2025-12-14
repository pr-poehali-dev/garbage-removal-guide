import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 rounded-full shadow-sm">
            <Icon name="AlertCircle" size={20} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Инструкция для жителей</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Мусор не вывозят.<br />Что делать?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Пошаговая инструкция для жителей
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#steps" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg">
              <Icon name="ArrowDown" size={20} />
              Начать
            </a>
            <a href="#deadlines" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground rounded-lg font-semibold hover:scale-105 transition-transform shadow-sm">
              <Icon name="Clock" size={20} />
              Сроки рассмотрения
            </a>
          </div>
        </div>
      </section>

      <section id="steps" className="py-16 px-4 bg-gradient-to-b from-background to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">5 шагов к решению проблемы</h2>
            <p className="text-lg text-muted-foreground">Следуйте инструкции, чтобы добиться результата</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <Badge variant="secondary" className="mb-3">Шаг 1</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">Определите, кто отвечает</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                    <Icon name="Building2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">УК/ТСЖ</p>
                      <p className="text-xs text-muted-foreground">За двор и контейнеры</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                    <Icon name="Truck" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Региональный оператор</p>
                      <p className="text-xs text-muted-foreground">За вывоз ТКО</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                    <Icon name="Phone" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Администрация</p>
                      <p className="text-xs text-muted-foreground">Если не помогло</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in bg-gradient-to-br from-white to-secondary/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Icon name="FileText" size={32} className="text-secondary" />
                </div>
                <Badge variant="secondary" className="mb-3">Шаг 2</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">Опишите проблему</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Адрес</p>
                      <p className="text-xs text-muted-foreground">Точное место контейнеров</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="AlertTriangle" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Суть проблемы</p>
                      <p className="text-xs text-muted-foreground">Не вывозят, переполнены</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Сроки</p>
                      <p className="text-xs text-muted-foreground">Когда началось</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name="Camera" size={32} className="text-primary" />
                </div>
                <Badge variant="secondary" className="mb-3">Шаг 3</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">Приложите доказательства</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Image" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Фото/видео</p>
                      <p className="text-xs text-muted-foreground">Переполненные баки</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Дата и время</p>
                      <p className="text-xs text-muted-foreground">Когда сделали фото</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Archive" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Прошлые ответы</p>
                      <p className="text-xs text-muted-foreground">Если обращались ранее</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in bg-gradient-to-br from-white to-secondary/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Icon name="ClipboardCheck" size={32} className="text-secondary" />
                </div>
                <Badge variant="secondary" className="mb-3">Шаг 4</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">Фиксируйте всё</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Номер заявки</p>
                      <p className="text-xs text-muted-foreground">Главное доказательство</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Дата и ФИО</p>
                      <p className="text-xs text-muted-foreground">Кто принял обращение</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Сроки нарушены?</p>
                      <p className="text-xs text-muted-foreground">Жалоба выше</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in bg-gradient-to-br from-primary/5 to-accent/20 border-2 border-primary/20 md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name="MessageCircle" size={32} className="text-primary" />
                </div>
                <Badge variant="secondary" className="mb-3">Шаг 5</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">Пишите спокойно</h3>
                
                <Icon name="Lightbulb" size={40} className="text-primary mb-4" />
                <p className="text-base font-semibold text-foreground mb-2">
                  Факты + фото работают лучше эмоций
                </p>
                <p className="text-sm text-muted-foreground">
                  Чем точнее жалоба, тем выше шанс решения
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="deadlines" className="py-16 px-4 bg-gradient-to-br from-accent/20 to-secondary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Сроки рассмотрения жалоб</h2>
            <p className="text-lg text-muted-foreground">Стандартные сроки по ЖКХ и вывозу мусора</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 animate-scale-in">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Building2" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">УК/ТСЖ</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Устная жалоба</span>
                    <Badge>1-3 дня</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Письменная жалоба</span>
                    <Badge>5-10 дней</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Региональный оператор</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Горячая линия</span>
                    <Badge>1-2 дня</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Письменное обращение</span>
                    <Badge>До 30 дней</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Жилинспекция</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Проверка по жалобе</span>
                    <Badge>До 30 дней</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Повторная проверка</span>
                    <Badge>До 20 дней</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Scale" size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Роспотребнадзор</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Обращение гражданина</span>
                    <Badge>До 30 дней</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Срочная жалоба</span>
                    <Badge>До 15 дней</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8 bg-white border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Важно помнить</h4>
                  <p className="text-muted-foreground">
                    Если в указанный срок ответ не получен или проблема не решена, вы имеете право обратиться 
                    в вышестоящую инстанцию или прокуратуру. Сохраняйте все документы и переписку.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground/5">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Инструкция для жителей. Информация актуальна на момент публикации.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;