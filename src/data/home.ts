import CrosstrainingImage from "../assets/images/crosstraining.webp";
import IronbodyImage from "../assets/images/ironbody.webp";
import PartnerWODImage from "../assets/images/partner-wod.webp";

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

const activities = [
	{
		title: "Crosstraining",
		image: CrosstrainingImage,
		alt: "Zona de entrenamiento funcional durante una clase de crosstraining",
		items: [
			"Sesiones variadas que combinan fuerza, cardio y skills.",
			"Trabajo integral de resistencia, movilidad, coordinación y técnica.",
			"Entrenamientos planificados para progresar de forma segura.  ",
		],
	},
	{
		title: "Ironbody",
		image: IronbodyImage,
		alt: "Material de fuerza preparado para una sesión de Ironbody",
		items: [
			"Trabajo de fuerza con movimientos tradicionales y funcionales.",
			"Progresión de cargas cuidando técnica, control y postura.",
			" Ejercicios accesorios para prevenir lesiones y mejorar tu base.",
		],
	},
	{
		title: "Partner WOD",
		image: PartnerWODImage,
		alt: "Entrenamiento funcional por parejas en Box 28012",
		items: [
			"Entrenamientos cooperativos por parejas o equipos.",
			"Trabajo compartido, ritmo común y motivación durante la sesión.",
			"Un formato social para entrenar acompañado dentro del box.",
		],
	},
];

const pricingPlans = [
	{
		number: "01",
		name: "Tarifa 18",
		price: "230€",
		detail: "18 clases · Todo el día",
		isLast: false,
	},
	{
		number: "02",
		name: "Tarifa 24",
		price: "260€",
		detail: "24 clases · Todo el día",
		isLast: false,
	},
	{
		number: "03",
		name: "Tarifa 36",
		price: "310€",
		detail: "36 clases · Todo el día",
		isLast: false,
	},
	{
		number: "04",
		name: "Tarifa Unlimited",
		price: "430€",
		detail: "Clases ilimitadas · Todo el día",
		isLast: true,
	},
];

const aboutParagraphs = [
	"Box 28012 es un espacio de entrenamiento funcional en Madrid centro. Trabajamos en grupos reducidos para ofrecer atención personalizada, corrección técnica y sesiones adaptadas a cada nivel.",
	"Da igual si empiezas desde cero, vienes de otra disciplina o necesitas adaptar el entrenamiento: te ayudamos a entrenar con método y progresar de forma segura.",
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
		activities,
		aboutParagraphs,
		businessInfo,
		contactItems,
		pricingPlans,
	};
}
