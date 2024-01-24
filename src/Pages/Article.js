import styled from "styled-components";
import ProjectCard from "../component/ProjectCard";
import SpotifyImage from "../images/spotify-1759471_1280.jpg";

const Article = () => {
  return (
    <Wrapper>
      <section className="articlePage">
        <ProjectCard
          title="Inventory Management API  "
          projectImage={SpotifyImage}
          imageAlt={"Inventory"}
          textContent="Small Scale Inventory Management API. 
              Built with express Js and mongoDb,  docker container technology fully utilized.
              Authentication and authorization fully setup
              "
          projectUrlPath={
            "https://godwinamadi-nj.hashnode.dev/build-and-dockerize-a-node-js-inventory-app"
          }
          technologyUsed={[
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
    /* margin-top: 10%; */
    /* padding-bottom: 20.5rem; */
  }
`;
