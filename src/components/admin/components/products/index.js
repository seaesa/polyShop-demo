import Layout from "../layout/manage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../loading/loading";
import Table from '../tableManage';
import { selectDocFirebase } from '../../../../redux/firebase/firebaseSlice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalAddProduct from '../modals/AddProduct'
import { getProduct } from "../../../../redux/firebase/thunkApi";
export default function Product() {
  const dispatch = useDispatch()
  const { doc, isLoading } = useSelector(selectDocFirebase);
  const [show, setShow] = useState(false);


  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <>
      <Layout>
        {Array.isArray(doc) && doc.map((item, index) => <Table item={item} key={index} />)}
      </Layout>
      <div className='addIcons' onClick={e => setShow(true)} >
        <FontAwesomeIcon className='addIconProduct' icon={faPlus} />
      </div>
      <ModalAddProduct setShow={setShow} show={show} />
      {isLoading && <Loading />}
    </>
  )
}