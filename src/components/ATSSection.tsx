import memeAts from "@/assets/meme-ats.png";
import memeRejected from "@/assets/meme-rejected.png";
import { AlertTriangle, Check, Zap } from "lucide-react";

const ATSSection = () => {
  return (
    <section className="pm-section">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="pm-badge mb-4">🤖 ATS-фильтры</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Как пройти робота-вахтёра
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            99.7% рекрутеров используют ATS-системы для фильтрации резюме. 
            Вот как не стать жертвой алгоритма.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="pm-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-display font-bold text-lg">Почему отказывают</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                Таблицы, колонки, текстовые блоки
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                Картинки и графика
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                Креативные заголовки разделов
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                Контакты в хедере/футере
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                Синонимы вместо точных терминов
              </li>
            </ul>
          </div>
          
          <div className="pm-meme">
            <img src={memeRejected} alt="This is fine meme" className="w-full" />
            <div className="bg-card p-3 text-center text-sm text-muted-foreground">
              Когда ATS отклонил резюме через 0.3 секунды
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="pm-meme order-2 md:order-1">
            <img src={memeAts} alt="One does not simply meme" className="w-full" />
            <div className="bg-card p-3 text-center text-sm text-muted-foreground">
              Нельзя просто так взять и пройти ATS-фильтр
            </div>
          </div>
          
          <div className="pm-card order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-success" />
              </div>
              <h3 className="font-display font-bold text-lg">Как пройти</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span>Простой <span className="pm-highlight">обратно-хронологический</span> формат</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                Один столбец, стандартные шрифты
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                Точные термины из вакансии
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                Ключевые слова в summary и skills
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                PDF формат (не DOCX!)
              </li>
            </ul>
          </div>
        </div>

        <div className="pm-tip mt-12">
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Pro-tip</h4>
              <p className="text-muted-foreground">
                Копируй термины прямо из вакансии. Если там написано "Project Management" — не пиши "управление проектами". 
                ATS ищет точные совпадения, а не переводы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSSection;
