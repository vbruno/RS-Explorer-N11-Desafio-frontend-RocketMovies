import { Container, Tags } from "./styles";

import { StarRate } from "../StarRate";
import { Tag } from "../Tag";

export function BoxMovieDetail({ title, description, tags, rate, onClick }) {
  return (
    <Container onClick={onClick}>
      <h1>{title}</h1>
      <StarRate value={Math.round(rate)} />
      <p>
        {description.length > 288
          ? description.substring(0, 288).concat("...")
          : description}
      </p>
      <Tags>
        {tags && tags.map((tag, index) => <Tag key={index}>{tag.name}</Tag>)}
      </Tags>
    </Container>
  );
}
