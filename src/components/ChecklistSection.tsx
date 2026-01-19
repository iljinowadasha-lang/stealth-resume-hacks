import { useState } from "react";
import { Check, Square, CheckSquare } from "lucide-react";
import memeSuccess from "@/assets/meme-success.png";

interface ChecklistItem {
  id: string;
  text: string;
  category: string;
}

const ChecklistSection = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const checklistItems: ChecklistItem[] = [
    // Контент
    { id: "1", text: "Professional Summary с ключевыми словами", category: "content" },
    { id: "2", text: "Обратно-хронологический порядок опыта", category: "content" },
    { id: "3", text: "Достижения с цифрами и метриками", category: "content" },
    { id: "4", text: "Указаны методологии и инструменты", category: "content" },
    { id: "5", text: "Управленческие и технические навыки", category: "content" },
    // Финальные проверки
    { id: "6", text: "Нет опечаток и грамматических ошибок", category: "final" },
    { id: "7", text: "Минимум 1–2 страницы", category: "final" },
    { id: "8", text: "Адаптировано под конкретную вакансию", category: "final" },
  ];

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const progress = (checkedItems.size / checklistItems.length) * 100;
  const isComplete = checkedItems.size === checklistItems.length;

  const categoryLabels: Record<string, string> = {
    content: "✍️ Контент",
    final: "✅ Финальные проверки",
  };

  const groupedItems = checklistItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ChecklistItem[]>);

  return (
    <section id="checklist" className="pm-section">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="pm-badge mb-4">📄 Чек-лист</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Чек-лист для резюме
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Пройдись по списку и убедись, что ничего не забыл. 
            Можешь отмечать пункты прямо здесь!
          </p>
        </div>

        {/* Progress bar */}
        <div className="pm-card mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-foreground">Прогресс</span>
            <span className="text-primary font-bold">{checkedItems.size}/{checklistItems.length}</span>
          </div>
          <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full pm-hero-gradient transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="pm-card">
                <h3 className="font-display font-bold text-lg mb-4">
                  {categoryLabels[category]}
                </h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className="pm-checklist-item w-full text-left"
                    >
                      {checkedItems.has(item.id) ? (
                        <CheckSquare className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={checkedItems.has(item.id) ? "text-muted-foreground line-through" : "text-foreground"}>
                        {item.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-8">
            {isComplete ? (
              <div className="pm-card text-center">
                <div className="pm-meme mb-4">
                  <img src={memeSuccess} alt="Успех" className="w-full" />
                </div>
                <div className="flex items-center justify-center gap-2 text-success font-bold text-xl mb-2">
                  <Check className="w-6 h-6" /> 🎉
                  Резюме готово к отправке!
                </div>
                <p className="text-muted-foreground">
                  Все пункты отмечены. Удачи! 🚀
                </p>
              </div>
            ) : (
              <div className="pm-card">
                <div className="pm-meme mb-4">
                  <img src={memeSuccess} alt="Успех" className="w-full opacity-50" />
                </div>
                <p className="text-center text-muted-foreground">
                  Отметь все пункты, чтобы увидеть результат 😺
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
