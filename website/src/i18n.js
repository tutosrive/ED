import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
        whatIs: '¿Qué es?',
        playground: 'Playground',
        license: 'Licencia'
      },
      home: {
        badge: 'Universidad de Caldas',
        title: 'ESTRUCTURAS DE DATOS',
        subtitle: 'Ingeniería de Sistemas y Computación',
        location: 'Manizales, Caldas - Colombia',
        explorePlayground: 'Explorar Playground',
        viewDocs: 'Ver Documentación',
        courseContent: 'Contenido del Curso',
        binaryTrees: 'Árboles Binarios',
        binaryTreesDesc: 'Implementación de BST (Binary Search Tree) con operaciones de inserción, búsqueda y eliminación.',
        graphs: 'Grafos',
        graphsDesc: 'Grafos dirigidos y no dirigidos con listas de adyacencia y visualización con NetworkX.',
        recursion: 'Recursividad',
        recursionDesc: 'Algoritmos recursivos: Binary Search, Factorial (LIFO/FIFO), Fibonacci con memorización.',
        interactivePlayground: 'Playground Interactivo',
        interactivePlaygroundDesc: 'Explora y ejecuta todos los códigos del curso en un editor interactivo en línea.',
        viewCode: 'Ver código',
        goToPlayground: 'Ir al Playground',
        notebooks: 'Notebooks',
        algorithms: 'Algoritmos',
        python: 'Python',
        learning: 'Aprendizaje'
      },
      about: {
        title: 'Acerca de',
        subtitle: 'Conoce más sobre este proyecto, los autores y la universidad',
        aboutCourse: 'Sobre el Curso',
        courseDesc1: 'Este repositorio contiene el material desarrollado durante el curso de',
        dataStructures: 'Estructuras de Datos',
        courseDesc2: ', una materia fundamental en la carrera de Ingeniería de Sistemas y Computación en la',
        credits: 'Créditos',
        student: 'Estudiante - 4to Semestre',
        studentRole: 'Desarrollo del código, talleres y tareas del curso.',
        professor: 'Docente del Curso',
        professorRole: 'Autor del código de explicaciones en clase (BST, Grafos).',
        university: 'Universidad de Caldas',
        universityDesc1: 'La Universidad de Caldas es una institución de educación superior pública ubicada en Manizales, Caldas, Colombia. Fundada en 1943, es una de las universidades más importantes de la región del Eje Cafetero.',
        universityDesc2: 'El programa de Ingeniería de Sistemas y Computación forma profesionales capaces de diseñar, desarrollar e implementar soluciones tecnológicas que respondan a las necesidades de la sociedad actual.',
        location: 'Ubicación',
        program: 'Programa',
        systemsEngineering: 'Ingeniería de Sistemas y Computación',
        subject: 'Materia',
        semester: 'Semestre',
        semesterValue: '4to Semestre',
        repository: 'Repositorio',
        repoDesc: 'Todo el código fuente de este proyecto está disponible en GitHub bajo la licencia GPL v3. Siéntete libre de explorar, aprender y contribuir.',
        viewRepo: 'Ver Repositorio',
        projectStructure: 'Estructura del Proyecto',
        topicsCovered: 'Temas Cubiertos',
        practiceNow: '¡Practica Ahora!',
        practiceDesc: 'Explora todos los códigos y algoritmos implementados en el playground interactivo.',
        goToPlayground: 'Ir al Playground'
      },
      whatIs: {
        title: '¿Qué son las Estructuras de Datos?',
        subtitle: 'Una introducción a los conceptos fundamentales de la informática',
        definition: 'Definición',
        definitionDesc1: 'Las Estructuras de Datos son formas organizadas de almacenar y gestionar datos en un computador para que puedan ser utilizados de manera eficiente.',
        definitionDesc2: 'Una estructura de datos no solo almacena información, sino que también define las operaciones que se pueden realizar sobre esos datos y la complejidad temporal de cada operación.',
        whyImportant: '¿Por qué son importantes?',
        efficiency: 'Eficiencia',
        efficiencyDesc: 'Permiten realizar operaciones de búsqueda, inserción y eliminación de manera óptima.',
        organization: 'Organización',
        organizationDesc: 'Facilitan la organización lógica de grandes cantidades de datos.',
        reuse: 'Reutilización',
        reuseDesc: 'Proporcionan soluciones probadas para problemas comunes.',
        abstraction: 'Abstracción',
        abstractionDesc: 'Permiten pensar en los datos de manera conceptual sin preocuparse por los detalles de implementación.',
        interviews: 'Entrevistas',
        interviewsDesc: 'Son un tema crucial en las entrevistas técnicas de empresas de tecnología.'
      },
      playground: {
        title: 'Playground',
        subtitle: 'Explora y edita todos los códigos del curso de Estructuras de Datos',
        files: 'Archivos',
        copy: 'Copiar',
        copied: 'Copiado!',
        run: 'Ejecutar',
        output: 'Salida',
        clear: 'Limpiar',
        author: 'Autor',
        welcome: 'Bienvenido al Playground de Estructuras de Datos',
        instructions: 'Para ejecutar el código:\n  1. Selecciona un archivo del panel izquierdo\n  2. Edita el código si lo deseas\n  3. El código tiene resaltado de sintaxis Python',
        explore: '¡Explora y aprende!'
      },
      license: {
        title: 'Licencia',
        subtitle: 'Este proyecto está licenciado bajo GNU General Public License v3',
        summary: 'Resumen de la Licencia',
        summaryDesc: 'Este proyecto está bajo la licencia GNU General Public License v3 (GPL-3.0), una licencia de software libre copyleft que garantiza las siguientes libertades:',
        freedomUse: 'Libertad de uso',
        freedomUseDesc: 'Puedes usar el software para cualquier propósito.',
        freedomStudy: 'Libertad de estudio',
        freedomStudyDesc: 'Puedes estudiar cómo funciona el programa y adaptarlo a tus necesidades.',
        freedomDistribute: 'Libertad de distribución',
        freedomDistributeDesc: 'Puedes redistribuir copias del software.',
        freedomImprove: 'Libertad de mejora',
        freedomImproveDesc: 'Puedes mejorar el programa y publicar tus mejoras.',
        conditions: 'Condiciones',
        sourceDisclosure: 'Divulgación del código fuente',
        sourceDisclosureDesc: 'Si distribuyes el software, debes hacerlo con el código fuente o proporcionar acceso a él.',
        sameLicense: 'Misma licencia',
        sameLicenseDesc: 'Las obras derivadas deben distribuirse bajo la misma licencia GPL-3.0.',
        copyrightNotice: 'Avisos de copyright',
        copyrightNoticeDesc: 'Debes mantener los avisos de copyright y licencia originales.',
        documentChanges: 'Documentar cambios',
        documentChangesDesc: 'Debes documentar los cambios significativos realizados al software.',
        permissions: 'Permisos',
        commercialUse: 'Uso comercial',
        modification: 'Modificación',
        distribution: 'Distribución',
        patentUse: 'Uso de patentes',
        privateUse: 'Uso privado',
        limitations: 'Limitaciones',
        noWarranty: 'Sin garantía',
        noLiability: 'Sin responsabilidad',
        fullText: 'Texto Completo de la Licencia',
        fullTextDesc: 'A continuación se muestra el texto completo de la licencia obtenido del repositorio.',
        loading: 'Cargando licencia...',
        error: 'Error al cargar la licencia',
        viewOnGnu: 'Ver Licencia Completa en GNU.org',
        creditsAttribution: 'Créditos y Atribución',
        creditsDesc: 'Este proyecto fue desarrollado como parte del curso de Estructuras de Datos en la Universidad de Caldas.'
      },
      footer: {
        credits: 'Créditos',
        student: 'Estudiante - 4to Semestre',
        professor: 'Docente del curso',
        university: 'Universidad',
        repository: 'Repositorio'
      },
      categories: {
        workshop: 'Taller 1 - Recursividad',
        teacher: 'Explicaciones - Profesor',
        homework: 'Tareas'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        whatIs: 'What is?',
        playground: 'Playground',
        license: 'License'
      },
      home: {
        badge: 'University of Caldas',
        title: 'DATA STRUCTURES',
        subtitle: 'Systems and Computer Engineering',
        location: 'Manizales, Caldas - Colombia',
        explorePlayground: 'Explore Playground',
        viewDocs: 'View Documentation',
        courseContent: 'Course Content',
        binaryTrees: 'Binary Trees',
        binaryTreesDesc: 'BST (Binary Search Tree) implementation with insert, search and delete operations.',
        graphs: 'Graphs',
        graphsDesc: 'Directed and undirected graphs with adjacency lists and NetworkX visualization.',
        recursion: 'Recursion',
        recursionDesc: 'Recursive algorithms: Binary Search, Factorial (LIFO/FIFO), Fibonacci with memoization.',
        interactivePlayground: 'Interactive Playground',
        interactivePlaygroundDesc: 'Explore and run all course codes in an online interactive editor.',
        viewCode: 'View code',
        goToPlayground: 'Go to Playground',
        notebooks: 'Notebooks',
        algorithms: 'Algorithms',
        python: 'Python',
        learning: 'Learning'
      },
      about: {
        title: 'About',
        subtitle: 'Learn more about this project, the authors and the university',
        aboutCourse: 'About the Course',
        courseDesc1: 'This repository contains the material developed during the',
        dataStructures: 'Data Structures',
        courseDesc2: ' course, a fundamental subject in the Systems and Computer Engineering program at the',
        credits: 'Credits',
        student: 'Student - 4th Semester',
        studentRole: 'Code development, workshops and course assignments.',
        professor: 'Course Professor',
        professorRole: 'Author of class explanation code (BST, Graphs).',
        university: 'University of Caldas',
        universityDesc1: 'The University of Caldas is a public higher education institution located in Manizales, Caldas, Colombia. Founded in 1943, it is one of the most important universities in the Coffee Region.',
        universityDesc2: 'The Systems and Computer Engineering program trains professionals capable of designing, developing and implementing technological solutions that respond to the needs of today\'s society.',
        location: 'Location',
        program: 'Program',
        systemsEngineering: 'Systems and Computer Engineering',
        subject: 'Subject',
        semester: 'Semester',
        semesterValue: '4th Semester',
        repository: 'Repository',
        repoDesc: 'All source code for this project is available on GitHub under the GPL v3 license. Feel free to explore, learn and contribute.',
        viewRepo: 'View Repository',
        projectStructure: 'Project Structure',
        topicsCovered: 'Topics Covered',
        practiceNow: 'Practice Now!',
        practiceDesc: 'Explore all codes and algorithms implemented in the interactive playground.',
        goToPlayground: 'Go to Playground'
      },
      whatIs: {
        title: 'What are Data Structures?',
        subtitle: 'An introduction to fundamental computer science concepts',
        definition: 'Definition',
        definitionDesc1: 'Data Structures are organized ways of storing and managing data in a computer so that they can be used efficiently.',
        definitionDesc2: 'A data structure not only stores information, but also defines the operations that can be performed on that data and the time complexity of each operation.',
        whyImportant: 'Why are they important?',
        efficiency: 'Efficiency',
        efficiencyDesc: 'They allow search, insertion and deletion operations to be performed optimally.',
        organization: 'Organization',
        organizationDesc: 'They facilitate the logical organization of large amounts of data.',
        reuse: 'Reuse',
        reuseDesc: 'They provide proven solutions for common problems.',
        abstraction: 'Abstraction',
        abstractionDesc: 'They allow thinking about data conceptually without worrying about implementation details.',
        interviews: 'Interviews',
        interviewsDesc: 'They are a crucial topic in technical interviews at tech companies.'
      },
      playground: {
        title: 'Playground',
        subtitle: 'Explore and edit all Data Structures course codes',
        files: 'Files',
        copy: 'Copy',
        copied: 'Copied!',
        run: 'Run',
        output: 'Output',
        clear: 'Clear',
        author: 'Author',
        welcome: 'Welcome to the Data Structures Playground',
        instructions: 'To run the code:\n  1. Select a file from the left panel\n  2. Edit the code if you wish\n  3. The code has Python syntax highlighting',
        explore: 'Explore and learn!'
      },
      license: {
        title: 'License',
        subtitle: 'This project is licensed under GNU General Public License v3',
        summary: 'License Summary',
        summaryDesc: 'This project is under the GNU General Public License v3 (GPL-3.0), a copyleft free software license that guarantees the following freedoms:',
        freedomUse: 'Freedom to use',
        freedomUseDesc: 'You can use the software for any purpose.',
        freedomStudy: 'Freedom to study',
        freedomStudyDesc: 'You can study how the program works and adapt it to your needs.',
        freedomDistribute: 'Freedom to distribute',
        freedomDistributeDesc: 'You can redistribute copies of the software.',
        freedomImprove: 'Freedom to improve',
        freedomImproveDesc: 'You can improve the program and publish your improvements.',
        conditions: 'Conditions',
        sourceDisclosure: 'Source code disclosure',
        sourceDisclosureDesc: 'If you distribute the software, you must do so with the source code or provide access to it.',
        sameLicense: 'Same license',
        sameLicenseDesc: 'Derivative works must be distributed under the same GPL-3.0 license.',
        copyrightNotice: 'Copyright notices',
        copyrightNoticeDesc: 'You must maintain the original copyright and license notices.',
        documentChanges: 'Document changes',
        documentChangesDesc: 'You must document significant changes made to the software.',
        permissions: 'Permissions',
        commercialUse: 'Commercial use',
        modification: 'Modification',
        distribution: 'Distribution',
        patentUse: 'Patent use',
        privateUse: 'Private use',
        limitations: 'Limitations',
        noWarranty: 'No warranty',
        noLiability: 'No liability',
        fullText: 'Full License Text',
        fullTextDesc: 'Below is the full text of the license obtained from the repository.',
        loading: 'Loading license...',
        error: 'Error loading license',
        viewOnGnu: 'View Full License on GNU.org',
        creditsAttribution: 'Credits and Attribution',
        creditsDesc: 'This project was developed as part of the Data Structures course at the University of Caldas.'
      },
      footer: {
        credits: 'Credits',
        student: 'Student - 4th Semester',
        professor: 'Course Professor',
        university: 'University',
        repository: 'Repository'
      },
      categories: {
        workshop: 'Workshop 1 - Recursion',
        teacher: 'Explanations - Professor',
        homework: 'Homework'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        whatIs: 'O que é?',
        playground: 'Playground',
        license: 'Licença'
      },
      home: {
        badge: 'Universidade de Caldas',
        title: 'ESTRUTURAS DE DADOS',
        subtitle: 'Engenharia de Sistemas e Computação',
        location: 'Manizales, Caldas - Colômbia',
        explorePlayground: 'Explorar Playground',
        viewDocs: 'Ver Documentação',
        courseContent: 'Conteúdo do Curso',
        binaryTrees: 'Árvores Binárias',
        binaryTreesDesc: 'Implementação de BST (Binary Search Tree) com operações de inserção, busca e exclusão.',
        graphs: 'Grafos',
        graphsDesc: 'Grafos dirigidos e não dirigidos com listas de adjacência e visualização com NetworkX.',
        recursion: 'Recursividade',
        recursionDesc: 'Algoritmos recursivos: Binary Search, Fatorial (LIFO/FIFO), Fibonacci com memorização.',
        interactivePlayground: 'Playground Interativo',
        interactivePlaygroundDesc: 'Explore e execute todos os códigos do curso em um editor interativo online.',
        viewCode: 'Ver código',
        goToPlayground: 'Ir para Playground',
        notebooks: 'Notebooks',
        algorithms: 'Algoritmos',
        python: 'Python',
        learning: 'Aprendizado'
      },
      footer: {
        credits: 'Créditos',
        student: 'Estudante - 4º Semestre',
        professor: 'Professor do curso',
        university: 'Universidade',
        repository: 'Repositório'
      },
      categories: {
        workshop: 'Oficina 1 - Recursividade',
        teacher: 'Explicações - Professor',
        homework: 'Tarefas'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        whatIs: 'Qu\'est-ce que c\'est?',
        playground: 'Playground',
        license: 'Licence'
      },
      home: {
        badge: 'Université de Caldas',
        title: 'STRUCTURES DE DONNÉES',
        subtitle: 'Ingénierie des Systèmes et Informatique',
        location: 'Manizales, Caldas - Colombie',
        explorePlayground: 'Explorer le Playground',
        viewDocs: 'Voir la Documentation',
        courseContent: 'Contenu du Cours'
      },
      footer: {
        credits: 'Crédits',
        student: 'Étudiant - 4ème Semestre',
        professor: 'Professeur du cours',
        university: 'Université',
        repository: 'Dépôt'
      },
      categories: {
        workshop: 'Atelier 1 - Récursivité',
        teacher: 'Explications - Professeur',
        homework: 'Devoirs'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        about: 'Über uns',
        whatIs: 'Was ist?',
        playground: 'Playground',
        license: 'Lizenz'
      },
      home: {
        badge: 'Universität Caldas',
        title: 'DATENSTRUKTUREN',
        subtitle: 'System- und Computertechnik',
        location: 'Manizales, Caldas - Kolumbien',
        explorePlayground: 'Playground erkunden',
        viewDocs: 'Dokumentation anzeigen',
        courseContent: 'Kursinhalt'
      },
      footer: {
        credits: 'Credits',
        student: 'Student - 4. Semester',
        professor: 'Dozent',
        university: 'Universität',
        repository: 'Repository'
      },
      categories: {
        workshop: 'Workshop 1 - Rekursion',
        teacher: 'Erklärungen - Professor',
        homework: 'Hausaufgaben'
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О проекте',
        whatIs: 'Что это?',
        playground: 'Playground',
        license: 'Лицензия'
      },
      home: {
        badge: 'Университет Калдас',
        title: 'СТРУКТУРЫ ДАННЫХ',
        subtitle: 'Системная и компьютерная инженерия',
        location: 'Манисалес, Калдас - Колумбия',
        explorePlayground: 'Открыть Playground',
        viewDocs: 'Документация',
        courseContent: 'Содержание курса'
      },
      footer: {
        credits: 'Авторы',
        student: 'Студент - 4 семестр',
        professor: 'Преподаватель',
        university: 'Университет',
        repository: 'Репозиторий'
      },
      categories: {
        workshop: 'Семинар 1 - Рекурсия',
        teacher: 'Объяснения - Профессор',
        homework: 'Домашние задания'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'حول',
        whatIs: 'ما هذا؟',
        playground: 'ملعب البرمجة',
        license: 'الترخيص'
      },
      home: {
        badge: 'جامعة كالداس',
        title: 'هياكل البيانات',
        subtitle: 'هندسة النظم والحاسوب',
        location: 'مانيزاليس، كالداس - كولومبيا',
        explorePlayground: 'استكشف الملعب',
        viewDocs: 'عرض الوثائق',
        courseContent: 'محتوى الدورة'
      },
      footer: {
        credits: 'الاعتمادات',
        student: 'طالب - الفصل الرابع',
        professor: 'أستاذ المقرر',
        university: 'الجامعة',
        repository: 'المستودع'
      },
      categories: {
        workshop: 'ورشة 1 - التكرار',
        teacher: 'شروحات - الأستاذ',
        homework: 'الواجبات'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
