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
      'Collaborated within a cross-functional 8-person team to develop a microservices-based Unified Communications platform serving over 60,000 daily users.',
      'Built and maintained a Node.js Express REST API that served as a gateway for internal systems to perform user and tenant management operations on MongoDB databases.',
      'Developed a responsive Angular admin dashboard that interfaced with backend APIs, providing administrators with essential tools for platform monitoring and configuration.',
      'Created Jenkins pipelines to automate end-to-end test suites execution, performing daily result analysis to identify and resolve quality issues.',
      'Improved CI/CD workflows by integrating automated notifications that alert teams of build events through internal collaboration tools.'
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
      'Conducted manual and regression testing for enterprise-level collaboration and customer service software, identifying over 150 critical defects efficiently tracked via Jira',
      'Designed and maintained reliable test automation frameworks, developing over 500 test cases for web, Android, and iOS platforms, significantly reducing manual testing effort and improving overall efficiency',
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
