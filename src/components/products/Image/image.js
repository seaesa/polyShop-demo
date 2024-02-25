export default function Image({ onClick, src, opacity }) {
  return (
    <img
      onClick={onClick}
      className={`rounded mb-2 ratio object-fit-cover ${opacity}`}
      style={{ height: '50px', cursor: 'pointer' }}
      src={src}
      alt="img" />
  )
}