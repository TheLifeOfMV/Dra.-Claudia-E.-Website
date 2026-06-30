const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '573001234567';

const DEFAULT_APPOINTMENT_MESSAGE =
  'Hola, me gustaría agendar una consulta con la Dra. Claudia Echeverry.';

export function getWhatsAppUrl(message: string = DEFAULT_APPOINTMENT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_APPOINTMENT_URL = getWhatsAppUrl();
