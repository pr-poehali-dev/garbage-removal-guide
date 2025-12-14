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

      <section id="steps" className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">5 шагов к решению проблемы</h2>
            <p className="text-lg text-muted-foreground">Сохраните карточки себе в соцсети</p>
          </div>
          
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in border-4 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-10 bg-gradient-to-br from-white to-primary/5">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">1</span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">Определите,<br/>кто отвечает</h3>
                    </div>
                  </div>
                  <Icon name="Users" size={56} className="text-primary/20" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-l-primary">
                    <Icon name="Building2" size={28} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="font-bold text-base">УК/ТСЖ</p>
                      <p className="text-sm text-muted-foreground">За двор и контейнеры</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-l-secondary">
                    <Icon name="Truck" size={28} className="text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-bold text-base">Региональный оператор</p>
                      <p className="text-sm text-muted-foreground">За вывоз ТКО</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-l-primary">
                    <Icon name="Phone" size={28} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="font-bold text-base">Администрация</p>
                      <p className="text-sm text-muted-foreground">Если не помогло выше</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in border-4 border-secondary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary"></div>
              <CardContent className="p-10 bg-gradient-to-br from-white to-secondary/5">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">2</span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">Опишите<br/>проблему</h3>
                    </div>
                  </div>
                  <Icon name="FileText" size={56} className="text-secondary/20" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-base mb-1">Адрес и точное место контейнеров</p>
                      <p className="text-sm text-muted-foreground">Укажите улицу, дом, номер подъезда или двора</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="AlertTriangle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-base mb-1">В чём проблема</p>
                      <p className="text-sm text-muted-foreground">Не вывозят, переполнены, нет контейнеров</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Calendar" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-base mb-1">Сколько времени длится</p>
                      <p className="text-sm text-muted-foreground">Укажите дату начала проблемы</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in border-4 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-10 bg-gradient-to-br from-white to-primary/5">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">3</span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">Приложите<br/>доказательства</h3>
                    </div>
                  </div>
                  <Icon name="Camera" size={56} className="text-primary/20" />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-5 bg-white rounded-xl shadow-sm text-center">
                    <Icon name="Image" size={40} className="text-primary mx-auto mb-3" />
                    <p className="font-bold text-sm mb-1">Фото/видео</p>
                    <p className="text-xs text-muted-foreground">Переполненные баки</p>
                  </div>
                  
                  <div className="p-5 bg-white rounded-xl shadow-sm text-center">
                    <Icon name="Clock" size={40} className="text-primary mx-auto mb-3" />
                    <p className="font-bold text-sm mb-1">Дата и время</p>
                    <p className="text-xs text-muted-foreground">Когда сделали фото</p>
                  </div>
                  
                  <div className="p-5 bg-white rounded-xl shadow-sm text-center">
                    <Icon name="Archive" size={40} className="text-primary mx-auto mb-3" />
                    <p className="font-bold text-sm mb-1">Прошлые ответы</p>
                    <p className="text-xs text-muted-foreground">Если обращались</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in border-4 border-secondary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary"></div>
              <CardContent className="p-10 bg-gradient-to-br from-white to-secondary/5">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">4</span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">Фиксируйте<br/>каждый шаг</h3>
                    </div>
                  </div>
                  <Icon name="ClipboardCheck" size={56} className="text-secondary/20" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <p className="font-bold text-base mb-1">Сохраняйте номер заявки</p>
                      <p className="text-sm text-muted-foreground">Это главное доказательство обращения</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <p className="font-bold text-base mb-1">Записывайте дату и ФИО</p>
                      <p className="text-sm text-muted-foreground">Кто принял обращение, время звонка</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <p className="font-bold text-base mb-1">Сроки нарушены?</p>
                      <p className="text-sm text-muted-foreground">Обращайтесь уровнем выше с копиями</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in border-4 border-primary/30 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              <CardContent className="p-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">5</span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">Пишите спокойно,<br/>но по делу</h3>
                    </div>
                  </div>
                  <Icon name="MessageCircle" size={56} className="text-primary/20" />
                </div>
                
                <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
                  <Icon name="Lightbulb" size={64} className="text-primary mx-auto mb-6" />
                  <p className="text-2xl font-bold text-foreground mb-4">
                    Факты + фото работают<br/>лучше эмоций
                  </p>
                  <p className="text-base text-muted-foreground max-w-md mx-auto">
                    Чем точнее жалоба, тем выше шанс, что мусор начнут вывозить вовремя
                  </p>
                </div>
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