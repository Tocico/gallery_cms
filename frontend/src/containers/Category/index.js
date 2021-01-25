import React from "react";
import { useParams } from "react-router";
import Galleries from "../../components/Galleries";
import Query from "../../components/Query";
import CATEGORY_GALLERIES_QUERY from "../../queries/category/galleries";

const Category = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_GALLERIES_QUERY} id={id}>
      {({ data: { category } }) => {
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{category.name}</h1>
                <Galleries galleries={category.galleries} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;