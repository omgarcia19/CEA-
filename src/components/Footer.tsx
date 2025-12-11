import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import logoCea from '@/assets/logo-cea 10.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cursos NOM', href: '#cursos-nom' },
    { name: 'Regularización', href: '#programas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Regularización Escolar',
    'Curso Ingreso Preparatoria',
    'NOM-154-SCFI-2005',
    'NOM-002-STPS-2010',
    'Seguridad e Higiene',
    'Capacitación Empresarial',
  ];

  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Decorative Background Logo */}
      <div className="absolute -bottom-20 -right-40 opacity-5 pointer-events-none">
        <img 
          src={logoCea}
          alt="CEA Logo Background"
          className="w-96 h-auto animate-float"
        />
      </div>
      <div className="absolute -top-32 -left-40 opacity-5 pointer-events-none">
        <img 
          src={logoCea}
          alt="CEA Logo Background"
          className="w-80 h-auto animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Main Footer */}
      <div className="section-container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoCea} 
                alt="CEA - Centro de Enseñanza y Asesorías" 
                className="h-16 w-auto bg-secondary-foreground/10 rounded-xl p-1"
              />
              <div>
                <h3 className="font-bold text-xl text-secondary-foreground">CEA</h3>
                <p className="text-xs text-secondary-foreground/70">Centro de Enseñanza</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 italic mb-6 text-lg">
              "Porque la educación nunca debe de ser aburrida"
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-secondary-foreground">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-secondary-foreground">
              Nuestros Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-secondary-foreground/70">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-secondary-foreground">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-secondary-foreground">56 13 77 19 48</p>
                  <p className="text-secondary-foreground">55 96 29 35 82</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-secondary-foreground/70">
                  cea.edu.mx@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-secondary-foreground/70">
                  Ciudad de México, México
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-secondary-foreground/70">
                  <p>Lunes a Viernes</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10 relative z-10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {currentYear} CEA - Centro de Enseñanza y Asesorías. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Aviso de Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
