/**
 * Configuración central de SIVIT.
 * Edita aquí los datos de contacto, precios y enlaces de pago.
 */

export const site = {
  name: 'SIVIT',
  legalName: 'SIVIT',
  tagline: 'Academia de conducción',
  domain: 'https://sivit.com.co',

  phone: '3103511477',
  phoneDisplay: '310 351 1477',
  phoneIntl: '+573103511477',

  whatsapp: '573103511477', // formato internacional sin "+"
  whatsappDefaultMessage: 'Hola, quiero información sobre los cursos de conducción.',

  email: '', // opcional — agrega un correo si lo tienen

  address: {
    line1: 'CRA 19 #20-31',
    line2: 'El Prado, Torre Guerrero',
    // Ciudad / departamento: agrégalos para mejor SEO local
    city: '',
    country: 'Colombia',
  },

  social: {
    instagram: 'https://www.instagram.com/sivit.col',
    instagramHandle: '@sivit.col',
    facebook: 'https://www.facebook.com/sivit.col',
    facebookHandle: 'sivit.col',
  },
}

/** Construye un enlace de WhatsApp con mensaje prellenado. */
export function waLink(message = site.whatsappDefaultMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

/** Enlace de teléfono. */
export const telLink = `tel:${site.phoneIntl}`

/** Navegación principal. */
export const navLinks = [
  { label: 'Cursos', href: '#cursos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: '¿Por qué SIVIT?', href: '#por-que-sivit' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]
