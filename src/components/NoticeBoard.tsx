import { 
  GraduationCap, 
  BookCheck, 
  School, 
  ShieldCheck, 
  Flame, 
  FileCheck,
  Award,
  Users
} from 'lucide-react';
import ceaImage1 from '@/assets/CEA 1.jpeg';

const services = [
  {
    icon: GraduationCap,
    title: 'Regularización Preescolar a Media Superior',
    description: 'Apoyo académico personalizado para todos los niveles educativos.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: BookCheck,
    title: 'Nivelación a Secundaria',
    description: 'Preparación integral para el ingreso y adaptación al nivel secundaria.',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: School,
    title: 'Curso de Ingreso a Preparatoria',
    description: 'Preparación especializada para exámenes de admisión.',
    color: 'bg-green-500/10 text-green-600',
  },
  {
    icon: ShieldCheck,
    title: 'Asesoría en Seguridad e Higiene',
    description: 'Consultoría profesional para empresas y organizaciones.',
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: Flame,
    title: 'Asesorías en Equipos Contra Incendio',
    description: 'Capacitación en manejo y mantenimiento de equipos de seguridad.',
    color: 'bg-red-500/10 text-red-600',
  },
  {
    icon: FileCheck,
    title: 'Curso NOM-154-SCFI-2005',
    description: 'Certificación oficial para carga y descarga de extintores.',
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: Award,
    title: 'Curso NOM-002-STPS-2010',
    description: 'Capacitación en prevención y protección contra incendios.',
    color: 'bg-indigo-500/10 text-indigo-600',
  },
  {
    icon: Users,
    title: 'Capacitación Empresarial',
    description: 'Programas personalizados para equipos de trabajo.',
    color: 'bg-teal-500/10 text-teal-600',
  },
];

const NoticeBoard = () => {
  return (
    <section id="servicios" className="relative py-20 bg-surface-warm overflow-hidden">
      {/* Decorative Background Image */}
      <div className="absolute -bottom-32 -left-32 opacity-5 pointer-events-none">
        <img 
          src={ceaImage1}
          alt="CEA Background"
          className="w-96 h-auto"
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src={ceaImage1}
              alt="CEA Icon"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Qué ofrecemos?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desde apoyo escolar hasta capacitación profesional, tenemos la solución educativa que necesitas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <service.icon size={28} />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
