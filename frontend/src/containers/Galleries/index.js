import React from "react";
import Galleries from "../../components/Galleries";
import Query from "../../components/Query";
import GALLERIES_QUERY from "../../queries/gallery/galleries";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={GALLERIES_QUERY}>
            {({ data: { galleries } }) => {
              return <Galleries galleries={galleries} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;