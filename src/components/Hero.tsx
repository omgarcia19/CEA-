import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/75 to-primary/40" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-5 py-2 rounded-full mb-8 animate-fade-in-down">
            <span className="text-2xl">🦉</span>
            <span className="text-primary-foreground/90 font-medium text-sm">
              Educación de Calidad desde 2010
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
            Centro de Enseñanza
            <span className="block text-primary mt-2">y Asesorías</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 stagger-2">
            "Porque la educación nunca debe de ser aburrida"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 stagger-3">
            <Button className="btn-hero group">
              Solicitar Asesoría
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="btn-hero-outline group">
              <BookOpen className="mr-2 w-5 h-5" />
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up opacity-0 stagger-4">
            {[
              { number: '500+', label: 'Estudiantes' },
              { number: '15+', label: 'Años de Experiencia' },
              { number: '98%', label: 'Satisfacción' },
              { number: '50+', label: 'Cursos Impartidos' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-4 border border-primary-foreground/10"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
