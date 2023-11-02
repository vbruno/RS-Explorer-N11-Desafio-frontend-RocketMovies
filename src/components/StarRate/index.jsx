import { Container } from "./styles";
import { FiStar } from "react-icons/fi";

export function StarRate({ value = 0 }) {
  return (
    <Container>
      {Array.from({ length: 5 }).map((_, index) => (
        <FiStar key={index} className={index < value ? "filled" : ""} />
      ))}
    </Container>
  );
}
