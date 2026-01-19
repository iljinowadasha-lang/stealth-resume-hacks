import { FileText, Target, Clock } from "lucide-react";

const TipsSection = () => {
  const tips = [
    {
      icon: FileText,
      title: "Professional Summary вместо Objective",
      description: "3–4 строки о опыте и ключевых достижениях, включающие ключевые слова вакансии.",
      example: "PM с 6+ лет опыта в IT и телеком. Запустил 15 проектов с общей выручкой $5M. Эксперт в Agile, Scrum и Lean. Управлял командами до 25 человек.",
    },
    {
      icon: Target,
      title: "Адаптируйте резюме под вакансию",
      description: "Минимум 20% текста должно соответствовать конкретным требованиям: бюджеты, методологии, инструменты.",
      example: "Если в вакансии упор на бюджеты — подсветите свой опыт управления бюджетами.",
    },
    {
      icon: Clock,
      title: "Аккуратная формулировка опыта",
      description: "Разница в формулировках увеличивает шанс пройти фильтр и произвести впечатление.",
      example: "Разница между «участвовал в проекте» и «координировал направление» огромна.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="pm-badge mb-4">💡 Советы по контенту</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Советы по контенту
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="pm-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <tip.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{tip.description}</p>
                  <div className="bg-secondary/50 rounded-lg p-3 text-sm">
                    <span className="text-primary font-medium">Пример: </span>
                    <span className="text-muted-foreground">{tip.example}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
