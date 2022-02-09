export default function Album({ album }) {
  return (
    <>
      <h2 key={album.id}>
        {album.id}-{album.title}
      </h2>
    </>
  );
}
