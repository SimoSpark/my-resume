export type Lang = 'en' | 'de'

export const t = {
  en: {
    title: 'Full Stack Developer',
    phone: '+212 671 599 936',
    email: 'mohamedoukhajou@gmail.com',
    github: 'github.com/SimoSpark',
    linkedin: 'linkedin.com/in/Mohamed-OUKHAJOU',
    location: 'Agadir, Morocco',
    available: 'Open to internship opportunities',

    profile: {
      label: 'Profile',
      text: 'Computer Engineering graduate (DUT) with hands-on experience in full-stack web development using React, Next.js, PHP and Spring Boot. Currently seeking an Ausbildung opportunity in Germany to deepen my technical skills and contribute to innovative projects. German level B1 (OSD Certificate).',
    },

    experience: {
      label: 'Experience',
      items: [
        {
          company: 'Modoock Solutions',
          role: 'Full Stack Developer Intern — PFA',
          period: 'Apr 2025 – Sep 2025',
          location: 'Marrakech, Morocco',
          bullets: [
            'Built a centralised hospital management platform: patient records, dynamic report generation and a bed management system.',
            'Designed and maintained complex relational databases (MySQL, PostgreSQL) for centralising client and patient data.',
            'Created an interactive dashboard with React.js, integrating real-time data updates and customisable report exports.',
            'Worked in an Agile team environment, delivering features on schedule through close collaboration with the product team.',
          ],
          stack: 'Next.js · TipTap · MySQL · PostgreSQL · Full-Stack Development',
        },
        {
          company: 'EBF — Emerging Business Factory',
          role: 'Front-End Developer Intern',
          period: 'Aug 2024 · 1 month',
          location: 'Marrakech, Morocco',
          bullets: [
            'Developed a product and order management application with a fully responsive, accessible user interface.',
            'Designed UI mockups and interactive prototypes in Figma prior to development.',
            'Built an interactive dashboard using React.js with live data feeds and component-driven architecture.',
            'Managed version control and team collaboration workflows via Git and GitLab.',
          ],
          stack: 'React.js · Figma · Git · GitLab',
        },
      ],
    },

    education: {
      label: 'Education',
      items: [
        {
          institution: 'École Supérieure de Technologie — Guelmim',
          degree: 'DUT, Computer Engineering (Génie Informatique)',
          period: '2023 – 2025',
          note: 'Full-stack web development, databases, networks, UML, system architecture.',
        },
        {
          institution: 'Faculté Polydisciplinaire — Ouarzazate',
          degree: 'University Foundation Year, Physical Sciences',
          period: '2022 – 2023',
          note: '',
        },
        {
          institution: 'Lycée Tarik Ibn Ziad',
          degree: 'Baccalauréat, Physical Sciences — French option',
          period: '2022',
          note: 'Graduated with Honours (Mention Bien)',
        },
      ],
    },

    skills: {
      label: 'Skills',
      groups: [
        { label: 'Frontend', items: 'React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, TailwindCSS' },
        { label: 'Backend', items: 'PHP, Spring Boot, Java, Node.js, REST APIs' },
        { label: 'Database', items: 'MySQL, PostgreSQL, PL/SQL' },
        { label: 'Tools', items: 'Git, GitHub, GitLab, Figma, UML, Linux, VS Code, IntelliJ IDEA, Android Studio' },
        { label: 'Languages', items: 'Tamazight (Native), Arabic (Native), French (C1), English (B2), German (B1 — OSD Certificate)' },
      ],
    },

    projects: {
      label: 'Projects',
      items: [
        {
          name: 'Appointment Platform (PFE)',
          period: 'Dec 2024 – Mar 2025',
          desc: 'Centralised web application for booking appointments across healthcare, education and home services. Intuitive interface with full user and service management.',
          stack: 'React.js · Next.js · TailwindCSS · Hygraph · Descope',
        },
       
      ],
    },

    interests: {
      label: 'Interests',
      items: 'Astronomy, Rock Climbing, Open-source development, Technology watch',
    },
  },

  de: {
    title: 'Full Stack Entwickler',
    phone: '+212 671 599 936',
    email: 'mohamedoukhajou@gmail.com',
    github: 'github.com/SimoSpark',
    linkedin: 'linkedin.com/in/Mohamed-OUKHAJOU',
    location: 'Agadir, Marokko',
    available: 'Offen für Praktikumsangebote',

    profile: {
      label: 'Profil',
      text: 'Absolvent der Informatikingenieurwissenschaften (DUT) mit praktischer Erfahrung in der Full-Stack-Webentwicklung mit React, Next.js, PHP und Spring Boot. Ich suche aktuell eine Ausbildungsstelle in Deutschland, um meine technischen Fähigkeiten weiterzuentwickeln und an innovativen Projekten mitzuwirken. Deutschkenntnisse: B1 (OSD-Zertifikat).',
    },

    experience: {
      label: 'Berufserfahrung',
      items: [
        {
          company: 'Modoock Solutions',
          role: 'Full Stack Entwickler Praktikant — PFA',
          period: 'Apr 2025 – Sep 2025',
          location: 'Marrakesch, Marokko',
          bullets: [
            'Entwicklung einer zentralisierten Krankenhausverwaltungsplattform: Patientenakten, dynamische Berichterstellung und Bettenmanagement-System.',
            'Entwurf und Pflege komplexer relationaler Datenbanken (MySQL, PostgreSQL) zur Zentralisierung von Kunden- und Patientendaten.',
            'Erstellung eines interaktiven Dashboards mit React.js, Integration von Echtzeit-Datenaktualisierungen und anpassbaren Berichtsexporten.',
            'Arbeit in einem agilen Team mit termingerechter Feature-Lieferung in enger Zusammenarbeit mit dem Produktteam.',
          ],
          stack: 'Next.js · TipTap · MySQL · PostgreSQL · Full-Stack Development',
        },
        {
          company: 'EBF — Emerging Business Factory',
          role: 'Frontend Entwickler Praktikant',
          period: 'Aug 2024 · 1 Monat',
          location: 'Marrakesch, Marokko',
          bullets: [
            'Entwicklung einer Produkt- und Auftragsverwaltungsanwendung mit vollständig responsiver, barrierefreier Benutzeroberfläche.',
            'Gestaltung von UI-Mockups und interaktiven Prototypen in Figma vor der Implementierung.',
            'Aufbau eines interaktiven Dashboards mit React.js, Live-Datenfeeds und komponentenbasierter Architektur.',
            'Versionsverwaltung und Teamkollaborations-Workflows mit Git und GitLab.',
          ],
          stack: 'React.js · Figma · Git · GitLab',
        },
      ],
    },

    education: {
      label: 'Ausbildung',
      items: [
        {
          institution: 'École Supérieure de Technologie — Guelmim',
          degree: 'DUT, Informatikingenieurwesen (Génie Informatique)',
          period: '2023 – 2025',
          note: 'Full-Stack-Webentwicklung, Datenbanken, Netzwerke, UML, Systemarchitektur.',
        },
        {
          institution: 'Faculté Polydisciplinaire — Ouarzazate',
          degree: 'Hochschulvorbereitungsjahr, Physikalische Wissenschaften',
          period: '2022 – 2023',
          note: '',
        },
        {
          institution: 'Lycée Tarik Ibn Ziad',
          degree: 'Abitur, Physikalische Wissenschaften — Französische Option',
          period: '2022',
          note: 'Abschluss mit Auszeichnung (Gesamtnote: Gut)',
        },
      ],
    },

    skills: {
      label: 'Kenntnisse',
      groups: [
        { label: 'Frontend', items: 'React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, TailwindCSS' },
        { label: 'Backend', items: 'PHP, Spring Boot, Java, Node.js, REST APIs' },
        { label: 'Datenbank', items: 'MySQL, PostgreSQL, PL/SQL' },
        { label: 'Tools', items: 'Git, GitHub, GitLab, Figma, UML, Linux, VS Code, IntelliJ IDEA, Android Studio' },
        { label: 'Sprachen', items: 'Tamazight (Muttersprache), Arabisch (Muttersprache), Französisch (C1), Englisch (B2), Deutsch (B1 — OSD-Zertifikat)' },
      ],
    },

    projects: {
      label: 'Projekte',
      items: [
        {
          name: 'Terminbuchungsplattform (PFE)',
          period: 'Dez 2024 – Mär 2025',
          desc: 'Zentralisierte Webanwendung zur Terminbuchung in den Bereichen Gesundheit, Bildung und Haushaltsdienstleistungen. Intuitive Oberfläche mit vollständiger Benutzer- und Dienstverwaltung.',
          stack: 'React.js · Next.js · TailwindCSS · Hygraph · Descope',
        },
        
      ],
    },

    interests: {
      label: 'Interessen',
      items: 'Astronomie, Klettern, Open-Source-Entwicklung, Technologie-Beobachtung',
    },
  },
}
