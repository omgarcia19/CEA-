import { Button } from '@/components/ui/button';
import { CheckCircle, FileCheck, Shield, Clock, Users, Award } from 'lucide-react';
import ceaLogo2 from '@/assets/CEA LOGO 2.png';

const courses = [
  {
    nom: 'NOM-154-SCFI-2005',
    title: 'Equipos Contra Incendio',
    subtitle: 'Mantenimiento y Llenado de Extintores',
    description: 'Certificación oficial para carga y descarga de extintores.',
    features: [
      'Certificación oficial reconocida',
      'Instructores con experiencia',
      'Material didáctico incluido',
      'Prácticas en campo',
    ],
    duration: '40 horas',
    participants: 'Individual o grupal',
    color: 'from-primary to-primary-hover',
    icon: FileCheck,
  },
  {
    nom: 'NOM-002-STPS-2010',
    title: 'Prevención de Incendios',
    subtitle: 'Condiciones de Seguridad',
    description: 'Cumple con las condiciones de seguridad para la prevención y protección contra incendios en los centros de trabajo.',
    features: [
      'Cumplimiento normativo garantizado',
      'Evaluación de riesgos',
      'Plan de emergencia',
      'Capacitación integral',
    ],
    duration: '24 horas',
    participants: 'Empresas',
    color: 'from-amber-500 to-orange-500',
    icon: Shield,
  },
];

const NOMCourses = () => {
  return (
    <section id="cursos-nom" className="relative py-20 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Decorative Background Logos */}
      <div className="absolute -top-40 -right-32 opacity-5 pointer-events-none">
        <img 
          src={ceaLogo2}
          alt="CEA Logo Background"
          className="w-96 h-auto animate-float"
        />
      </div>
      <div className="absolute -bottom-24 -left-32 opacity-5 pointer-events-none">
        <img 
          src={ceaLogo2}
          alt="CEA Logo Background"
          className="w-80 h-auto animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Cursos Certificados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Cursos NOM Oficiales
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Obtén tu certificación oficial y cumple con la normatividad mexicana en seguridad e higiene.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6`}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block bg-secondary-foreground/10 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      {course.nom}
                    </span>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-1">
                      {course.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {course.subtitle}
                    </p>
                  </div>
                  <div className="bg-primary-foreground/20 p-3 rounded-xl">
                    <course.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.participants}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="btn-primary w-full">
                  <Award className="mr-2 w-5 h-5" />
                  Inscribirme Ahora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            ✓ Cursos avalados por autoridades competentes · ✓ Instructores certificados · ✓ Constancias con validez oficial
          </p>
        </div>
      </div>
    </section>
  );
};

export default NOMCourses;
