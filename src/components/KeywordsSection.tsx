import memeKeywords from "@/assets/meme-keywords.png";
import { Badge } from "@/components/ui/badge";

const KeywordsSection = () => {
  const methodologies = ["Agile", "Scrum", "Kanban", "Waterfall", "Lean", "Six Sigma", "SAFe", "PMBOK"];
  const tools = ["Jira", "Confluence", "Trello", "Asana", "Monday.com", "Miro", "Notion", "MS Project", "Excel", "Power BI"];
  const managementSkills = [
    "Управление проектами",
    "Ведение бюджета",
    "Управление рисками",
    "Взаимодействие со стейкхолдерами",
    "Планирование ресурсов",
    "Контроль изменений",
    "Планирование спринтов",
    "Разработка дорожной карты",
    "Руководство командой",
    "Координация кросс-функциональных команд",
  ];
  const technicalSkills = [
    "Управление продуктом",
    "Подготовка отчётности и KPI",
    "Оптимизация процессов",
    "Time-to-market",
    "Управление подрядчиками",
    "Agile Coaching",
    "Проведение ретроспектив",
    "Проведение презентаций",
    "Работа с OKR и SMART-целями",
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="pm-badge mb-4">✅ Ключевые навыки</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Ключевые навыки и компетенции для PM на HH
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Эти слова должны быть в твоём резюме. ATS буквально ищет их по списку.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="pm-card">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span> Методологии управления проектами
              </h3>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm py-1.5 px-3">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pm-card">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">🛠️</span> Инструменты
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm py-1.5 px-3">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pm-card">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">💼</span> Управленческие навыки
              </h3>
              <div className="flex flex-wrap gap-2">
                {managementSkills.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm py-1.5 px-3">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pm-card">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Технические и дополнительные навыки
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm py-1.5 px-3">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky top-8">
            <div className="pm-meme">
              <img src={memeKeywords} alt="Мем про ключевые слова" className="w-full" />
              <div className="bg-card p-3 text-center text-sm text-muted-foreground">
                Не откажут по ключевым словам, если скопировать их из вакансии
              </div>
            </div>
            
            <div className="pm-tip mt-6">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Лайфхак:</strong> Скопируй описание вакансии, 
                найди повторяющиеся термины — это твои обязательные ключевые слова.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordsSection;
