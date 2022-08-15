import sakura from "../../images/sakura.png";
import petal_1 from "../../images/petal/petal1.png";
import petal_2 from "../../images/petal/petal2.png";
import petal_3 from "../../images/petal/petal3.png";
import petal_4 from "../../images/petal/petal4.png";

export default function Sakura() {
  return (
    <div class='tree'>
        <img
            className='sakura'
            src={sakura}
            alt='Branch of sakura tree'
        />
        <img className='petal petal__one' src={petal_1} alt='' />
        <img className='petal petal__two' src={petal_2} alt='' />
        <img className='petal petal__three' src={petal_3} alt='' />
        <img className='petal petal__four' src={petal_4} alt='' />
    </div>
  );
}
