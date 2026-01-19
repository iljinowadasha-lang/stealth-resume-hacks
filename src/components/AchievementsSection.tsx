import { ArrowRight, TrendingUp } from "lucide-react";

const AchievementsSection = () => {
  const examples = [
    {
      bad: "Управлял проектом",
      good: "Руководил проектом по разработке мобильного приложения для 50 000 пользователей, увеличив конверсию на 18%",
    },
    {
      bad: "Сократил расходы",
      good: "Оптимизировал процессы команды из 10 человек, снизив операционные расходы на 15% ($100K в год)",
    },
    {
      bad: "Улучшил производительность",
      good: "Сократил time-to-market на 20% через оптимизацию спринтов и планирования задач",
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
            Как правильно описывать достижения
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Забудь про "ответственный" и "коммуникабельный". 
            Вот формула, которая работает.
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
              <h4 className="font-semibold text-foreground mb-2">Советы по цифрам</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Используйте внутренние отчёты, KPI, email-архивы, ревью</li>
                <li>• Если точные данные недоступны — хотя бы проценты или сравнения</li>
                <li>• Укажите масштаб: сколько людей, какой бюджет, сколько проектов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
