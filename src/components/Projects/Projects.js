import project1 from "../../images/project1.gif";
import project2 from "../../images/project2.gif";
import Project from "./Project/Project";

export default function Projects() {
  return (
    <div className='content'>
      <Project
        gif={project2}
        alt='Animated News Search-And-Save project presentation'
        header='NewsExplorer'
        link='https://coolnews.students.nomoredomainssbs.ru/'
        desc='News application with completed authorization system realised with using MongoDB and Express Router. Hosting and supporting by Microsoft Azure VMs.'
      />
      <Project
        gif={project1}
        alt='Animated Around U.S. presentation'
        header='Around U.S.'
        link='https://arounduswithus.students.nomoreparties.sbs/'
        desc='Instagram-like social network with database, API based connection between client and server and implementation of main features of Instagram application such as photos uploading and liking, profile updating etc. Hosting by Google Cloud VMs'
      />
    </div>
  );
}
