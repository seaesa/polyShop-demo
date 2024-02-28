import { Link } from "react-router-dom";
import image from '../../assets/image/Empty-pana.png';

export default function NoCart() {
  return (
    <>
      <div>
        <img src={image} alt='' style={{ maxWidth: '70vh', display: 'block', margin: '50px auto' }} />
        <Link to='/products' style={{ textDecoration: 'none' }}>
          <button className='btn btn-lg btn-secondary d-block' style={{ margin: '0 auto 20px' }}>Go to Shopping</button>
        </Link>
      </div>
    </>
  )
}