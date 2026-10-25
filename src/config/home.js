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
        // Conversación de ejemplo que se anima junto al título: un pedido por WhatsApp que se registra solo
        demo: {
            label: "Ejemplo de automatización",
            chatName: "Pedido por WhatsApp",
            incoming: "Hola, quiero 2 cajas de café para el viernes.",
            sheetTitle: "Planilla de pedidos",
            row: { client: "Café Central", item: "2 cajas de café", date: "Viernes" },
            reply: "Listo, tu pedido quedó registrado para el viernes.",
            done: "Registrado sin copiar datos a mano",
        },
    },

    stack: {
        title: "Herramientas con las que trabajamos",
    },

    services: {
        title: "Qué hacemos por tu empresa",
        items: [
            {
                visual: "web",
                title: "Desarrollo web personalizado",
                text: "Sitios y aplicaciones web hechos para tu negocio: rápidos, adaptados a celulares y fáciles de encontrar en Google.",
                action: "Quiero mi sitio",
                whatsappText: "Hola, quiero un sitio web para mi empresa.",
            },
            {
                visual: "automation",
                title: "Automatización de procesos",
                text: "Convertimos tareas manuales y repetitivas en procesos automáticos: menos errores, menos planillas y más tiempo para tu equipo.",
                action: "Automatizar mi empresa",
                whatsappText: "Hola, quiero automatizar procesos de mi empresa.",
            },
            {
                visual: "advice",
                // Lista ilustrativa de la tarjeta: lo que conviene y lo que no
                example: [
                    { text: "Correo y dominio propio", keep: true },
                    { text: "Inventario en la nube", keep: true },
                    { text: "Software que no usas", keep: false },
                ],
                title: "Asesoramiento tecnológico",
                text: "Te ayudamos a elegir y ordenar las herramientas que tu empresa necesita, sin gastar en lo que no vas a usar.",
                action: "Pedir asesoría",
                whatsappText: "Hola, quiero una asesoría tecnológica para mi empresa.",
            },
        ],
    },

    audience: {
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
