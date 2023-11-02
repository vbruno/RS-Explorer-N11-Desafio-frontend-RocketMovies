import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Container } from "./styles";

export function InputText({ icon: Icon, isPassword = false, ...rest }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input
        {...rest}
        type={(isPassword && (isVisible ? "text" : "password")) || "text"}
      />
      {isPassword &&
        (isVisible ? (
          <button type="button" onClick={handleToggleVisibility}>
            <FiEyeOff size={20} />
          </button>
        ) : (
          <button type="button">
            <FiEye size={20} onClick={handleToggleVisibility} />
          </button>
        ))}
    </Container>
  );
}
