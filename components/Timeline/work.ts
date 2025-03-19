export type WorkExperience = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  image: { path: string; alt: string };
};

export const workExperience: WorkExperience[] = [
  {
    title: 'Software Enginner',
    company: 'Mitel Networks Corp.',
    period: 'October 2023 - Present',
    bullets: [
      'Contributed to the development of a Node.js REST API enabling internal telecom systems to efficiently manage users and tenants in non-relational databases, streamlining backend operations.',
      'Led testing efforts for newly released features, including manual testing and automating 70% of test cases with Selenium, providing immediate quality feedback during software releases',
      'Resolved production defects of varying priority in an Angular based softphone application, enhancing system reliability and user experience for over 60,000 daily users.',
      'Built and maintained Jenkins pipelines for test automation suites, performing daily result analysis to identify issues and optimize test performance',
    ],
    image: {
      path: '/mitel-logo-60.png',
      alt: 'Mitel Logo',
    },
  },
  {
    title: 'Quality Assurance Engineer',
    company: 'Atos Unify (Now part of Mitel)',
    period: 'June 2022 - October 2023',
    bullets: [
      'Conducted comprehensive manual and regression testing  for enterprise-level  collaboration and customer service software, identifying over 150 critical defects efficiently tracked via Jira.',
      'Designed and maintained reliable test automation frameworks, developing over 500 test cases for web, Android, and iOS platforms, significantly reducing manual testing effort and improving overall efficiency.',
      'Managed the test environments for internal telecom systems (PBXs), including deployment, configuration and user provisioning, ensuring system stability for testing workflows.',
    ],
    image: {
      path: '/atos-logo-60.png',
      alt: 'Atos Logo',
    },
  },
  {
    title: 'IT Technical Support - Internship',
    company: 'Onex Technologies',
    period: 'November 2021 - April 2022',
    bullets: [
      'Installed and maintained deterrent parking sensors preventing unauthorized parking, improving pedestrian safety and accessibility.',
      'Assisted in the user interface development of an internal mobile application designed for employee office access.',
      'Managed distribution of android devices to covid-19 vaccination centers and provided technical support to ensure proper usage.',
    ],
    image: {
      path: '/onex-logo-60.png',
      alt: 'Onex Logo',
    },
  },
];
