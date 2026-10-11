/**
 * Products & Moods Data for Idhu Enna Padam?
 */

export const productFormats = [
  {
    id: "classic",
    name: "Classic Polaroid",
    price: "₹30",
    priceUnit: "each",
    frameSize: "88 × 107 mm",
    photoArea: "79 × 79 mm",
    finish: "Glossy or Matte",
    image: "/assets/format-classic.jpg",
    badge: "Most Loved",
    rotation: -1.5,
    tapeColor: "peach",
    description: "The quintessential retro instant frame. Wide border at the bottom for handwritten dates, quotes, and cinema dialogues.",
    whatsappMessage: "Hi Ramya! I'd like to enquire about Classic Polaroids at ₹30 each. Please share the ordering details."
  },
  {
    id: "mini",
    name: "Mini Polaroid",
    price: "₹25",
    priceUnit: "each",
    frameSize: "54 × 86 mm",
    photoArea: "46 × 62 mm",
    finish: "Glossy or Matte",
    image: "/assets/format-mini.jpg",
    badge: "Pocket Size",
    rotation: 1.8,
    tapeColor: "yellow",
    description: "Credit-card sized cinema treasures. Designed to tuck into transparent phone cases, wallets, journal covers, and gift tags.",
    whatsappMessage: "Hi Ramya! I'd like to enquire about Mini Polaroids at ₹25 each. Please share the ordering details."
  },
  {
    id: "fanCard",
    name: "Fan Card",
    price: "₹35",
    priceUnit: "each",
    frameSize: "55 × 85 mm",
    feature: "Rounded corners",
    finish: "Glossy or Matte",
    image: "/assets/format-fancard.jpg",
    badge: "Collector's Pick",
    rotation: -1,
    tapeColor: "cream",
    description: "Premium edge-to-edge cinema tribute card with rounded corners. Thick, durable cardstock celebrating Kollywood's unforgettable moments.",
    whatsappMessage: "Hi Ramya! I'd like to enquire about Fan Cards at ₹35 each. Please share the ordering details."
  }
];

export const cinemaMoods = [
  {
    id: "classic-vibe",
    title: "Classic Vibe",
    description: "The heroes and scenes everyone knows by heart.",
    icon: "🏍️",
    badge: "Iconic",
    rotation: -2,
    image: "/assets/scene-rajini-bullet.jpg",
    aspect: "portrait"
  },
  {
    id: "love-kollywood",
    title: "Love + Kollywood",
    description: "Couples, songs and the best romance moments.",
    icon: "♡",
    badge: "Romance",
    rotation: 1.5,
    image: "/assets/scene-rajini-headphones.jpg",
    aspect: "portrait"
  },
  {
    id: "meiyazhagan",
    title: "Meiyazhagan (Me & Bro)",
    description: "Unconditional nostalgia, cycle rides & heartfelt cinema moments.",
    icon: "🚲",
    badge: "Brotherhood",
    rotation: -1.8,
    image: "/assets/scene-meiyazhagan.jpg",
    aspect: "portrait"
  },
  {
    id: "romance-retake",
    title: "Romance Retake?",
    description: "The scenes and songs you rewind again and again.",
    icon: "🎧",
    badge: "Rewatchable",
    rotation: 2.2,
    image: "/assets/scene-dhanush-music.jpg",
    aspect: "square"
  },
  {
    id: "ani-minnal",
    title: "ANI (Minnal For A Reason)",
    description: "High-octane concert energy, Hukum beats & rockstar frames.",
    icon: "⚡",
    badge: "Rockstar",
    rotation: -1.2,
    image: "/assets/scene-ani.jpg",
    aspect: "portrait"
  },
  {
    id: "perfect-shot",
    title: "Perfect Shot, Don't Touch!",
    description: "Cinematic frames that deserve a wall.",
    icon: "🎬",
    badge: "Masterpiece",
    rotation: 1.6,
    image: "/assets/polaroid-collection.jpg",
    aspect: "portrait"
  }
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "PICK YOUR FAVOURITE",
    description: "Explore our collection and choose the Polaroid format or scene theme you love.",
    tag: "Browse Formats",
    icon: "film"
  },
  {
    step: "02",
    title: "MESSAGE US",
    description: "Click Order on WhatsApp and tell us which prints you'd like.",
    tag: "Click to Chat",
    icon: "chat"
  },
  {
    step: "03",
    title: "WE CONFIRM",
    description: "We'll confirm availability, final pricing, payment and delivery details directly with you.",
    tag: "Made with Love",
    icon: "heart"
  }
];

export const faqList = [
  {
    question: "What Polaroid formats are available?",
    answer: "We offer three distinct formats: Classic Polaroid (88 × 107 mm at ₹30 each), Mini Polaroid (54 × 86 mm at ₹25 each), and Fan Cards with rounded corners (55 × 85 mm at ₹35 each). All formats are available in your choice of Glossy or Matte finish."
  },
  {
    question: "Can I request a particular film scene?",
    answer: "Yes! If you have a specific scene, iconic entry, romantic rain frame, or dialogue you love, message Ramya & Adellinde directly on WhatsApp. We will confirm scene availability and print details for you."
  },
  {
    question: "Can I order multiple prints?",
    answer: "Certainly! You can order any mix of Classic Polaroids, Minis, and Fan Cards across different cinema themes. Simply share the list of scenes or themes you want via WhatsApp."
  },
  {
    question: "Do you accept bulk orders?",
    answer: "Yes, we accept bulk orders for college celebrations, party favours, weddings, corporate giveaways, or fan club events. Message us directly on WhatsApp with your required quantity for confirmation and details."
  },
  {
    question: "How do I place an order?",
    answer: "Browse our formats and moods on this website, tap the 'Order on WhatsApp' button on any card, and send us your enquiry. Ramya & Adellinde will personally chat with you to finalise your selection."
  },
  {
    question: "How do payment and delivery work?",
    answer: "Once we confirm the availability of your chosen scenes, we share straightforward payment details (UPI) and arrange packaging & delivery directly with you on WhatsApp."
  }
];
