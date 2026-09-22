import BathImage from "../assets/images/bath.webp";
import BoxImage from "../assets/images/box.webp";
import CrosstrainingImage from "../assets/images/crosstraining.webp";
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

const aboutSections = [
	{
		title: "Cómo empezó",
		image: BathImage,
		alt: "Vestuarios oscuros con azulejos negros y detalles rojos",
		paragraphs: [
			"Box 28012 comenzó su historia en noviembre de 2019.",
			"Después de varios años trabajando como entrenadora personal y entrenando tanto en grandes centros como en boxes con grupos de 20 o 30 personas, empezó a tomar forma una idea: conservar la energía y la motivación de entrenar con otros, pero sin perder la atención que recibe cada persona.",
		],
	},
	{
		title: "Entrenar en grupo no significa ser uno más",
		image: BoxImage,
		alt: "Zona de entrenamiento con barra en Box 28012",
		paragraphs: [
			"Así nació nuestro modelo de entrenamiento en grupos reducidos, con un máximo de 8–10 personas.",
			"Un formato que permite al coach estar pendiente de la técnica, la ejecución, la progresión y la seguridad de cada persona.",
			"Entrenar en grupo significa compartir el esfuerzo, la motivación y la experiencia con otras personas, manteniendo al mismo tiempo una atención cercana y profesional.",
		],
	},
	{
		title: "28012 es nuestro barrio",
		image: RemerasImage,
		alt: "Camisetas negras de Box 28012 colgadas en un perchero",
		paragraphs: [
			"Durante más de seis años el Box ha crecido y evolucionado junto a su entorno.",
			"El cambio de Detailors Functional Studio a Box 28012 no es solo un cambio de nombre, sino una nueva etapa y una identidad que representa mejor lo que somos.",
			"28012 es el código postal de Lavapiés, el barrio donde estamos y donde hemos construido nuestra comunidad. Queremos ser un box de barrio, con identidad, cercanía y un lugar que la gente sienta suyo.",
		],
		emphasis:
			"Nuestro objetivo nunca ha sido tener el mayor número de personas entrenando. Queremos que las personas que entrenan aquí entrenen bien y vean progresos.",
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
		businessInfo,
		contactItems,
		pricingPlans,
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
