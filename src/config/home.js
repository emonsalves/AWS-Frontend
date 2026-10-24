/**
 * Textos de la página de inicio. Se editan aquí, no en los componentes.
 * Los botones de servicios abren WhatsApp con el mensaje de "whatsappText" ya escrito.
 */

export const home = {
    hero: {
        title: "Desarrollo web y automatización para PYMES",
        subtitle:
            "Creamos sitios web a medida y automatizamos las tareas repetitivas de tu empresa para que tu equipo dedique su tiempo a lo que hace crecer el negocio.",
        primaryAction: "Escríbenos por WhatsApp",
        secondaryAction: "Ver servicios",
        trustLine: "Desde 2021 ayudando a PYMES en Santiago, Chile.",
        highlight: "PYMES",
        // Ejemplo de automatización que acompaña al título
        example: {
            title: "Automatización · Pedidos",
            status: "Activa",
            steps: [
                { title: "Llega un pedido por WhatsApp", text: "Se registra solo, sin copiar datos" },
                { title: "Se actualiza el inventario", text: "Adiós a la planilla compartida" },
                { title: "El cliente recibe su confirmación", text: "Tu equipo solo revisa" },
            ],
        },
    },

    services: {
        eyebrow: "Servicios",
        title: "Qué hacemos por tu empresa",
        items: [
            {
                icon: "toolbox",
                title: "Desarrollo web personalizado",
                text: "Sitios y aplicaciones web hechos para tu negocio: rápidos, adaptados a celulares y fáciles de encontrar en Google.",
                action: "Quiero mi sitio",
                whatsappText: "Hola, quiero un sitio web para mi empresa.",
            },
            {
                icon: "users-gear",
                title: "Automatización de procesos",
                text: "Convertimos tareas manuales y repetitivas en procesos automáticos: menos errores, menos planillas y más tiempo para tu equipo.",
                action: "Automatizar mi empresa",
                whatsappText: "Hola, quiero automatizar procesos de mi empresa.",
            },
            {
                icon: "hand-holding-heart",
                title: "Asesoramiento tecnológico",
                text: "Te ayudamos a elegir y ordenar las herramientas que tu empresa necesita, sin gastar en lo que no vas a usar.",
                action: "Pedir asesoría",
                whatsappText: "Hola, quiero una asesoría tecnológica para mi empresa.",
            },
        ],
    },

    audience: {
        eyebrow: "Para quién",
        title: "Pensado para PYMES que quieren crecer sin complicarse",
        intro: "Nuestra misión es empoderar a las PYMES a través de la tecnología. Tenemos más experiencia en comercio, servicios y salud.",
        listTitle: "Esto es para ti si:",
        items: [
            "Tu empresa aún no tiene sitio web, o el que tiene no te trae clientes.",
            "Tu equipo pierde horas en planillas, copiar datos o tareas que se repiten cada semana.",
            "Quieres usar tecnología pero no sabes por dónde partir ni qué te conviene.",
            "Prefieres hablar con personas que te explican las cosas en simple.",
        ],
    },

    process: {
        eyebrow: "Cómo trabajamos",
        title: "De la idea a la solución en cuatro pasos",
        steps: [
            { title: "Conversamos", text: "Nos cuentas cómo funciona tu empresa y qué te gustaría mejorar." },
            { title: "Proponemos", text: "Te presentamos una solución clara, con alcance y plazos definidos." },
            { title: "Construimos", text: "Desarrollamos contigo y te mostramos avances para que opines en el camino." },
            { title: "Te acompañamos", text: "Lo dejamos funcionando, te enseñamos a usarlo y seguimos disponibles." },
        ],
    },

    contact: {
        title: "¿Conversamos sobre tu proyecto?",
        text: "Cuéntanos qué necesita tu empresa y te respondemos con una propuesta. Atendemos de lunes a viernes, de 9:00 a 18:00.",
        primaryAction: "Escríbenos por WhatsApp",
        secondaryAction: "Enviar un correo",
    },
};
