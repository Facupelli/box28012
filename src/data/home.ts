import CrosstrainingImage from "../assets/images/crosstraining.webp";
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
		services,
		aboutParagraphs,
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
