import './manage.scss';
export default function Layout({ children }) {
  return (
    <>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr >
            <th>Name</th>
            <th>Price</th>
            <th>Time</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </>
  )
} 