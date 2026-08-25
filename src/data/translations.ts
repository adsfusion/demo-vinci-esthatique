export type Language = 'fr' | 'ar';

export const data = {
  fr: {
    nav: {
      book: "Prendre RDV",
      services: "Services",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      subtitle: "VOTRE CLINIQUE DE CONFIANCE À CASABLANCA",
      title: "Révélez votre beauté avec l'Épilation Laser Définitive",
      description: "Technologie de pointe et expertise médicale pour une peau douce, lisse et sans poils toute l'année.",
      ctaPrimary: "Prendre un rendez-vous",
      ctaSecondary: "Voir nos offres",
      trust: ["Résultats garantis", "Technologie indolore", "Médecins experts"]
    },
    services: {
      title: "Nos Traitements Avancés",
      subtitle: "Découvrez notre gamme complète de services esthétiques conçus pour sublimer votre beauté naturelle.",
      items: [
        {
          title: "Épilation Laser Définitive",
          description: "Élimination durable des poils indésirables avec les dernières technologies laser adaptées à tous types de peau.",
          icon: "Sparkles"
        },
        {
          title: "Soins du Visage Avancés",
          description: "Traitements anti-âge, hydratants et purifiants pour retrouver un teint éclatant et une peau rajeunie.",
          icon: "Droplets"
        },
        {
          title: "Coiffure & Soins Capillaires",
          description: "Coupe, coloration et soins profonds pour des cheveux brillants et en pleine santé.",
          icon: "Scissors"
        },
        {
          title: "Onglerie & Beauté des Mains",
          description: "Manucure, pédicure et pose de vernis semi-permanent avec des produits haut de gamme.",
          icon: "HandHeart"
        },
        {
          title: "Maquillage Professionnel",
          description: "Mise en beauté pour vos événements spéciaux, avec un rendu naturel ou sophistiqué.",
          icon: "Brush"
        },
        {
          title: "Forfaits Spa & Détente",
          description: "Massages relaxants et rituels de bien-être pour relâcher les tensions et revitaliser le corps.",
          icon: "Flower2"
        }
      ]
    },
    about: {
      title: "L'Excellence au Service de votre Beauté",
      content: "Chez Vinci Esthétique Avancée, nous combinons l'expertise de nos spécialistes avec des technologies de pointe pour vous offrir des résultats exceptionnels. Situés au cœur de Casablanca, nous vous accueillons dans un cadre moderne et apaisant, dédié entièrement à votre bien-être.",
      stats: [
        { value: "4.8/5", label: "Avis Clients" },
        { value: "5000+", label: "Traitements" },
        { value: "100%", label: "Satisfaction" }
      ]
    },
    reviews: {
      title: "Ce Que Disent Nos Clients",
      items: [
        { name: "Sofia T.", text: "Une expérience incroyable ! L'équipe est très professionnelle et les résultats de l'épilation laser sont visibles dès les premières séances. Je recommande vivement." },
        { name: "Kenza B.", text: "Le centre est magnifique et d'une propreté irréprochable. Le personnel est aux petits soins. J'ai adoré mon soin du visage." },
        { name: "Salma M.", text: "Enfin un centre esthétique à Casablanca où l'on se sent en confiance. La technologie utilisée est vraiment sans douleur. Merci Vinci !" }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        { q: "L'épilation au laser est-elle douloureuse ?", a: "Notre technologie de dernière génération est conçue pour maximiser le confort. La plupart des patients ressentent au plus un léger picotement." },
        { q: "Combien de séances sont nécessaires ?", a: "En moyenne, 6 à 8 séances sont recommandées pour un résultat optimal, selon le type de peau et de poil." },
        { q: "Quelles zones peuvent être traitées ?", a: "L'épilation laser peut être pratiquée sur presque toutes les parties du corps : visage, jambes, aisselles, maillot, etc." },
        { q: "Puis-je m'exposer au soleil avant une séance ?", a: "Il est fortement déconseillé de s'exposer au soleil au moins 2 semaines avant et après le traitement pour éviter tout risque de taches." }
      ]
    },
    appointment: {
      title: "Prenez Rendez-vous",
      subtitle: "Remplissez ce formulaire et notre équipe vous contactera rapidement pour confirmer votre consultation.",
      name: "Nom complet",
      phone: "Numéro de téléphone",
      service: "Service souhaité",
      date: "Date préférée",
      submit: "Confirmer la demande",
      successTitle: "Demande envoyée !",
      successMessage: "Merci. Notre équipe vous contactera très prochainement."
    },
    location: {
      title: "Nous Trouver",
      address: "173 Bd Ghandi, Casablanca 20250",
      hours: "Lun - Sam : 9h00 - 20h00",
      phone: "+212 5229-86161",
      whatsapp: "+212 661-595630"
    },
    footer: {
      rights: "© 2024 Vinci Esthétique Avancée. Tous droits réservés."
    }
  },
  ar: {
    nav: {
      book: "احجز موعداً",
      services: "الخدمات",
      about: "من نحن",
      faq: "أسئلة شائعة",
      contact: "اتصل بنا"
    },
    hero: {
      subtitle: "عيادتك الموثوقة في الدار البيضاء",
      title: "اكتشفي جمالك مع إزالة الشعر بالليزر نهائياً",
      description: "أحدث التقنيات والخبرة الطبية لبشرة ناعمة وصافية وخالية من الشعر على مدار العام.",
      ctaPrimary: "احجز موعداً الآن",
      ctaSecondary: "اطلع على عروضنا",
      trust: ["نتائج مضمونة", "تقنية بدون ألم", "أطباء خبراء"]
    },
    services: {
      title: "علاجاتنا المتقدمة",
      subtitle: "اكتشف مجموعتنا الكاملة من الخدمات التجميلية المصممة لإبراز جمالك الطبيعي.",
      items: [
        {
          title: "إزالة الشعر بالليزر",
          description: "إزالة دائمة للشعر غير المرغوب فيه باستخدام أحدث تقنيات الليزر المناسبة لجميع أنواع البشرة.",
          icon: "Sparkles"
        },
        {
          title: "عناية متقدمة بالبشرة",
          description: "علاجات مكافحة الشيخوخة والترطيب والتنقية لاستعادة بشرة نضرة وشابة.",
          icon: "Droplets"
        },
        {
          title: "العناية بالشعر وتسريحه",
          description: "قص، صبغ، وعلاجات عميقة لشعر لامع وصحي.",
          icon: "Scissors"
        },
        {
          title: "العناية بالأظافر واليدين",
          description: "مانيكير، باديكير، وطلاء أظافر شبه دائم باستخدام منتجات عالية الجودة.",
          icon: "HandHeart"
        },
        {
          title: "مكياج احترافي",
          description: "إبراز جمالك في مناسباتك الخاصة، بمظهر طبيعي أو راقٍ.",
          icon: "Brush"
        },
        {
          title: "باقات السبا والاسترخاء",
          description: "جلسات مساج مريحة وطقوس العافية لتخفيف التوتر وتنشيط الجسم.",
          icon: "Flower2"
        }
      ]
    },
    about: {
      title: "التميز في خدمة جمالك",
      content: "في عيادة فينشي للتجميل المتقدم، نجمع بين خبرة المتخصصين لدينا وأحدث التقنيات لتقديم نتائج استثنائية لك. نرحب بك في قلب الدار البيضاء، في بيئة عصرية وهادئة، مكرسة بالكامل لراحتك.",
      stats: [
        { value: "4.8/5", label: "تقييم العملاء" },
        { value: "5000+", label: "علاج مكتمل" },
        { value: "100%", label: "نسبة الرضا" }
      ]
    },
    reviews: {
      title: "ما يقوله عملاؤنا",
      items: [
        { name: "صوفيا ت.", text: "تجربة مذهلة! الفريق محترف للغاية ونتائج إزالة الشعر بالليزر مرئية من الجلسات الأولى. أوصي بهم بشدة." },
        { name: "كنزة ب.", text: "المركز جميل ونظيف جداً. الموظفون مهتمون جداً. أحببت علاجات الوجه الخاصة بي." },
        { name: "سلمى م.", text: "أخيراً مركز تجميل في الدار البيضاء تشعر فيه بالثقة. التقنية المستخدمة حقاً خالية من الألم. شكراً فينشي!" }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "هل إزالة الشعر بالليزر مؤلمة؟", a: "تم تصميم تقنيتنا من الجيل الأحدث لزيادة الراحة إلى أقصى حد. يشعر معظم المرضى بوخز خفيف على الأكثر." },
        { q: "كم عدد الجلسات اللازمة؟", a: "في المتوسط، يوصى بـ 6 إلى 8 جلسات للحصول على نتائج مثالية، اعتماداً على نوع البشرة والشعر." },
        { q: "ما هي المناطق التي يمكن علاجها؟", a: "يمكن إجراء إزالة الشعر بالليزر على جميع أجزاء الجسم تقريباً: الوجه، الساقين، الإبطين، منطقة البكيني، إلخ." },
        { q: "هل يمكنني التعرض للشمس قبل الجلسة؟", a: "ينصح بشدة بعدم التعرض للشمس لمدة أسبوعين على الأقل قبل العلاج وبعده لتجنب أي خطر لظهور البقع." }
      ]
    },
    appointment: {
      title: "احجز موعداً",
      subtitle: "يرجى ملء هذا النموذج وسيقوم فريقنا بالاتصال بك قريباً لتأكيد استشارتك.",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      service: "الخدمة المطلوبة",
      date: "التاريخ المفضل",
      submit: "تأكيد الطلب",
      successTitle: "تم إرسال الطلب!",
      successMessage: "شكراً لك. سيتصل بك فريقنا في أقرب وقت ممكن."
    },
    location: {
      title: "موقعنا",
      address: "173 شارع غاندي، الدار البيضاء 20250",
      hours: "الإثنين - السبت : 9:00 صباحاً - 8:00 مساءً",
      phone: "+212 5229-86161",
      whatsapp: "+212 661-595630"
    },
    footer: {
      rights: "© 2024 عيادة فينشي للتجميل المتقدم. جميع الحقوق محفوظة."
    }
  }
};
