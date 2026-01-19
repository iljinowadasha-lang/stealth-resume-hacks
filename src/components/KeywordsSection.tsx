import memeKeywords from "@/assets/meme-keywords.png";
import { Badge } from "@/components/ui/badge";

const KeywordsSection = () => {
  const methodologies = ["Agile", "Scrum", "Waterfall", "Kanban", "Lean Six Sigma", "SAFe"];
  const tools = ["Jira", "Asana", "Monday.com", "Confluence", "Miro", "MS Project", "Trello", "Notion"];
  const skills = ["Budget Control", "Risk Mitigation", "Stakeholder Engagement", "Resource Allocation", "Change Control", "Sprint Planning", "Roadmap"];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="pm-badge mb-4">🔍 Keywords</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Ключевые слова для PM
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Эти слова должны быть в твоём резюме. ATS буквально ищет их по списку.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="pm-card">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span> Методологии
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
                <span className="text-2xl">💼</span> Компетенции
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm py-1.5 px-3">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky top-8">
            <div className="pm-meme">
              <img src={memeKeywords} alt="Roll Safe meme" className="w-full" />
              <div className="bg-card p-3 text-center text-sm text-muted-foreground">
                Не откажут по ключевым словам, если скопировать их из вакансии
              </div>
            </div>
            
            <div className="pm-tip mt-6">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Лайфхак:</strong> Скопируй описание вакансии в Word, 
                используй Ctrl+F чтобы найти повторяющиеся термины — это твои must-have keywords.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordsSection;
