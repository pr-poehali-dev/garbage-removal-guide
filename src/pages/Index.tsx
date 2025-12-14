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

      <section id="steps" className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name="Users" size={36} className="text-primary" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-1">Шаг 1</Badge>
                <h2 className="text-3xl font-bold text-foreground">Определите, кто отвечает</h2>
              </div>
              
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Building2" size={24} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">УК/ТСЖ</h3>
                        <p className="text-muted-foreground">За двор и контейнерную площадку</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-secondary hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Truck" size={24} className="text-secondary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Региональный оператор</h3>
                        <p className="text-muted-foreground">За вывоз ТКО</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Администрация района/горячая линия</h3>
                        <p className="text-muted-foreground">Если не помогает выше</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Icon name="FileText" size={36} className="text-secondary" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-1">Шаг 2</Badge>
                <h2 className="text-3xl font-bold text-foreground">Описание проблемы</h2>
              </div>
              
              <Card className="bg-gradient-to-br from-white to-accent/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Адрес и точное место контейнеров</h4>
                      <p className="text-sm text-muted-foreground">Укажите улицу, дом, номер подъезда или двора</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">В чём проблема</h4>
                      <p className="text-sm text-muted-foreground">Не вывозят, переполнены, нет контейнеров и т.д.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Сколько времени это длится</h4>
                      <p className="text-sm text-muted-foreground">Укажите дату начала проблемы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name="Camera" size={36} className="text-primary" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-1">Шаг 3</Badge>
                <h2 className="text-3xl font-bold text-foreground">Приложите доказательства</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Image" size={32} className="text-primary mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Фото/видео переполненных баков</h3>
                    <p className="text-sm text-muted-foreground">Сделайте несколько ракурсов для полной картины</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Clock" size={32} className="text-primary mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Дата и время съёмки</h3>
                    <p className="text-sm text-muted-foreground">Зафиксируйте, когда именно сделали фото</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow md:col-span-2">
                  <CardContent className="p-6">
                    <Icon name="Archive" size={32} className="text-primary mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Ответы на прошлые обращения</h3>
                    <p className="text-sm text-muted-foreground">Если уже обращались ранее, приложите предыдущую переписку</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Icon name="ClipboardCheck" size={36} className="text-secondary" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-1">Шаг 4</Badge>
                <h2 className="text-3xl font-bold text-foreground">Фиксируйте каждый шаг</h2>
              </div>
              
              <Card className="bg-gradient-to-br from-white to-secondary/10">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Сохраняйте номер заявки или входящий номер</h4>
                      <p className="text-sm text-muted-foreground">Это ваше главное доказательство обращения</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Записывайте дату и кто принял обращение</h4>
                      <p className="text-sm text-muted-foreground">ФИО сотрудника, время звонка или отправки</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Если сроки нарушены — жалоба уровнем выше</h4>
                      <p className="text-sm text-muted-foreground">Обращайтесь в надзорные органы с копиями предыдущих обращений</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name="MessageCircle" size={36} className="text-primary" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-1">Шаг 5</Badge>
                <h2 className="text-3xl font-bold text-foreground">Пишите спокойно, но по делу</h2>
              </div>
              
              <Card className="bg-gradient-to-br from-primary/5 to-accent/20 border-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <Icon name="Lightbulb" size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">
                    Факты + фото работают лучше, чем эмоции
                  </p>
                  <p className="text-muted-foreground">
                    Чем точнее жалоба, тем выше шанс, что мусор начнут вывозить вовремя
                  </p>
                </CardContent>
              </Card>
            </div>
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
