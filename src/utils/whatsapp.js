/**
 * WhatsApp Helper for Idhu Enna Padam?
 * WhatsApp Number: +91 86103 50038
 */

export const WHATSAPP_NUMBER = "918610350038";

export const getWhatsAppUrl = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_MESSAGES = {
  general: "Hi Ramya! I found Idhu Enna Padam? through your website. I'd love to know more about your Polaroids.",
  classic: "Hi Ramya! I'd like to enquire about Classic Polaroids at ₹30 each. Please share the ordering details.",
  mini: "Hi Ramya! I'd like to enquire about Mini Polaroids at ₹25 each. Please share the ordering details.",
  fanCard: "Hi Ramya! I'd like to enquire about Fan Cards at ₹35 each. Please share the ordering details.",
  bulk: "Hi Ramya! I'm planning a bulk order with Idhu Enna Padam? Could you please share more details and availability?",
  themeEnquiry: (themeTitle) =>
    `Hi Ramya! I'm interested in the ${themeTitle} collection. Could you share the available designs and ordering details?`,
  customScene: "Hi Ramya! Can I request a particular film scene for a Polaroid? Please let me know how it works."
};

export const openWhatsApp = (message) => {
  const url = getWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
};
