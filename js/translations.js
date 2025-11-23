const translations = {
  // Метаданные для SEO
  meta: {
    ru: {
      description: "Фитнес для всех: персональные тренировки, групповые занятия и онлайн-поддержка. Профессиональные тренеры и удобное расписание."
    },
    en: {
      description: "Fitness for everyone: personal training, group classes, and online support. Professional trainers and flexible scheduling."
    },
    de: {
      description: "Fitness für alle: Einzeltraining, Gruppentraining und Online-Unterstützung. Professionelle Trainer und flexibler Zeitplan."
    }
  },
  ru: {
    title: "Natafit — фитнес для всех",
    nav: {
      home: "Главная",
      services: "Услуги",
      schedule: "Расписание",
      contacts: "Контакты"
    },
    hero: {
      title: "Фитнес для всех",
      subtitle: "Простые тренировки, персональная поддержка и удобное расписание для любого уровня. Никакой перегрузки — только результат и уверенность.",
      cta: {
        services: "Посмотреть услуги",
        signup: "Записаться"
      }
    },
    welcome: {
      title: "Добро пожаловать",
      text: "Занятия адаптированы для любого уровня: безопасные упражнения и поддержка тренера."
    },
    programs: {
      title: "Наши программы",
      start: {
        title: "Старт",
        desc: "Короткие тренировки 3 раза в неделю, базовая техника."
      },
      strength: {
        title: "Сила и выносливость",
        desc: "Программа для постепенного увеличения нагрузки."
      },
      online: {
        title: "Онлайн-поддержка",
        desc: "Персональные планы и консультации через мессенджер."
      }
    },
    schedule: {
      title: "Расписание — Natafit",
      pageTitle: "Расписание",
      description: "Здесь будет расписание занятий. Ниже — пример на неделю.",
      emptyMessage: "Расписание скоро появится",
      booked: "Занято",
      available: "Свободно",
      slot1: "Понедельник 19:00 - Групповая тренировка для начинающих",
      slot2: "Среда 19:00 - Силовая тренировка",
      slot3: "Пятница 18:00 - Онлайн занятие"
    },
    contact: {
      title: "Контакты — Natafit",
      pageTitle: "Контакты",
      phone: "Тел: +7 (xxx) xxx-xx-xx",
      email: "Email: info@natafit.example",
      address: "Адрес: ваш город, ул. Примерная, 12",
      heading: "Свяжитесь со мной",
      phoneLabel: "Телефон",
      messengersLabel: "Мессенджеры",
      footer: "Жду ваших сообщений! Отвечу в течение 24 часов."
    },
    services: {
      title: "Услуги — Natafit",
      pageTitle: "Услуги",
      personal: {
        title: "Персональные тренировки",
        desc: "Индивидуальная программа и наблюдение тренера."
      },
      group: {
        title: "Групповые занятия",
        desc: "Дружелюбная группа для новичков, малые группы."
      },
      online: {
        title: "Онлайн-программа",
        desc: "Домашние тренировки и поддержка в мессенджере."
      }
    },
    footer: {
      copyright: "Natafit — все права защищены",
      phone: "Тел: +7 (xxx) xxx-xx-xx",
      demoVersion: "Демо версия"
    },
    demo: {
      version: "Это демо-версия",
      workingVersion: "В рабочей версии здесь будут активные ссылки"
    },
    theme: {
      light: "Светлая",
      dark: "Тёмная"
    },
    contactForm: {
      title: "Форма обратной связи",
      subtitle: "Оставьте свои контакты, и я свяжусь с вами",
      name: "Ваше имя",
      phone: "Телефон",
      email: "Email (опционально)",
      message: "Сообщение",
      submit: "Отправить",
      successMessage: "✓ Сообщение отправлено! Я свяжусь с вами в ближайшее время.",
      nameError: "Пожалуйста, введите ваше имя",
      phoneError: "Пожалуйста, введите корректный номер телефона",
      emailError: "Пожалуйста, введите корректный email",
      messageError: "Пожалуйста, введите сообщение (минимум 10 символов)"
    },
    admin: {
      loginTitle: "Вход для администратора",
      yourName: "Ваше имя",
      adminKey: "🔑 Ключ администратора",
      enterKey: "Введите секретный ключ",
      login: "Войти",
      invalidKey: "Неверный ключ администратора",
      scheduleNav: "Расписание",
      clientsNav: "Клиенты",
      clientsTitle: "Управление клиентами",
      addClient: "Добавить клиента",
      totalClients: "Всего клиентов",
      newClients: "Новых за месяц",
      searchPlaceholder: "Поиск по имени, телефону или email..."
    },
    faq: {
      title: "Часто задаваемые вопросы",
      q1: {
        question: "Нужна ли специальная спортивная форма?",
        answer: "Нет, подойдет любая удобная одежда для занятий спортом. Главное - чтобы вам было комфортно двигаться."
      },
      q2: {
        question: "Подходит ли для начинающих?",
        answer: "Да! Все программы адаптированы под любой уровень подготовки. Начнем с базовых упражнений и постепенно увеличим нагрузку."
      },
      q3: {
        question: "Как проходит первая тренировка?",
        answer: "На первом занятии обсудим ваши цели, проверим уровень подготовки и составим индивидуальный план тренировок."
      },
      q4: {
        question: "Можно ли отменить или перенести тренировку?",
        answer: "Да, просто сообщите заранее (минимум за 24 часа) через WhatsApp, Telegram или по телефону."
      },
      q5: {
        question: "Сколько длится одна тренировка?",
        answer: "Обычно 60 минут. Групповые занятия - 60-75 минут. Онлайн-консультации - 30-45 минут."
      }
    }
  },
  en: {
    title: "Natafit — fitness for everyone",
    nav: {
      home: "Home",
      services: "Services",
      schedule: "Schedule",
      contacts: "Contacts"
    },
    hero: {
      title: "Fitness for everyone",
      subtitle: "Simple workouts, personal support, and flexible scheduling for all levels. No overload — just results and confidence.",
      cta: {
        services: "View services",
        signup: "Sign up"
      }
    },
    welcome: {
      title: "Welcome",
      text: "Classes adapted for all levels: safe exercises and trainer support."
    },
    schedule: {
      title: "Schedule — Natafit",
      pageTitle: "Schedule",
      description: "Here will be the class schedule. Below is a weekly example.",
      emptyMessage: "Schedule coming soon",
      booked: "Booked",
      available: "Available",
      slot1: "Monday 7:00 PM - Group training for beginners",
      slot2: "Wednesday 7:00 PM - Strength training",
      slot3: "Friday 6:00 PM - Online session"
    },
    contact: {
      title: "Contact — Natafit",
      pageTitle: "Contact",
      phone: "Phone: +7 (xxx) xxx-xx-xx",
      email: "Email: info@natafit.example",
      address: "Address: your city, Example st., 12",
      heading: "Get in touch",
      phoneLabel: "Phone",
      messengersLabel: "Messengers",
      footer: "Looking forward to hearing from you! Will reply within 24 hours."
    },
    services: {
      title: "Services — Natafit",
      pageTitle: "Services",
      personal: {
        title: "Personal Training",
        desc: "Individual program and trainer supervision."
      },
      group: {
        title: "Group Classes",
        desc: "Friendly group for beginners, small classes."
      },
      online: {
        title: "Online Program",
        desc: "Home workouts and messenger support."
      }
    },
    programs: {
      title: "Our programs",
      start: {
        title: "Start",
        desc: "Short workouts 3 times a week, basic technique."
      },
      strength: {
        title: "Strength & Endurance",
        desc: "Program for gradual load increase."
      },
      online: {
        title: "Online support",
        desc: "Personal plans and messenger consultations."
      }
    },
    footer: {
      copyright: "Natafit — all rights reserved",
      phone: "Tel: +7 (xxx) xxx-xx-xx"
    },
    theme: {
      light: "Light",
      dark: "Dark"
    },
    contactForm: {
      title: "Contact Form",
      subtitle: "Leave your contacts and I'll get back to you",
      name: "Your name",
      phone: "Phone",
      email: "Email (optional)",
      message: "Message",
      submit: "Send",
      successMessage: "✓ Message sent! I'll contact you soon.",
      nameError: "Please enter your name",
      phoneError: "Please enter a valid phone number",
      emailError: "Please enter a valid email",
      messageError: "Please enter a message (minimum 10 characters)"
    },
    admin: {
      loginTitle: "Administrator Login",
      yourName: "Your name",
      adminKey: "🔑 Administrator Key",
      enterKey: "Enter secret key",
      login: "Login",
      invalidKey: "Invalid administrator key",
      scheduleNav: "Schedule",
      clientsNav: "Clients",
      clientsTitle: "Client Management",
      addClient: "Add Client",
      totalClients: "Total Clients",
      newClients: "New This Month",
      searchPlaceholder: "Search by name, phone or email..."
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: {
        question: "Do I need special sports clothing?",
        answer: "No, any comfortable clothing for sports will do. The main thing is that you feel comfortable moving."
      },
      q2: {
        question: "Is it suitable for beginners?",
        answer: "Yes! All programs are adapted to any fitness level. We'll start with basic exercises and gradually increase the load."
      },
      q3: {
        question: "How does the first training session go?",
        answer: "In the first session, we'll discuss your goals, check your fitness level, and create an individual training plan."
      },
      q4: {
        question: "Can I cancel or reschedule a training session?",
        answer: "Yes, just let me know in advance (at least 24 hours) via WhatsApp, Telegram, or phone."
      },
      q5: {
        question: "How long does one training session last?",
        answer: "Usually 60 minutes. Group sessions - 60-75 minutes. Online consultations - 30-45 minutes."
      }
    }
  },
  de: {
    title: "Natafit — Fitness für alle",
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      schedule: "Zeitplan",
      contacts: "Kontakte"
    },
    hero: {
      title: "Fitness für alle",
      subtitle: "Einfache Workouts, persönliche Betreuung und flexible Terminplanung für jedes Fitnesslevel. Keine Überlastung — nur Ergebnisse und Selbstvertrauen.",
      cta: {
        services: "Dienstleistungen anzeigen",
        signup: "Anmelden"
      }
    },
    welcome: {
      title: "Willkommen",
      text: "Kurse für alle Levels: sichere Übungen und Trainer-Unterstützung."
    },
    schedule: {
      title: "Zeitplan — Natafit",
      pageTitle: "Zeitplan",
      description: "Hier wird der Kursplan angezeigt. Unten ein Wochenbeispiel.",
      emptyMessage: "Zeitplan kommt bald",
      booked: "Belegt",
      available: "Verfügbar",
      slot1: "Montag 19:00 - Gruppentraining fuer Anfaenger",
      slot2: "Mittwoch 19:00 - Krafttraining",
      slot3: "Freitag 18:00 - Online Kurs"
    },
    contact: {
      title: "Kontakt — Natafit",
      pageTitle: "Kontakt",
      phone: "Tel: +7 (xxx) xxx-xx-xx",
      email: "E-Mail: info@natafit.example",
      address: "Adresse: Ihre Stadt, Beispielstraße 12",
      heading: "Kontaktieren Sie mich",
      phoneLabel: "Telefon",
      messengersLabel: "Messenger",
      footer: "Ich freue mich auf Ihre Nachricht! Antwort innerhalb von 24 Stunden."
    },
    services: {
      title: "Dienstleistungen — Natafit",
      pageTitle: "Dienstleistungen",
      personal: {
        title: "Einzeltraining",
        desc: "Individuelles Programm und Trainerbetreuung."
      },
      group: {
        title: "Gruppentraining",
        desc: "Freundliche Gruppe für Anfänger, kleine Gruppen."
      },
      online: {
        title: "Online-Programm",
        desc: "Heimtraining und Messenger-Unterstützung."
      }
    },
    programs: {
      title: "Unsere Programme",
      start: {
        title: "Start",
        desc: "Kurze Workouts 3 mal pro Woche, Grundtechnik."
      },
      strength: {
        title: "Kraft & Ausdauer",
        desc: "Programm zur schrittweisen Lastensteigerung."
      },
      online: {
        title: "Online-Betreuung",
        desc: "Persönliche Pläne und Beratung per Messenger."
      }
    },
    footer: {
      copyright: "Natafit — alle Rechte vorbehalten",
      phone: "Tel: +7 (xxx) xxx-xx-xx",
      demoVersion: "Demo-Version"
    },
    demo: {
      version: "Dies ist eine Demo-Version",
      workingVersion: "Die Arbeitsversion wird hier aktive Links haben"
    },
    theme: {
      light: "Hell",
      dark: "Dunkel"
    },
    contactForm: {
      title: "Kontaktformular",
      subtitle: "Hinterlassen Sie Ihre Kontaktdaten und ich melde mich bei Ihnen",
      name: "Ihr Name",
      phone: "Telefon",
      email: "E-Mail (optional)",
      message: "Nachricht",
      submit: "Senden",
      successMessage: "✓ Nachricht gesendet! Ich werde mich bald bei Ihnen melden.",
      nameError: "Bitte geben Sie Ihren Namen ein",
      phoneError: "Bitte geben Sie eine gültige Telefonnummer ein",
      emailError: "Bitte geben Sie eine gültige E-Mail ein",
      messageError: "Bitte geben Sie eine Nachricht ein (mindestens 10 Zeichen)"
    },
    admin: {
      loginTitle: "Administrator-Anmeldung",
      yourName: "Ihr Name",
      adminKey: "🔑 Administrator-Schlüssel",
      enterKey: "Geheimen Schlüssel eingeben",
      login: "Anmelden",
      invalidKey: "Ungültiger Administrator-Schlüssel",
      scheduleNav: "Zeitplan",
      clientsNav: "Kunden",
      clientsTitle: "Kundenverwaltung",
      addClient: "Kunde hinzufügen",
      totalClients: "Kunden insgesamt",
      newClients: "Neue diesen Monat",
      searchPlaceholder: "Suche nach Name, Telefon oder E-Mail..."
    },
    faq: {
      title: "Häufig gestellte Fragen",
      q1: {
        question: "Brauche ich spezielle Sportkleidung?",
        answer: "Nein, jede bequeme Sportkleidung ist geeignet. Hauptsache, Sie fühlen sich beim Bewegen wohl."
      },
      q2: {
        question: "Ist es für Anfänger geeignet?",
        answer: "Ja! Alle Programme sind an jedes Fitnessniveau angepasst. Wir beginnen mit grundlegenden Übungen und steigern die Belastung allmählich."
      },
      q3: {
        question: "Wie läuft die erste Trainingseinheit ab?",
        answer: "In der ersten Sitzung besprechen wir Ihre Ziele, überprüfen Ihr Fitnessniveau und erstellen einen individuellen Trainingsplan."
      },
      q4: {
        question: "Kann ich eine Trainingseinheit absagen oder verschieben?",
        answer: "Ja, informieren Sie mich einfach im Voraus (mindestens 24 Stunden) über WhatsApp, Telegram oder Telefon."
      },
      q5: {
        question: "Wie lange dauert eine Trainingseinheit?",
        answer: "Normalerweise 60 Minuten. Gruppensitzungen - 60-75 Minuten. Online-Beratungen - 30-45 Minuten."
      }
    }
  }
};