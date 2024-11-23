function Content({ children }) {
  return (
    <main style={{ margin: '70px 0' }} className="flex-shrink-0 bg-light">
      {children}
    </main>
  );
}

export default Content;
