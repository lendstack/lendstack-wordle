
export default function ErrorComponent(props: { message: string | null }) {
  if (!props.message) return null;

  return (
    <p className="error-label" style={{ color: "red" }}>
      {props.message}
    </p>
  );
}
