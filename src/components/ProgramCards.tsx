import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Regularización Escolar',
    description: 'Apoyo personalizado en matemáticas, español, ciencias y más. Mejora tus calificaciones con nuestros métodos efectivos.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Más Popular',
    badgeColor: 'bg-primary',
  },
  {
    title: 'Preparación para Exámenes',
    description: 'Estrategias y técnicas de estudio para aprobar tus exámenes con excelentes resultados.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: null,
    badgeColor: '',
  },
  {
    title: 'Cursos NOM Certificados',
    description: 'Obtén tu certificación oficial en NOM-154 y NOM-002 con instructores expertos.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Certificado',
    badgeColor: 'bg-green-500',
  },
  {
    title: 'Capacitación Empresarial',
    description: 'Programas de capacitación diseñados para mejorar las competencias de tu equipo.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Empresas',
    badgeColor: 'bg-blue-500',
  },
  {
    title: 'Asesoría de Seguridad e Higiene',
    description: 'Consultoría especializada para cumplir con las normas de seguridad laboral.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Profesional',
    badgeColor: 'bg-amber-500',
  },
  {
    title: 'Apoyo Psicopedagógico',
    description: 'Atención especializada para estudiantes con necesidades de aprendizaje específicas.',
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Especializado',
    badgeColor: 'bg-purple-500',
  },
];

const ProgramCards = () => {
  return (
    <section id="programas" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Programas Educativos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explora Nuestros Programas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra el programa perfecto para alcanzar tus metas educativas y profesionales.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <article key={index} className="card-program">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                {program.badge && (
                  <span className={`absolute top-4 left-4 ${program.badgeColor} text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold`}>
                    {program.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <Button variant="outline" className="w-full group/btn">
                  Más Información
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;
