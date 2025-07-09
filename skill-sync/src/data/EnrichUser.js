const roles = ["Frontend Developer", "Graphic Designer", "Content Writer", "SEO Specialist","Java Developer", "Backend Developer", "CyberSecurity Engineer","QA engineer", "Python Developer","Cloud Engineer", "Ethical Hacker", "Debuggers", "Fullstack Developer", "System Desiner", "Linux Operator"];
const skillPool = ["React", "Tailwind", "Figma", "JavaScript", "Python", "Adobe XD","Java", "Node.JS", "Express.Js","Linux","CyberSecurity","DSA"];

const enrichUser = (user) => {
  const jobTitle = roles[Math.floor(Math.random() * roles.length)];
  const skills = skillPool.sort(() => 0.5 - Math.random()).slice(0, 3);
  const hourlyRate = Math.floor(Math.random() * 91) + 10; // $10 to $100
  const rating = (Math.random() * 1 + 4).toFixed(1); // 4.0 to 5.0
  const experienceLevel = ["Beginner", "Intermediate", "Expert"][Math.floor(Math.random() * 3)];
  const bio = `Experienced ${jobTitle} skilled in ${skills.join(", ")}. Passionate about delivering high-quality work.`

  return {
    ...user,
    jobTitle,
    skills,
    hourlyRate,
    rating,
    experienceLevel,
    bio
  };
};

export default enrichUser;