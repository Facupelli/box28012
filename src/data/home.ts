import CrosstrainingImage from "../assets/images/box/servicio_grupos-pro-dark.jpg";
import BoxStreetImage from "../assets/images/box/historia_barrio-pro-dark.png";
import BoxAccentImage from "../assets/images/box/historia_interior-pro-dark.jpg";
import AlbertImage from "../assets/images/team/albert.webp";
import LorenaImage from "../assets/images/team/lorena.webp";
import PartnerWODImage from "../assets/images/box/servicio_personal-pro-dark.jpg";

const businessInfo = {
  name: "Box 28012",
  city: "Madrid centro",
  cityShort: "Madrid",
  addressLine1: "C/ Cañizares, 3",
  addressLine2: "28012 Madrid",
  postalCode: "28012",
  fullAddress: "C/ Cañizares, 3, 28012 Madrid, España",
  phone: "+34 604 862 429",
  phoneHref: "tel:+34604862429",
  instagramUrl: "https://www.instagram.com/box28012.madrid/",
  instagramHandle: "@box28012.madrid",
};

const services = {
  title: "SERVICIOS",
  items: [
    {
      id: "personal",
      title: "Entrenamiento Personal",
      description:
        "Entrenamiento individual, adaptado a tus objetivos y necesidades.",
      claim: "Más atención, más calidad, mejor entrenamiento.",
      image: PartnerWODImage,
      alt: "Zona de entrenamiento preparada para una sesión personal",
    },
    {
      id: "grupo-reducido",
      title: "Entrenamiento en Grupo Reducido",
      claim: "Entrena en grupo, progresa a tu ritmo.",
      description:
        "Entrena en grupo de máximo 8 - 10 personas, con atención cercana y dinámicas de entrenamiento adaptadas a tu nivel.",
      image: CrosstrainingImage,
      alt: "Zona de entrenamiento preparada para una sesión en grupo reducido",
    },
  ],
};

const activities = {
  title: "Actividades",
  items: [
    {
      id: "cross-training",
      title: "CrossTraining",
      claim: "Fuerza. Skills. Acondicionamiento",
      description:
        "Entrenamiento funcional de alta intensidad, donde trabajarás todas tus cualidades físicas. Programación estructurada para que mejores tu fuerza, resistencia, velocidad, agilidad y coordinación de forma consistente y segura.",
    },
    {
      id: "iron-body",
      title: "IronBody",
      claim: "Fuerza. Técnica. Progresión",
      description:
        "Entrenamientos desarrollados para mejorar la fuerza, la higiene postural y optimizar la calidad del movimiento. Planificación estructurada para reducir el riesgo de lesiones y construir una base física sólida.",
    },
    {
      id: "run-x",
      title: "RunX",
      claim: "Corre. Mejora. Progresa.",
      description:
        "Entrenamiento de carrera y resistencia para mejorar la técnica, ganar fondo y desarrollar tu capacidad cardiovascular. Adaptado a todos los niveles, para disfrutar de cada kilómetro y progresar de forma sostenible.",
    },
  ],
};

const schedule = {
  title: "HORARIOS",
  headline: "Encuentra tu momento para entrenar.",
  description:
    "Consulta nuestros horarios semanales y elige el momento que mejor se adapte a tu rutina.",
};

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

const pricing = {
  title: "TARIFAS",
  headline: "Entrena a tu ritmo. Elige tu plan.",
  smallGroup: {
    monthly: {
      title: "TARIFAS MENSUALES EGR",
      description: "30 días para entrenar a tu ritmo. Sin permanencia.",
      plans: [
        { id: "fit", name: "FIT", sessions: 4, price: 70 },
        { id: "pro", name: "PRO", sessions: 8, price: 100 },
        { id: "elite", name: "ELITE", sessions: 12, price: 120 },
        {
          id: "unlimited",
          name: "UNLIMITED",
          sessions: "unlimited",
          price: 150,
        },
      ],
    },
    quarterly: {
      title: "TARIFAS TRIMESTRALES EGR",
      description: "90 días para entrenar y progresar.",
      plans: [
        { id: "fit", name: "FIT", sessions: 18, price: 230 },
        { id: "pro", name: "PRO", sessions: 24, price: 260 },
        { id: "elite", name: "ELITE", sessions: 36, price: 310 },
        {
          id: "unlimited",
          name: "UNLIMITED",
          sessions: "unlimited",
          durationDays: 90,
          price: 400,
        },
      ],
    },
    dropIn: {
      title: "DROP-IN EGR",
      headline: "¿Quieres entrenar un día puntual?",
      description:
        "Accede a una sesión de entrenamiento sin necesidad de contratar un bono mensual o trimestral.",
      name: "DROP-IN",
      price: 22,
      unit: "sesión",
    },
  },
  personal: {
    title: "ENTRENAMIENTO PERSONAL",
    description:
      "Entrenamiento individual. Planificación adaptada a tus objetivos y necesidades.",
    plans: [
      { name: "Sesión EP", sessions: 1, price: 55 },
      { name: "Bono EP 4 sesiones", sessions: 4, price: 190 },
      { name: "Bono EP 8 sesiones", sessions: 8, price: 290 },
      { name: "Bono EP 12 sesiones", sessions: 12, price: 390 },
    ],
  },
};

const contact = {
  title: "CONTACTO",
  headline: "Estamos aquí para ayudarte.",
  description:
    "¿Tienes dudas sobre nuestras actividades, tarifas o no sabes qué entrenamiento encaja mejor contigo? Escríbenos y te ayudaremos a encontrar la opción que mejor se adapte a tus objetivos.",
  secondaryText: "Ven a conocernos y reserva tu primera sesión gratuita.",
  locationLabel: "BOX 28012 · LAVAPIÉS, MADRID",
  address: "C/ Cañizares, 3 · 28012 Madrid",
  whatsapp: businessInfo.phone,
  instagram: businessInfo.instagramHandle,
  cta: "RESERVA TU PRIMERA SESIÓN GRATIS",
};

const aboutStory = {
  title: "BOX 28012 · NUESTRA HISTORIA",
  paragraphs: [
    "Box 28012 nació en noviembre de 2019 con una idea clara: entrenar en grupo sin renunciar a la atención individual.",
    "Desde entonces, hemos crecido junto al barrio de Lavapiés, apostando por los grupos reducidos, la calidad del entrenamiento y la cercanía.",
    "Hoy seguimos evolucionando con una nueva identidad, pero con la misma filosofía: entrenar bien, progresar y construir comunidad.",
    "Porque 28012 no es solo un código postal. Es el barrio al que pertenecemos.",
  ],
  image: BoxStreetImage,
  alt: "Fachada de Box 28012 en Lavapiés",
  accentImage: BoxAccentImage,
  accentAlt: "Interior de Box 28012",
};

const team = {
  title: "EQUIPO TÉCNICO",
  headline: "Las personas detrás de Box 28012.",
  members: [
    {
      id: "lorena",
      name: "LORENA",
      role: "OWNER",
      description: [
        "Graduada en Ciencias de la Actividad Física y del Deporte (CAFYD) y CrossFit Level 2, Lorena es la fundadora de Box 28012.",
        "Desde 2019, su trabajo se centra en ofrecer un entrenamiento estructurado de calidad, con atención cercana y grupos reducidos, donde cada persona pueda mejorar, progresar y disfrutar del proceso.",
      ],
      image: LorenaImage,
      alt: "Lorena, fundadora de Box 28012",
    },
    {
      id: "albert",
      name: "ALBERT",
      role: "HEAD COACH",
      description: [
        "Graduado en Enseñanzas Deportivas, con formación en adaptación a necesidades especiales, y en Magisterio de Educación Infantil, Albert es Head Coach en Box 28012.",
        "Desde su incorporación al equipo, destaca por su atención al orden, el cuidado de los pequeños detalles y su compromiso con la inclusión y la adaptación de sus clases a las necesidades de cada persona.",
      ],
      image: AlbertImage,
      alt: "Albert, Head Coach de Box 28012",
    },
  ],
};

export function getHomeData() {
  return {
    services,
    activities,
    schedule,
    pricing,
    contact,
    aboutStory,
    team,
    businessInfo,
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
