/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Esri Lebanon',
    position: 'Backend Developer Intern',
    url: 'https://www.EsriLebanon.com',
    startDate: '2024-07-01',
    endDate: '2024-08-01',
    summary: `Developed the database and backend for the Training Management System (TMS) using TypeScript and Express. 
    Implemented administrative tools for managing training sessions and tracking trainee progress. 
    Optimized backend processes for scalability and efficiency, handling large datasets seamlessly.`,
    highlights: [
      'Developed and optimized the Training Management System (TMS) backend.',
      'Implemented tools for session management and trainee tracking.',
      'Improved scalability and efficiency of backend processes.',
    ],
  },
  {
    name: 'Esri Lebanon',
    position: 'Automation and Scripting Intern',
    url: 'https://www.EsriLebanon.com',
    startDate: '2023-07-01',
    endDate: '2023-08-01',
    summary: `Automated various processes and workflows using Python and JavaScript, improving system efficiency. 
    Developed scripts to streamline internal operations, reducing manual intervention. 
    Collaborated with teams to integrate automated solutions into existing infrastructures.`,
    highlights: [
      'Automated key workflows to enhance efficiency.',
      'Developed scripts to minimize manual operations.',
      'Collaborated on integrating automated solutions.',
    ],
  },
  {
    name: 'Senal Crypto',
    position: 'COO & Lead Developer',
    url: 'https://www.senalcrypto.com',
    startDate: '2021-08-01',
    endDate: '2022-08-01',
    summary: `Oversaw the company’s transition to a focus on blockchain and DeFi, leading development efforts. 
    Implemented security protocols and smart contract audits to ensure project integrity and client trust. 
    Managed a cross-functional team, driving innovation in blockchain solutions and tokenomics.`,
    highlights: [
      'Led the shift towards blockchain and DeFi technologies.',
      'Implemented robust security protocols and smart contract audits.',
      'Managed a team to drive blockchain innovation.',
    ],
  },
  {
    name: 'Village Community Center',
    position: 'Technology Educator',
    startDate: '08-01-2018',
    endDate: undefined,
    summary: `Teach young children in the village how to use laptops, fostering early technology skills. 
    Organize regular sessions to help children become comfortable with basic computer operations and software.`,
    highlights: [
      'Educated young children on basic technology skills.',
      'Organized regular tech sessions for children.',
    ],
  },
  {
    name: 'Village Clean-Up Initiatives',
    position: 'Community Volunteer',
    startDate: '08-01-2018',
    endDate: undefined,
    summary: `Participate in cleaning and maintaining the streets and valleys of my village, contributing to environmental preservation. 
    Organize clean-up events and engage with the community to promote environmental awareness.`,
    highlights: [
      'Participated in environmental clean-up initiatives.',
      'Organized community clean-up events.',
      'Promoted environmental awareness within the community.',
    ],
  },
];

export default work;
