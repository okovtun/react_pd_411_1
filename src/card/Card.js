import './Card.css';
import male from '../icons/male.png';
import female from '../icons/female.png';

function Card(props)
{
    let elem = props.elem;
    return (
                <div key={props.elem} className='card'>
                  <img src={props.elem.photo} alt="photo" />
                  <div className='name'>
                    {elem.name} {elem.surname}
                  </div>
                  <div className='gender'>
                    <img src={elem.pol === 'male' ? male : female } alt="Gender"/>
                  </div>
                  <div className='age'>
                    {elem.age}
                  </div>
                </div>
              );
}
export default Card;