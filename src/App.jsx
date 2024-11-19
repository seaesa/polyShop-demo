import { Route, Routes } from "react-router-dom";
// redux
import store from './redux/store';
import { Provider } from 'react-redux';
// components
import DefaultTemplate from "./components/template/Template";
import { RouteElement } from './routes/routes';

// fetch('https://sandbox.vnpayment.vn/qrpayauth/api/merchant/get_bank_list', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: `tmn_code=LXTERUI2`
// }).then(data => data.json()).then(data => console.log(data))  
export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        {RouteElement.map((route, index) => {
          const Template = route.template ?? DefaultTemplate;
          const Element = route.element
          return (
            <Route key={index} path={route.rootPath} element={<Template><Element /></Template>} >
              {Array.isArray(route.childrenPath) && route.childrenPath.map((children, index) => {
                const Element = children.element
                return <Route key={index} path={children.path} element={<Template><Element /></Template>} />
              })
              }
            </Route>
          )
        })}
      </Routes>
    </Provider>
  );
}