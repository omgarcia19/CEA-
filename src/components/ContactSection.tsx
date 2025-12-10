import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ceaImage4 from '@/assets/CEA 4.jpeg';

const ContactSection = () => {
  const { toast } = useToast();
  const [showMap, setShowMap] = useState(false);
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
    <section id="contacto" className="relative py-20 bg-background overflow-hidden">
      {/* Decorative Background Image */}
      <div className="absolute -top-32 -right-32 opacity-5 pointer-events-none">
        <img 
          src={ceaImage4}
          alt="CEA Background"
          className="w-96 h-auto animate-float"
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src={ceaImage4}
              alt="CEA Icon"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
              Contáctanos
            </span>
          </div>
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
                  className={`bg-card rounded-2xl p-6 shadow-medium text-center ${
                    info.title === 'Ubicación' ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''
                  }`}
                  onClick={() => info.title === 'Ubicación' && setShowMap(true)}
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
                  56 13 77 19 48
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

      {/* Map Modal */}
      {showMap && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-4 right-4 z-10 bg-background p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30139.12615009073!2d-99.24339342568356!3d19.221794100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfdb555347bd7%3A0xb9171d360d0e32f1!2sCentro%20de%20Ense%C3%B1anza%20y%20Aprendizaje!5e0!3m2!1ses!2smx!4v1765254761765!5m2!1ses!2smx"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
