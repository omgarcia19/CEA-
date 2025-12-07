import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    level: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({ name: '', phone: '', level: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfonos',
      details: ['56 13 77 19 48', '55 96 29 35 82'],
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Ciudad de México', 'Zona Metropolitana'],
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Clock,
      title: 'Horario',
      details: ['Lunes a Viernes', '9:00 AM - 6:00 PM'],
      color: 'bg-green-500/10 text-green-600',
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Listo para Empezar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y te orientamos sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-medium text-center"
                >
                  <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <info.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-center">
              <MessageCircle className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                WhatsApp Business
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Escríbenos directamente y recibe atención inmediata.
              </p>
              <a
                href="https://wa.me/5256137719​48?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary-foreground text-green-600 hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg">
                  <MessageCircle className="mr-2" />
                  Enviar Mensaje
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {['Respuesta en menos de 24h', 'Sin compromiso', 'Asesoría gratuita'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-large">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Solicita Información
            </h3>
            <p className="text-muted-foreground mb-6">
              Completa el formulario y nos pondremos en contacto contigo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="55 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="level" className="block text-sm font-medium text-foreground mb-2">
                  Nivel / Servicio Requerido *
                </label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="preescolar">Preescolar</option>
                  <option value="primaria">Primaria</option>
                  <option value="secundaria">Secundaria</option>
                  <option value="preparatoria">Preparatoria</option>
                  <option value="ingreso-prepa">Curso Ingreso Preparatoria</option>
                  <option value="nom-154">NOM-154-SCFI-2005</option>
                  <option value="nom-002">NOM-002-STPS-2010</option>
                  <option value="seguridad">Seguridad e Higiene</option>
                  <option value="empresarial">Capacitación Empresarial</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos más sobre lo que necesitas..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-6 text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
