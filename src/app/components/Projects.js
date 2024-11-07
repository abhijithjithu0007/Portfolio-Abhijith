import Project from "./Project";
import SectionTitle from "./SectionTitle";
const doque1 = '../assets/images/doque1.jpg'
const doque2 = '../assets/images/doque2.jpg'
const furniqo1 = '../assets/images/furniqo1.png'
const furniqo2 = '../assets/images/furniqo2.png'



const data = [
  {
    id: 1,
    title:
      "Doque - Task Management Application",
    img1: doque1,
    img2: doque2,
    describe:
    "DOQUE is a responsive task management application developed as a team project to elevate collaboration and boost productivity. It empowers users to assign tasks, track deadlines on a calendar, and swiftly search for tasks or team members. With customizable profiles and real-time updates, DOQUE enables teams to prioritize and streamline their work effectively.",
    tools: ["Next Js ,", "Redux Toolkit ,", "Tailwind CSS ,","TypeScript"],
    liveLink: "https://doque.vercel.app",
    fontEndLink: "https://github.com/Rafiul29/tech-alpha.git",
  },
 
  {
    id: 2,
    title:
      "Furniqo - Ecommerce Application",
    img1: furniqo1,
    img2: furniqo2,
    describe:
    "Furniqo is a furniture e-commerce platform that transforms online shopping. Users can easily browse a vast selection of furniture, explore product details, and make secure purchases. With advanced search and filter options, customers quickly find ideal items, while customizable profiles simplify order tracking. Furniqo delivers convenience and quality in furniture shopping.",
    tools: ["React ,","Express ,","MongoDB ,","Context-api ,","Razor Pay ,","Tailwind CSS"],
    liveLink: "https://furniqo.vercel.app",
    fontEndLink: "https://github.com/abhijithjithu0007/Furniqo-E-Commerce",
    backEndLink: "https://github.com/abhijithjithu0007/ECOMMERCE-BACKEND",
   
  },

 
];
const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"My Projects"}/>
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
