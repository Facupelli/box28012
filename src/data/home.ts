import BoxImage from "../assets/images/box.webp";
import CrosstrainingImage from "../assets/images/crosstraining.webp";
import AlbertImage from "../assets/images/team/albert.webp";
import LorenaImage from "../assets/images/team/lorena.webp";
import PartnerWODImage from "../assets/images/partner-wod.webp";
import RemerasImage from "../assets/images/remeras.webp";

const businessInfo = {
  name: "Box 28012",
  city: "Madrid centro",
  cityShort: "Madrid",
  addressLine1: "Calle de los Cañizares 3, Local 1",
  addressLine2: "Madrid, España",
  postalCode: "28012",
  fullAddress: "Calle de los Cañizares 3, Local 1, Madrid, España 28012",
  phone: "+34 604 862 429",
  phoneHref: "tel:+34604862429",
  email: "info@box28012.es",
  emailHref: "mailto:info@box28012.es",
  instagramUrl: "https://www.instagram.com/box28012.madrid/",
  instagramHandle: "@box28012.madrid",
};

const services = [
  {
    title: "Entrenamiento en grupos reducidos",
    image: CrosstrainingImage,
    alt: "Zona de entrenamiento preparada para una sesión en grupo reducido",
    description:
      "Entrena con otras personas sin perder la atención individual. Grupos de máximo 8–10 personas para cuidar tu técnica, progresión y seguridad.",
  },
  {
    title: "Entrenamiento personal",
    image: PartnerWODImage,
    alt: "Zona de entrenamiento preparada para una sesión personal",
    description:
      "Un entrenamiento completamente adaptado a ti, tus objetivos y tu punto de partida, con seguimiento cercano y atención individual durante toda la sesión.",
  },
];

export type ScheduleDay =
  "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

export type ScheduleActivity = "cross-training" | "ironbody" | "partner-wod";

export type ScheduleSession = {
  day: ScheduleDay;
  time: string;
  activity: ScheduleActivity;
};

const scheduleDays: Array<{
  id: ScheduleDay;
  label: string;
  shortLabel: string;
}> = [
  { id: "monday", label: "Lunes", shortLabel: "LUN" },
  { id: "tuesday", label: "Martes", shortLabel: "MAR" },
  { id: "wednesday", label: "Miércoles", shortLabel: "MIÉ" },
  { id: "thursday", label: "Jueves", shortLabel: "JUE" },
  { id: "friday", label: "Viernes", shortLabel: "VIE" },
  { id: "saturday", label: "Sábado", shortLabel: "SÁB" },
];

const scheduleActivities: Record<ScheduleActivity, { label: string }> = {
  "cross-training": { label: "Cross Training" },
  ironbody: { label: "IronBody" },
  "partner-wod": { label: "Partner WOD" },
};

const scheduleTimes = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

const scheduleSessions: ScheduleSession[] = [
  { day: "monday", time: "07:00", activity: "cross-training" },
  { day: "monday", time: "08:00", activity: "cross-training" },
  { day: "monday", time: "09:00", activity: "ironbody" },
  { day: "monday", time: "14:00", activity: "ironbody" },
  { day: "monday", time: "15:00", activity: "cross-training" },
  { day: "monday", time: "17:00", activity: "cross-training" },
  { day: "monday", time: "18:00", activity: "ironbody" },
  { day: "monday", time: "19:00", activity: "cross-training" },
  { day: "monday", time: "20:00", activity: "cross-training" },
  { day: "tuesday", time: "08:00", activity: "ironbody" },
  { day: "tuesday", time: "09:00", activity: "cross-training" },
  { day: "tuesday", time: "10:00", activity: "cross-training" },
  { day: "tuesday", time: "14:00", activity: "cross-training" },
  { day: "tuesday", time: "15:00", activity: "ironbody" },
  { day: "tuesday", time: "17:00", activity: "ironbody" },
  { day: "tuesday", time: "18:00", activity: "cross-training" },
  { day: "tuesday", time: "19:00", activity: "ironbody" },
  { day: "tuesday", time: "20:00", activity: "cross-training" },
  { day: "wednesday", time: "07:00", activity: "ironbody" },
  { day: "wednesday", time: "08:00", activity: "cross-training" },
  { day: "wednesday", time: "09:00", activity: "cross-training" },
  { day: "wednesday", time: "10:00", activity: "ironbody" },
  { day: "wednesday", time: "14:00", activity: "ironbody" },
  { day: "wednesday", time: "15:00", activity: "ironbody" },
  { day: "wednesday", time: "17:00", activity: "cross-training" },
  { day: "wednesday", time: "18:00", activity: "ironbody" },
  { day: "wednesday", time: "19:00", activity: "cross-training" },
  { day: "wednesday", time: "20:00", activity: "cross-training" },
  { day: "thursday", time: "08:00", activity: "cross-training" },
  { day: "thursday", time: "09:00", activity: "ironbody" },
  { day: "thursday", time: "10:00", activity: "cross-training" },
  { day: "thursday", time: "14:00", activity: "cross-training" },
  { day: "thursday", time: "15:00", activity: "ironbody" },
  { day: "thursday", time: "17:00", activity: "ironbody" },
  { day: "thursday", time: "18:00", activity: "cross-training" },
  { day: "thursday", time: "19:00", activity: "ironbody" },
  { day: "thursday", time: "20:00", activity: "cross-training" },
  { day: "friday", time: "07:00", activity: "cross-training" },
  { day: "friday", time: "08:00", activity: "ironbody" },
  { day: "friday", time: "09:00", activity: "cross-training" },
  { day: "friday", time: "14:00", activity: "ironbody" },
  { day: "friday", time: "15:00", activity: "cross-training" },
  { day: "friday", time: "17:00", activity: "cross-training" },
  { day: "friday", time: "18:00", activity: "ironbody" },
  { day: "saturday", time: "10:00", activity: "partner-wod" },
  { day: "saturday", time: "11:00", activity: "partner-wod" },
  { day: "saturday", time: "12:00", activity: "partner-wod" },
];

export type PricingPeriod = "monthly" | "quarterly";

export type PricingPlan = {
  id: "fit" | "pro" | "elite" | "unlimited";
  name: string;
  availability: string;
  periods: Record<
    PricingPeriod,
    {
      price: number;
      classes: number | "unlimited";
    }
  >;
};

const pricingPeriods: Array<{ id: PricingPeriod; label: string }> = [
  { id: "monthly", label: "Mensual" },
  { id: "quarterly", label: "Trimestral" },
];

const pricingPlans: PricingPlan[] = [
  {
    id: "fit",
    name: "FIT",
    availability: "Todo el día",
    periods: {
      monthly: { price: 70, classes: 4 },
      quarterly: { price: 230, classes: 12 },
    },
  },
  {
    id: "pro",
    name: "PRO",
    availability: "Todo el día",
    periods: {
      monthly: { price: 100, classes: 8 },
      quarterly: { price: 260, classes: 24 },
    },
  },
  {
    id: "elite",
    name: "ELITE",
    availability: "Todo el día",
    periods: {
      monthly: { price: 120, classes: 12 },
      quarterly: { price: 310, classes: 36 },
    },
  },
  {
    id: "unlimited",
    name: "UNLIMITED",
    availability: "Todo el día",
    periods: {
      monthly: { price: 150, classes: "unlimited" },
      quarterly: { price: 400, classes: "unlimited" },
    },
  },
];

const aboutSections = [
  {
    image: BoxImage,
    alt: "Zona de entrenamiento con barra en Box 28012",
    paragraphs: [
      "BOX 28012 nació en noviembre de 2019, aunque la idea llevaba tiempo tomando forma.",
      "Después de años como entrenadora personal y de entrenar en grandes superficies y boxes con grupos de 20 o 30 personas, Lorena empezó a preguntarse: ¿era posible entrenar en grupo sin perder la atención individual?",
      "Entrenar en grupo no significa ser uno más, sino compartir la experiencia con otros mientras recibes una atención cercana y profesional.",
    ],
  },
  {
    image: RemerasImage,
    alt: "Camisetas negras de Box 28012 colgadas en un perchero",
    paragraphs: [
      "Desde 2019, el box ha crecido y evolucionado. El paso de Detailors Functional Studio a BOX 28012 representa también una nueva etapa.",
      "28012 es el código postal de Lavapiés, el barrio donde estamos y donde hemos construido nuestra comunidad.",
      "Somos un box de barrio. Nuestro objetivo nunca ha sido tener al mayor número posible de personas entrenando, sino que quienes entrenan aquí entrenen bien y vean progresos.",
    ],
  },
];

const team = [
  {
    name: "Lorena",
    role: "Fundadora · Coach",
    credentials: [
      "Graduada en Ciencias de la Actividad Física y del Deporte (CAFYD)",
      "CrossFit Level 2",
    ],
    description:
      "Lorena es la fundadora y responsable de Box 28012. Desde 2019 trabaja en el desarrollo de un modelo de entrenamiento basado en grupos reducidos, atención cercana y calidad en el movimiento, con el objetivo de que cada persona pueda entrenar de forma segura y progresar independientemente de su nivel.",
    image: LorenaImage,
    alt: "Lorena, fundadora y coach de Box 28012",
  },
  {
    name: "Albert",
    role: "Coach",
    credentials: [],
    description:
      "Albert forma parte del equipo de Box 28012 y acompaña a las personas durante sus entrenamientos, ayudándolas a trabajar con atención, constancia y una progresión adaptada a su nivel y objetivos.",
    image: AlbertImage,
    alt: "Albert, coach de Box 28012",
  },
];

export function getHomeData() {
  const contactItems = [
    {
      icon: "map-pin",
      title: "Dirección",
      lines: [businessInfo.addressLine1, businessInfo.addressLine2],
    },
    {
      icon: "phone",
      title: "Teléfono",
      href: businessInfo.phoneHref,
      text: businessInfo.phone,
    },
    {
      icon: "envelope",
      title: "Escríbenos",
      href: businessInfo.emailHref,
      text: businessInfo.email,
    },
    {
      icon: "instagram",
      title: "Instagram",
      href: businessInfo.instagramUrl,
      text: businessInfo.instagramHandle,
      external: true,
    },
  ];

  return {
    services,
    aboutSections,
    team,
    businessInfo,
    contactItems,
    pricingPeriods,
    pricingPlans,
    scheduleActivities,
    scheduleDays,
    scheduleSessions,
    scheduleTimes,
  };
}

export function getBusinessStructuredData(siteUrl: URL) {
  const businessUrl = new URL("/", siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": new URL("/#business", siteUrl).href,
    name: businessInfo.name,
    url: businessUrl.href,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.addressLine1,
      addressLocality: businessInfo.cityShort,
      postalCode: businessInfo.postalCode,
      addressCountry: "ES",
    },
    sameAs: [businessInfo.instagramUrl],
  };
}
