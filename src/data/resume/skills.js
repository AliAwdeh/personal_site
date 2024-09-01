const skills = [
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'PHP',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React.js',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'REST API',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MySQL',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Nginx',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Ngrok',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'VS Code',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Xcode',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Postman',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Networking & Servers',
    competency: 5,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Virtualization',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'PC Building & Troubleshooting',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Problem Solving',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Communication Skills',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Deployments',
    competency: 5,
    category: ['Tools', 'Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
