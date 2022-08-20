import Project from "./Project/Project";

export default function Projects() {
  return (
    <div className='content'>
      <Project
        src="https://media.giphy.com/media/cifXF9Zq82EH9RFqwx/giphy.gif"
        alt='Animated News Search-And-Save project presentation'
        header='NewsExplorer'
        link='https://coolnews.students.nomoredomainssbs.ru/'
        desc='News application with completed authorization system realised with using MongoDB and Express Router. Hosting and supporting by Microsoft Azure VMs.'
      />
      <Project
        src="https://media.giphy.com/media/65F22SU9jLySrEgCrv/giphy.gif"
        alt='Animated Around U.S. presentation'
        header='Around U.S.'
        link='https://arounduswithus.students.nomoreparties.sbs/'
        desc='Instagram-like social network with database, API based connection between client and server and implementation of main features of Instagram application such as photos uploading and liking, profile updating etc. Hosting by Google Cloud VMs'
      />
    </div>
  );
}
