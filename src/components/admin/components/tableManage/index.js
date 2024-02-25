import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../redux/firebase/thunkApi";
import { useState } from "react";
import UpdateProduct from '../modals/UpdateProduct'
export default function Table({ item }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={item.images[0]}
              alt={item.name}
              style={{ width: '45px', height: '45px' }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{item.name}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{item.price}</p>
        </td>
        <td>
          <span >{item.timestamp.toDate().toDateString()}</span>
        </td>
        <td>
          <button
            onClick={e => setShow(true)}
            type="button" className="btn btn-link btn-sm btn-rounded" style={{ textDecoration: 'none' }}>
            Edit
          </button>
        </td>
        <td>
          <button onClick={e => dispatch(removeProduct(item.id))} type="button" className="btn-close" aria-label="Close"></button>
        </td>
      </tr>
      <UpdateProduct setShow={setShow} show={show} item={item} />
    </>
  )
}