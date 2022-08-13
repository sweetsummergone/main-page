import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

export default function Footer() {
  return (
    <footer class='contact'>
        <a class='contact__github' href='https://github.com/sweetsummergone'>
            <img src={github} alt='' />
        </a>
        <a class='contact__linkedin' href='https://www.linkedin.com/in/aleksavi/'>
            <img src={linkedin} alt='' />
        </a>
    </footer>
  );
}
