import { FileText, Lightbulb, Target, Clock } from "lucide-react";

const TipsSection = () => {
  const tips = [
    {
      icon: FileText,
      title: "Professional Summary > Objective",
      description: "Забудь про \"ищу позицию в развивающейся компании\". Напиши 3-4 строки о твоём опыте и топ-достижениях.",
      example: "PM с 5+ лет опыта в IT. Запустил 12 продуктов с общей выручкой $4M. Эксперт в Agile/Scrum.",
    },
    {
      icon: Target,
      title: "Адаптируй под вакансию",
      description: "Не отправляй одно резюме на все вакансии. Минимум 20% контента должно быть заточено под конкретную позицию.",
      example: "Если в вакансии упор на бюджеты — подсвети свой опыт с бюджетами.",
    },
    {
      icon: Clock,
      title: "6 секунд на первое впечатление",
      description: "Именно столько рекрутер смотрит на резюме. Важное — наверх. Имя, должность, ключевые скиллы.",
      example: "Первая треть страницы решает всё.",
    },
    {
      icon: Lightbulb,
      title: "Не врать, но и не скромничать",
      description: "Если участвовал в проекте — пиши что руководил своей частью. Если помогал — координировал.",
      example: "Разница между \"был в команде\" и \"координировал workstream\" огромна.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="pm-badge mb-4">💡 Советы</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Ещё немного полезного
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="pm-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
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
