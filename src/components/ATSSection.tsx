import memeAts from "@/assets/meme-ats.png";
import memeRejected from "@/assets/meme-rejected.png";
import { AlertTriangle, Zap } from "lucide-react";

const ATSSection = () => {
  return (
    <section className="pm-section">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="pm-badge mb-4">🤖 Почему резюме могут не заметить</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Автофильтры HeadHunter
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Автофильтры HH ищут конкретные слова и форматы. 
            ATS буквально ищет точные совпадения с ключевыми словами вакансии.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="pm-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-display font-bold text-lg">Что мешает пройти фильтр</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                Сложные таблицы и блоки текста
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                Картинки, графики, иконки
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                Синонимы вместо терминов из вакансии
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                Отсутствие ключевых слов
              </li>
            </ul>
          </div>
          
          <div className="pm-meme">
            <img src={memeRejected} alt="Мем про отказ" className="w-full" />
            <div className="bg-card p-3 text-center text-sm text-muted-foreground">
              Резюме без ключевых слов vs автофильтр HH
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="pm-meme order-2 md:order-1">
            <img src={memeAts} alt="Мем про ATS" className="w-full" />
            <div className="bg-card p-3 text-center text-sm text-muted-foreground">
              HR пытается найти твоё резюме среди 500 откликов
            </div>
          </div>
          
          <div className="pm-card order-1 md:order-2">
            <div className="pm-tip">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Важно</h4>
                  <p className="text-muted-foreground">
                    ATS и автофильтры ищут точные совпадения с ключевыми словами вакансии. 
                    Копируй термины прямо из описания позиции!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSSection;
