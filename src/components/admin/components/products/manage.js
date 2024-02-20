import Layout from "../layout/manage";
import { doc, deleteDoc, collection, getDocs } from "firebase/firestore";
import DB from '../../../../db/firebase'
import { useEffect, useState } from "react";
import { Loading } from "../loading/loading";
export default function Manage() {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [stateChange, setStateChange] = useState(false)
  useEffect(() => {
    (async () => {
      let array = [];
      const querySnapshot = await getDocs(collection(DB, "products"));
      querySnapshot.forEach((doc) => {
        array.push({ ...doc.data(), id: doc.id });
      });
      setProduct(array)
    })()
  }, [stateChange])

  const handleRemove = async (e, id) => {
    try {
      setLoading(true)
      await deleteDoc(doc(DB, "products", id));
      setStateChange(!stateChange)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleStateChange = () => {
    setStateChange(!stateChange)
  }
  return (
    <Layout onStateChange={handleStateChange}>
      {product.length > 0 && product.map((item, index) => (
        <tr key={index}>
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
            <button type="button" className="btn btn-link btn-sm btn-rounded" style={{ textDecoration: 'none' }}>
              Edit
            </button>
          </td>
          <td>
            <button onClick={e => handleRemove(e, item.id)} type="button" className="btn-close" aria-label="Close"></button>
          </td>
        </tr>
      ))}
      {loading && <Loading />}
    </Layout>
  )
}