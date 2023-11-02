import { Container } from "./styles";

export function InputTextarea({ valeu, ...rest }) {
  return <Container {...rest}>{valeu}</Container>;
}
