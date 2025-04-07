import React from "react";


function Cards({title, image, description}) {

    
  return (
    <>
      <div>
        <div className="card bg-neutral rounded-md w-96 shadow-sm">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>
             {description}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
