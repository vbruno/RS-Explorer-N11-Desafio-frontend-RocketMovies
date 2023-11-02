import { Container } from "./styles";

import PropTypes from "prop-types";

export function Button({
  title,
  loading = false,
  icon: Icon,
  variant = false,
  ...rest
}) {
  return (
    <Container type="button" disabled={loading} {...rest} $variant={variant}>
      {Icon && <Icon size={20} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.elementType,
};
