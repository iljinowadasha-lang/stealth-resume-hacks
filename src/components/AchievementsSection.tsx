import { ArrowRight, TrendingUp } from "lucide-react";

const AchievementsSection = () => {
  const examples = [
    {
      bad: "Управлял командой",
      good: "Руководил кросс-функциональной командой из 12 человек, доставив проект на $2.3M на 3 недели раньше срока",
    },
    {
      bad: "Сократил расходы",
      good: "Снизил операционные расходы на 18% через оптимизацию процессов, экономия $145K в год",
    },
    {
      bad: "Улучшил продуктивность",
      good: "Сократил time-to-market на 22% через оптимизацию Sprint Planning",
    },
    {
      bad: "Работал над проектами",
      good: "Запустил 5 продуктов с NPS > 70 и общей выручкой $1.2M за первый год",
    },
  ];

  return (
    <section className="pm-section">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="pm-badge mb-4">📈 Достижения</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Формула убийственных достижений
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Забудь про "ответственный" и "коммуникабельный". 
            Вот как писать достижения, которые впечатляют.
          </p>
        </div>

        <div className="pm-card mb-8 text-center">
          <div className="inline-flex items-center gap-4 text-xl md:text-2xl font-display font-bold">
            <span className="px-4 py-2 bg-secondary rounded-lg">Действие</span>
            <span className="text-primary">+</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Метрика</span>
            <span className="text-primary">+</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Результат</span>
          </div>
        </div>

        <div className="space-y-4 mb-12">
          {examples.map((example, index) => (
            <div key={index} className="pm-card">
              <div className="grid md:grid-cols-2 gap-4 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <p className="text-muted-foreground line-through">{example.bad}</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 md:hidden">
                    <span className="text-success text-sm">✓</span>
                  </div>
                  <p className="text-foreground font-medium">{example.good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pm-tip">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Где брать цифры, если их нет?</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Посмотри старые перфоманс-ревью</li>
                <li>• Проверь email-архив и отчёты</li>
                <li>• Используй scope-метрики: сколько людей, какой бюджет, сколько проектов</li>
                <li>• Если совсем нет данных — хотя бы проценты и сравнения</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
