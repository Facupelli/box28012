import CrosstrainingImage from "../assets/images/box/box-46.jpg";
import BoxInteriorDetailImage from "../assets/images/box/IMG_9760-2.jpg";
import BoxInteriorWideImage from "../assets/images/box/IMG_9789.jpg";
import LorenaImage from "../assets/images/box/box-21.jpg";
import AlbertImage from "../assets/images/box/box-03.jpg";
import ContactImage from "../assets/images/contact/contact.png";
import PersonalTrainingImage from "../assets/images/box/box-35.jpg";

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
      image: PersonalTrainingImage,
      alt: "Persona levantando una barra durante una sesión de entrenamiento",
    },
    {
      id: "grupo-reducido",
      title: "Entrenamiento en Grupo Reducido",
      claim: "Entrena en grupo, progresa a tu ritmo.",
      description:
        "Entrena en grupo de máximo 8 - 10 personas, con atención cercana y dinámicas de entrenamiento adaptadas a tu nivel.",
      image: CrosstrainingImage,
      alt: "Personas entrenando en Box 28012",
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
        "Entrenamiento funcional de alta intensidad para mejorar fuerza, resistencia, velocidad, agilidad y coordinación, con una programación estructurada y segura.",
    },
    {
      id: "iron-body",
      title: "IronBody",
      claim: "Fuerza. Técnica. Progresión",
      description:
        "Entrenamiento de fuerza para mejorar la postura y la calidad del movimiento, reducir el riesgo de lesiones y construir una base física sólida.",
    },
    {
      id: "run-x",
      title: "RunX",
      claim: "Corre. Mejora. Progresa.",
      description:
        "Entrenamiento de carrera para mejorar la técnica, ganar fondo y disfrutar de cada kilómetro. Para todos los niveles, con una progresión sostenible.",
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

export type ScheduleActivityAppearance = "accent" | "neutral" | "outline";

type ScheduleActivityDefinition = {
  label: string;
  appearance: ScheduleActivityAppearance;
};

const scheduleActivities = {
  "cross-training": { label: "CrossTraining", appearance: "accent" },
  ironbody: { label: "IronBody", appearance: "neutral" },
  "partner-wod": { label: "Partner WOD", appearance: "outline" },
} satisfies Record<string, ScheduleActivityDefinition>;

export type ScheduleActivity = keyof typeof scheduleActivities;

export type ScheduleSession = {
  day: ScheduleDay;
  time: string;
  activity: ScheduleActivity;
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
    title: "Entrenamiento en Grupo Reducido",
    periods: [
      {
        id: "monthly",
        label: "Mensual",
        description: "30 días para entrenar a tu ritmo. Sin permanencia.",
        plans: [
          { id: "fit", name: "FIT", sessionsLabel: "4 clases", price: 70 },
          { id: "pro", name: "PRO", sessionsLabel: "8 clases", price: 100 },
          {
            id: "elite",
            name: "ELITE",
            sessionsLabel: "12 clases",
            price: 120,
          },
          {
            id: "unlimited",
            name: "UNLIMITED",
            sessionsLabel: "Clases ilimitadas",
            price: 150,
          },
        ],
      },
      {
        id: "quarterly",
        label: "Trimestral",
        description: "90 días para entrenar y progresar.",
        plans: [
          { id: "fit", name: "FIT", sessionsLabel: "18 clases", price: 230 },
          { id: "pro", name: "PRO", sessionsLabel: "24 clases", price: 260 },
          {
            id: "elite",
            name: "ELITE",
            sessionsLabel: "36 clases",
            price: 310,
          },
          {
            id: "unlimited",
            name: "UNLIMITED",
            sessionsLabel: "Clases ilimitadas",
            durationDays: 90,
            price: 400,
          },
        ],
      },
    ],
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
  headline: "ESTAMOS AQUÍ PARA AYUDARTE.",
  description:
    "¿Tienes dudas o no sabes por dónde empezar? Escríbenos y te ayudamos a encontrar el entrenamiento que mejor encaja contigo.",
  address: "C/ Cañizares, 3 · 28012 Madrid",
  whatsapp: businessInfo.phone,
  instagram: businessInfo.instagramHandle,
  cta: "RESERVA TU PRIMERA SESIÓN GRATIS",
  image: ContactImage,
  imageAlt: "Placa cerámica de Box 28012 en Lavapiés, Madrid",
};

const aboutStory = {
  label: "SOBRE EL BOX",
  title: "NUESTRA HISTORIA",
  paragraphs: [
    "Box 28012 nació en noviembre de 2019 con una idea clara: entrenar en grupo sin renunciar a la atención individual.",
    "Desde entonces, hemos crecido junto al barrio de Lavapiés, apostando por los grupos reducidos, la calidad del entrenamiento y la cercanía.",
    "Hoy seguimos evolucionando con una nueva identidad, pero con la misma filosofía: entrenar bien, progresar y construir comunidad.",
    "Porque 28012 no es solo un código postal. Es el barrio al que pertenecemos.",
  ],
  image: BoxInteriorWideImage,
  alt: "Espacio de entrenamiento de Box 28012",
  accentImage: BoxInteriorDetailImage,
  accentAlt: "Anillas y pesas rusas en el interior de Box 28012",
};

const team = {
  title: "EQUIPO TÉCNICO",
  headline: "Las personas detrás de Box 28012.",
  members: [
    {
      id: "lorena",
      name: "LORENA",
      image: LorenaImage,
      imageAlt: "Lorena, fundadora de Box 28012",
      role: "OWNER",
      description: [
        "Graduada en Ciencias de la Actividad Física y del Deporte (CAFYD) y CrossFit Level 2, Lorena es la fundadora de Box 28012.",
        "Desde 2019, su trabajo se centra en ofrecer un entrenamiento estructurado de calidad, con atención cercana y grupos reducidos, donde cada persona pueda mejorar, progresar y disfrutar del proceso.",
      ],
    },
    {
      id: "albert",
      name: "ALBERT",
      image: AlbertImage,
      imageAlt: "Albert, entrenador de Box 28012",
      role: "HEAD COACH",
      description: [
        "Graduado en Enseñanzas Deportivas, con formación en adaptación a necesidades especiales, y en Magisterio de Educación Infantil, Albert es Head Coach en Box 28012.",
        "Desde su incorporación al equipo, destaca por su atención al orden, el cuidado de los pequeños detalles y su compromiso con la inclusión y la adaptación de sus clases a las necesidades de cada persona.",
      ],
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
