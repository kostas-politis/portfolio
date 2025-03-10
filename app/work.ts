export type WorkExperience = {
  title: string;
  company: string;
  bullets: string[];
  image: { path: string; alt: string };
};

export const workExperience: WorkExperience[] = [
  {
    title: 'Software Enginner',
    company: 'Mitel Networks Corp.',
    bullets: [
      'Resolved critical defects in a web-based softphone application.',
      'Contributed to the development of a Node.js REST API managing users and tenants',
      'Led testing efforts for newly released features, including manual testing and automating 70% of test cases with Selenium, providing immediate quality feedback during software releases.',
      'Engineered a call audio assessment tool that enhanced end-to-end test executions, extending beyond traditional GUI testing to include realtime call performance between clients.',
      'Built and maintained Jenkins pipelines for test automation suites, performing daily result analysis to identify issues and optimize test performance.',
    ],
    image: {
      path: '/mitel-logo-60.png',
      alt: 'Mitel Logo',
    },
  },
  {
    title: 'Software Enginner',
    company: 'Mitel Networks Corp.',
    bullets: [
      'Resolved critical defects in a web-based softphone application.',
      'Contributed to the development of a Node.js REST API managing users and tenants',
      'Led testing efforts for newly released features, including manual testing and automating 70% of test cases with Selenium, providing immediate quality feedback during software releases.',
      'Built and maintained Jenkins pipelines for test automation suites, performing daily result analysis to identify issues and optimize test performance.',
    ],
    image: {
      path: '/atos-logo-60.png',
      alt: 'Atos Logo',
    },
  },
  {
    title: 'Software Enginner',
    company: 'Mitel Networks Corp.',
    bullets: [
      'Built and maintained Jenkins pipelines for test automation suites, performing daily result analysis to identify issues and optimize test performance.',
    ],
    image: {
      path: '/mitel-logo-60.png',
      alt: 'Mitel Logo',
    },
  },
];
