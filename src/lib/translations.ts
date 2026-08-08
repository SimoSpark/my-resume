export type Lang = 'en' | 'de'

export interface Translations {
  nav: {
    about: string
    experience: string
    education: string
    skills: string
    contact: string
    downloadCV: string
  }
  hero: {
    greeting: string
    title: string
    subtitle: string
    cta: string
  }
  about: {
    title: string
    paragraph: string
  }
  experience: {
    title: string
    present: string
    skills: string
    items: {
      company: string
      role: string
      period: string
      location: string
      bullets: string[]
      tags: string[]
    }[]
  }
  education: {
    title: string
    items: {
      institution: string
      degree: string
      period: string
      detail?: string
    }[]
  }
  skills: {
    title: string
    categories: {
      label: string
      items: string[]
    }[]
  }
  contact: {
    title: string
    subtitle: string
  }
  footer: {
    built: string
  }
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    hero: {
      greeting: "Hello, I'm",
      title: 'Full Stack Developer',
      subtitle:
        'Computer Engineering graduate passionate about web development and modern technologies. I build scalable, efficient web applications and am always exploring new tools to deliver impactful results.',
      cta: 'View My Work',
    },
    about: {
      title: 'About Me',
      paragraph:
        "I'm a Full Stack Developer with a DUT in Computer Engineering from École Supérieure de Technologie Guelmim. My expertise spans the full web development stack — from crafting intuitive user interfaces with React and Next.js to building robust backends with PHP and Spring Boot. I'm driven by clean code, collaborative teams, and meaningful products that solve real problems. Currently seeking a 4+ month full-stack internship to grow and contribute to innovative projects.",
    },
    experience: {
      title: 'Experience',
      present: 'Present',
      skills: 'Skills',
      items: [
        {
          company: 'Modoock Solutions',
          role: 'Full Stack Developer Intern (PFA)',
          period: 'April 2025 – September 2025',
          location: 'Marrakech, Morocco',
          bullets: [
            'Built a full-stack hospital management system including dynamic patient data management, report generation, and a bed management module.',
            'Designed and managed complex relational databases for centralizing client and patient information.',
            'Created interactive dashboards using React.js with real-time data updates and customizable report exports.',
            'Collaborated closely with the product team in an Agile environment to deliver features on schedule.',
          ],
          tags: ['Next.js', 'TipTap', 'MySQL', 'PostgreSQL', 'Full-Stack'],
        },
        {
          company: 'EBF (Emerging Business Factory)',
          role: 'Front-End Developer Intern',
          period: 'August 2024',
          location: 'Marrakech, Morocco',
          bullets: [
            'Developed a product and order management application with a responsive, accessible UI.',
            'Designed user interface mockups and prototypes in Figma before implementation.',
            'Built an interactive dashboard with React.js, integrating live data feeds.',
            'Managed version control and collaboration workflows using Git and GitLab.',
          ],
          tags: ['React.js', 'Figma', 'Git', 'GitLab', 'Teamwork'],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          institution: 'École Supérieure de Technologie Guelmim',
          degree: 'DUT – Computer Engineering (Génie Informatique)',
          period: '2023 – 2025',
          detail: 'Specialization in full-stack web development, databases, and computer networks.',
        },
        {
          institution: 'Faculté Polydisciplinaire, Ouarzazate',
          degree: 'University Year – Physical Sciences',
          period: '2022 – 2023',
        },
        {
          institution: 'Lycée Tarik Ibn Ziad',
          degree: 'Baccalauréat – Physical Sciences (French option)',
          period: '2021 – 2022',
          detail: 'Graduated with Honours (Mention Bien)',
        },
      ],
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          label: 'Frontend',
          items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'XML'],
        },
        {
          label: 'Backend',
          items: ['PHP', 'Spring Boot', 'Java', 'JavaFX', 'Node.js', 'REST APIs'],
        },
        {
          label: 'Database',
          items: ['MySQL', 'PostgreSQL', 'PL/SQL'],
        },
        {
          label: 'Tools & Design',
          items: ['Git', 'GitHub', 'GitLab', 'Figma', 'UML', 'Linux', 'VS Code', 'IntelliJ IDEA'],
        },
        {
          label: 'Languages',
          items: ['Tamazight (Native)', 'Arabic (Native)', 'French (Professional)', 'English (Professional)', 'German (Intermediate)'],
        },
      ],
    },
    contact: {
      title: "Let's Connect",
      subtitle: "I'm open to internship opportunities, collaborations, and interesting projects. Feel free to reach out!",
    },
    footer: {
      built: 'Built with Next.js & Tailwind CSS',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      education: 'Ausbildung',
      skills: 'Fähigkeiten',
      contact: 'Kontakt',
      downloadCV: 'CV herunterladen',
    },
    hero: {
      greeting: 'Hallo, ich bin',
      title: 'Full Stack Entwickler',
      subtitle:
        'Absolvent der Informatikingenieurwissenschaften mit Leidenschaft für Webentwicklung und moderne Technologien. Ich entwickle skalierbare, effiziente Webanwendungen und erkunde stets neue Tools, um beeindruckende Ergebnisse zu liefern.',
      cta: 'Meine Arbeit ansehen',
    },
    about: {
      title: 'Über mich',
      paragraph:
        'Ich bin ein Full Stack Entwickler mit einem DUT in Informatikingenieurwesen von der École Supérieure de Technologie Guelmim. Meine Expertise erstreckt sich über den gesamten Web-Stack — von intuitiven Benutzeroberflächen mit React und Next.js bis hin zu robusten Backends mit PHP und Spring Boot. Sauberer Code, kollaborative Teams und sinnvolle Produkte motivieren mich täglich. Ich suche aktuell ein Vollzeit-Praktikum (4+ Monate) im Full-Stack-Bereich, um meine Fähigkeiten auszubauen.',
    },
    experience: {
      title: 'Berufserfahrung',
      present: 'Heute',
      skills: 'Technologien',
      items: [
        {
          company: 'Modoock Solutions',
          role: 'Full Stack Entwickler Praktikant (PFA)',
          period: 'April 2025 – September 2025',
          location: 'Marrakesch, Marokko',
          bullets: [
            'Entwicklung eines vollständigen Krankenhausverwaltungssystems mit dynamischem Patientendatenmanagement, Berichterstellung und Bettenmanagement.',
            'Entwurf und Verwaltung komplexer relationaler Datenbanken zur Zentralisierung von Kunden- und Patienteninformationen.',
            'Erstellung interaktiver Dashboards mit React.js mit Echtzeit-Datenaktualisierungen und anpassbaren Berichten.',
            'Enge Zusammenarbeit mit dem Produktteam in einer agilen Umgebung zur termingerechten Lieferung von Features.',
          ],
          tags: ['Next.js', 'TipTap', 'MySQL', 'PostgreSQL', 'Full-Stack'],
        },
        {
          company: 'EBF (Emerging Business Factory)',
          role: 'Frontend Entwickler Praktikant',
          period: 'August 2024',
          location: 'Marrakesch, Marokko',
          bullets: [
            'Entwicklung einer Produkt- und Auftragsverwaltungsanwendung mit responsiver, barrierefreier Benutzeroberfläche.',
            'Gestaltung von UI-Mockups und Prototypen in Figma vor der Implementierung.',
            'Aufbau eines interaktiven Dashboards mit React.js und Integration von Live-Datenfeeds.',
            'Versionskontrolle und kollaborative Workflows mit Git und GitLab.',
          ],
          tags: ['React.js', 'Figma', 'Git', 'GitLab', 'Teamwork'],
        },
      ],
    },
    education: {
      title: 'Ausbildung',
      items: [
        {
          institution: 'École Supérieure de Technologie Guelmim',
          degree: 'DUT – Informatikingenieurwesen (Génie Informatique)',
          period: '2023 – 2025',
          detail: 'Schwerpunkt: Full-Stack-Webentwicklung, Datenbanken und Computernetzwerke.',
        },
        {
          institution: 'Faculté Polydisciplinaire, Ouarzazate',
          degree: 'Hochschuljahr – Physikalische Wissenschaften',
          period: '2022 – 2023',
        },
        {
          institution: 'Lycée Tarik Ibn Ziad',
          degree: 'Abitur – Physikalische Wissenschaften (Französische Option)',
          period: '2021 – 2022',
          detail: 'Abschluss mit Auszeichnung (Mention Bien)',
        },
      ],
    },
    skills: {
      title: 'Fähigkeiten',
      categories: [
        {
          label: 'Frontend',
          items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'XML'],
        },
        {
          label: 'Backend',
          items: ['PHP', 'Spring Boot', 'Java', 'JavaFX', 'Node.js', 'REST APIs'],
        },
        {
          label: 'Datenbank',
          items: ['MySQL', 'PostgreSQL', 'PL/SQL'],
        },
        {
          label: 'Tools & Design',
          items: ['Git', 'GitHub', 'GitLab', 'Figma', 'UML', 'Linux', 'VS Code', 'IntelliJ IDEA'],
        },
        {
          label: 'Sprachen',
          items: ['Tamazight (Muttersprache)', 'Arabisch (Muttersprache)', 'Französisch (Beruflich)', 'Englisch (Beruflich)', 'Deutsch (Mittelstufe)'],
        },
      ],
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Ich bin offen für Praktikumsmöglichkeiten, Kooperationen und interessante Projekte. Schreiben Sie mir gerne!',
    },
    footer: {
      built: 'Erstellt mit Next.js & Tailwind CSS',
    },
  },
}
