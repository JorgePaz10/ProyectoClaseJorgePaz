import React from "react";
import CardItems from "../components/CardItem";

function Home({ items }) {
  return (
    <div className="container bg-primary pt-5"> {/* Separación arriba */}
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <CardItems title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
