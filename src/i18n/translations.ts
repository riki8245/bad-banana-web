// Translation content for English and Spanish
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      about: 'About',
      contact: 'Contact',
      brand: 'Bad Banana'
    },
    // Hero section
    hero: {
      title: '🍌 Custom Hand-Painted Pet Portraits',
      subtitle: 'Beautiful wooden art pieces featuring your beloved pets. Each piece is uniquely hand-painted and crafted with love.',
      cta: 'Order Now'
    },
    // Gallery section
    gallery: {
      title: 'Featured Work',
      subtitle: 'Explore our collection of hand-painted pet portraits',
      cardTitle: 'Custom Order',
      cardDesc: 'Beautiful hand-painted pet portrait on wood'
    },
    // About section
    about: {
      title: 'About Our Art',
      description1: 'Each pet portrait is a labor of love, hand-painted on carefully selected wood chunks. We create unique, personalized artwork that celebrates the bond between you and your furry friends.',
      description2: 'Using high-quality paints and techniques, every piece is one-of-a-kind and made specifically for you.',
      cta: 'Order Your Portrait'
    },
    // Contact section
    contact: {
      title: 'Ready to Order?',
      subtitle: 'Follow us on Instagram to see more of our work and place your order!',
      cta: 'Visit Our Instagram'
    },
    // Footer
    footer: {
      brand: 'Bad Banana',
      description: 'Handmade wooden pet portrait art. Each piece is unique and crafted with passion.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      email: 'contact@badbananashop.com',
      instagram: '@badbanana.shop',
      copyright: '© 2024 Bad Banana. All rights reserved. Made with 🍌'
    }
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      gallery: 'Galería',
      about: 'Acerca de',
      contact: 'Contacto',
      brand: 'Bad Banana'
    },
    // Hero section
    hero: {
      title: '🍌 Retratos de Mascotas Personalizados Pintados a Mano',
      subtitle: 'Hermosas piezas de arte en madera que presentan a tus mascotas queridas. Cada pieza es única, pintada a mano y elaborada con amor.',
      cta: 'Ordenar Ahora'
    },
    // Gallery section
    gallery: {
      title: 'Trabajo Destacado',
      subtitle: 'Explora nuestra colección de retratos de mascotas pintados a mano',
      cardTitle: 'Pedido Personalizado',
      cardDesc: 'Hermoso retrato de mascota pintado a mano sobre madera'
    },
    // About section
    about: {
      title: 'Sobre Nuestro Arte',
      description1: 'Cada retrato de mascota es un trabajo de amor, pintado a mano en trozos de madera cuidadosamente seleccionados. Creamos obras de arte únicas y personalizadas que celebran el vínculo entre tú y tus amigos peludos.',
      description2: 'Utilizando pinturas de alta calidad y técnicas profesionales, cada pieza es única y hecha específicamente para ti.',
      cta: 'Ordena Tu Retrato'
    },
    // Contact section
    contact: {
      title: '¿Listo para Ordenar?',
      subtitle: '¡Síguenos en Instagram para ver más de nuestro trabajo y hacer tu pedido!',
      cta: 'Visita Nuestro Instagram'
    },
    // Footer
    footer: {
      brand: 'Bad Banana',
      description: 'Arte de retrato de mascotas hecho a mano en madera. Cada pieza es única y elaborada con pasión.',
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Contacto',
      email: 'contact@badbananashop.com',
      instagram: '@badbanana.shop',
      copyright: '© 2024 Bad Banana. Todos los derechos reservados. Hecho con 🍌'
    }
  }
};

export function getLanguage(): string {
  // This will be called with getLanguage() in Astro files
  // Default to 'en', will be overridden by localStorage on client
  if (typeof window !== 'undefined') {
    return localStorage.getItem('preferred-language') || 'en';
  }
  return 'en';
}

export function t(namespace: string, key: string, lang: string = 'en'): string {
  const keys = namespace.split('.');
  let value: any = translations[lang as keyof typeof translations];
  
  for (const k of keys) {
    value = value[k];
  }
  
  return value[key] || `${namespace}.${key}`;
}
