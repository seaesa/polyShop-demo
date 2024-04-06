import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './loading.scss';
export const Loading = () => {
  return <div className='loading-product'>
    <FontAwesomeIcon className='loading-product__icon' icon={faCircleNotch} />
  </div>
}