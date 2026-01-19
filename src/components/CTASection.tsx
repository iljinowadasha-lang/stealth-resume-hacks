import { MessageCircle, Send } from "lucide-react";
import pmCatAvatar from "@/assets/pm-cat-avatar.jpg";

const CTASection = () => {
  return (
    <section className="py-20 px-4 pm-hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl" />
              <img 
                src={pmCatAvatar} 
                alt="PM Cat"
                className="relative w-32 h-32 rounded-2xl object-cover border-4 border-white/30"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Нужна помощь с резюме?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl">
              Получи персональную консультацию по твоему резюме. 
              Разберём ошибки, усилим достижения, подготовим к ATS.
            </p>
            <a 
              href="https://t.me/lokalnovserabotaetbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              <Send className="w-5 h-5" />
              Написать в Telegram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Бот: @lokalnovserabotaetbot
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
