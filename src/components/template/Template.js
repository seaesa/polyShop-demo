import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Template({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

export default Template;
