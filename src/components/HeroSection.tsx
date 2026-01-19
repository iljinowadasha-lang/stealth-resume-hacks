import pmCatAvatar from "@/assets/pm-cat-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pm-hero-gradient text-primary-foreground py-20 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
              🚀 Гайд для PM в 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              Как составить резюме,
              <br />
              <span className="opacity-90">которое пройдёт фильтр HH и HR</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              Ключевые слова, навыки, чек-лист и формула достижений для проджект-менеджеров на российском рынке.
            </p>
            <a 
              href="#checklist" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              К чек-листу →
            </a>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl" />
              <img 
                src={pmCatAvatar} 
                alt="PM Cat"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-2xl border-4 border-white/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
