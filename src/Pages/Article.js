import styled from "styled-components";
import ProjectCard from "../component/ProjectCard";
import SpotifyImage from "../images/spotify-1759471_1280.jpg";

const Article = () => {
  return (
    <Wrapper>
      <section className="articlePage">
        <ProjectCard
          isArticle
          title="Inventory Management API "
          projectImage={SpotifyImage}
          imageAlt={"Inventory"}
          textContent="Small Scale Inventory Management API."
          projectUrlPath={
            "https://godwinamadi-nj.hashnode.dev/build-and-dockerize-a-node-js-inventory-app"
          }
          technologiesUsed={[
            "Node JS",
            "MongoDb",
            "authentication",
            "docker",
            "authorization",
          ]}
        />
      </section>
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.section`
  .articlePage {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media (min-width: 768px) {
    .articlePage {
      justify-content: flex-start;
      /* display: flex; */
      /* flex-direction: column; */
      /* justify-content: center; */
      /* align-items: center; */
    }
  }
`;
