export const SITE_CONFIG = {
    name: "Univet Dog'Shop",
    description: "Cuidado profissional e amor incondicional para o seu pet.",
    url: "https://univetdogshop.com.br",

    contact: {
        phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5584999999999",
        email: process.env.NEXT_PUBLIC_EMAIL || "contato@univet.com.br",
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5584999999999",
        address: {
            street: process.env.NEXT_PUBLIC_STREET || "Rua Fictícia, 123 - Centro",
            city: process.env.NEXT_PUBLIC_CITY || "Mossoró",
            state: process.env.NEXT_PUBLIC_STATE || "RN",
            zip: process.env.NEXT_PUBLIC_ZIP || "59600-000",
        },
    },

    businessHours: {
        weekdays: process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAYS || "Seg-Sex: 7:30h - 11:30h / 13:30h - 18:30h",
        saturday: process.env.NEXT_PUBLIC_BUSINESS_HOURS_SATURDAY || "Sab: 7:30h - 13:30h",
    },

    social: {
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "https://instagram.com/univetdogshop",
        facebook: process.env.NEXT_PUBLIC_FACEBOOK || "https://facebook.com/univetdogshop",
    },
};

export const SERVICES = [
    {
        id: "consultas",
        title: "Consultas Veterinárias",
        description: "Atendimento clínico geral e especializado para garantir a saúde e bem-estar do seu pet.",
        icon: "Stethoscope",
        slug: "consultas",
    },
    {
        id: "banho-tosa",
        title: "Banho e Tosa",
        description: "Estética animal com produtos premium e profissionais carinhosos. Seu pet cheiroso e feliz.",
        icon: "Scissors",
        slug: "banho-tosa",
    },
    {
        id: "exames",
        title: "Exames Laboratoriais",
        description: "Resultados rápidos e precisos com nosso laboratório próprio para diagnósticos exatos.",
        icon: "Microscope",
        slug: "exames",
    },
    {
        id: "cirurgias",
        title: "Cirurgias",
        description: "Centro cirúrgico equipado com tecnologia de ponta e anestesia inalatória segura.",
        icon: "Syringe",
        slug: "cirurgias",
    },
    {
        id: "internacao",
        title: "Internação",
        description: "Monitoramento 24h em ambiente controlado e confortável para a rápida recuperação do paciente.",
        icon: "Bed",
        slug: "internacao",
    },
    {
        id: "farmacia",
        title: "Pet Shop & Farmácia",
        description: "Medicamentos, rações super prêmio, brinquedos e acessórios com as melhores marcas.",
        icon: "ShoppingBag",
        slug: "pet-shop",
    },
];

export const FAQ_ITEMS = [
    {
        question: "Como faço para agendar uma consulta ou banho?",
        answer: "Você pode agendar rapidamente através do nosso WhatsApp. Nossa equipe responderá em minutos para confirmar o melhor horário para você e seu pet.",
    },
    {
        question: "Vocês atendem emergências?",
        answer: "Sim, realizamos atendimentos de urgência e emergência durante nosso horário de funcionamento. Para casos graves fora do horário comercial, recomendamos entrar em contato previamente.",
    },
    {
        question: "Meu pet é muito agitado/assustado, posso acompanhar o banho?",
        answer: "Temos um ambiente com visibilidade para que você possa acompanhar seu pet. Nossa equipe é treinada para lidar com animais medrosos usando técnicas de reforço positivo.",
    },
    {
        question: "Quais formas de pagamento vocês aceitam?",
        answer: "Aceitamos PIX, cartões de crédito e débito. Em casos de procedimentos cirúrgicos ou exames mais complexos, oferecemos parcelamento no cartão de crédito.",
    },
    {
        question: "Vocês atendem animais silvestres e exóticos?",
        answer: "Sim! Temos profissionais especializados no atendimento de aves, répteis, roedores e outros animais não convencionais.",
    },
    {
        question: "Fazem serviço de táxi dog?",
        answer: "Sim, oferecemos o serviço de Táxi Dog para buscar e levar seu pet com total segurança e conforto dentro de Mossoró e região. Consulte taxas pelo WhatsApp.",
    },
];

export const TESTIMONIALS = [
    {
        initials: "M.S.",
        text: "Melhor clínica da cidade! Salvaram a vida do meu Thor com um diagnóstico rápido e preciso. A estrutura é impecável.",
        role: "Tutora do Thor (Golden Retriever)",
        rating: 5,
    },
    {
        initials: "J.C.",
        text: "O banho e tosa é maravilhoso. Minha gatinha sempre volta cheirosa, sem estresse nenhum. Dá pra ver que eles amam o que fazem.",
        role: "Tutor da Luna (Gato Persa)",
        rating: 5,
    },
    {
        initials: "A.R.",
        text: "Preços justos e atendimento excelente. O Dr. especialista em exóticos atendeu minha calopsita com muita propriedade. Recomendo sempre!",
        role: "Tutora do Piu (Calopsita)",
        rating: 5,
    },
    {
        initials: "F.L.",
        text: "Farmácia super completa e sempre acho a ração específica que o meu cão precisa. O atendimento no balcão é nota mil.",
        role: "Tutor do Max (Buldogue Francês)",
        rating: 5,
    },
];
