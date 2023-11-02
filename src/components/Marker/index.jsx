import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function Marker({ isNew, value, onClick, ...rest }) {
  return (
    <Container $is_new={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        placeholder="Novo marcador"
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
