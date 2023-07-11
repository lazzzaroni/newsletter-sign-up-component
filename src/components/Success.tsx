export default function Success({
  data,
  onClick,
}: {
  data: string;
  onClick: () => void;
}) {
  return (
    <>
      <p>{data}</p>
      <button onClick={onClick}>Hi</button>
    </>
  );
}
