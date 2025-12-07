import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Madre de Familia',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Mi hijo mejoró sus calificaciones en matemáticas de 6 a 9 en solo tres meses. El equipo de CEA realmente se preocupa por el progreso de cada estudiante.',
    rating: 5,
  },
  {
    name: 'Carlos Ramírez',
    role: 'Estudiante de Preparatoria',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Gracias al curso de ingreso a preparatoria logré entrar a la escuela que quería. Los profesores explican de manera muy clara y te dan confianza.',
    rating: 5,
  },
  {
    name: 'Ana Torres',
    role: 'Gerente de Seguridad Industrial',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Excelente capacitación en NOM-002. Todo nuestro equipo quedó certificado y ahora cumplimos al 100% con la normatividad. Muy profesionales.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-surface-warm">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Estudiantes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Miles de estudiantes y empresas confían en CEA para alcanzar sus metas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-large relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 bg-primary rounded-full p-3 shadow-lg">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
