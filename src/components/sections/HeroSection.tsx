import ShinyButton from "@/components/ShinyButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('/lovable-uploads/5b858674-cf70-49e4-8a6f-49d95e787f76.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70" />
      <div className="container relative z-10 px-4 py-32 text-center text-white">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Descubra Como Orar Como Jesus e Transforme Sua Vida Espiritual
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Receba orações exclusivas para se conectar profundamente com Deus
        </p>
        <ShinyButton
          variant="neon"
          onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
        >
          Comece Sua Jornada de Oração
        </ShinyButton>
      </div>
    </section>
  );
};

export default HeroSection;