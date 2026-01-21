// Конфигурация компании
// Для создания клона для другой компании - просто измените данные в этом файле

export const companyConfig = {
  // Основная информация
  name: "ООО «Бта Торг»",
  slogan: "Пригон автомобилей",
  category: "Автосалон, пригон автомобилей",

  // Контакты
  phone: "+7 (939) 034-91-33",
  phoneLink: "+79390349133",
  email: "bta.torg@mail.ru",
  website: "bta-torg.ru",

  // Адрес
  address: {
    full: "445017, Самарская область, город Тольятти, ул. Победы, д. 54, кв. 20",
    city: "Тольятти",
    region: "Самарская область",
    street: "ул. Победы, д. 54, кв. 20",
    zipCode: "445017"
  },

  // Координаты на карте
  coordinates: {
    latitude: 53.513470,
    longitude: 49.424328,
    zoom: 17.13
  },

  // Рейтинг
  rating: {
    score: 4.8,
    totalReviews: 38,
    totalRatings: 78
  },

  // Логотип
  logo: {
    url: "/bta-torg-logo.svg",
    alt: "БТА ТОРГ"
  },

  // График работы
  workingHours: {
    monday: "09:00 - 18:00",
    tuesday: "09:00 - 18:00",
    wednesday: "09:00 - 18:00",
    thursday: "09:00 - 18:00",
    friday: "09:00 - 18:00",
    saturday: "10:00 - 16:00",
    sunday: "Выходной"
  },

  // Дополнительные настройки
  settings: {
    showWhatsApp: false,
    showTelegram: false,
    telegramUsername: "",
    whatsappNumber: ""
  }
};

// Экспорт типа для TypeScript
export type CompanyConfig = typeof companyConfig;
