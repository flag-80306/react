import PropTypes from "prop-types";

Card.propTypes = {
  attributes: PropTypes.object,
};

function Card({ attributes }) {
  console.log(attributes);

  return (
    <>
      <div className="bookCard">
        <img src={attributes.cover} />
        <section>
          <h3>{attributes.title}</h3>
          <div>
            <i className="fa-regular fa-calendar"></i> {attributes.release_date}
          </div>
          <div>
            <i className="fa-solid fa-book"></i> {attributes.pages}
          </div>
          <div>
            <i className="fa-solid fa-pencil"></i>
            {attributes.author}
          </div>
          <a href={"/books/" + attributes.slug} className="viewBookLink">
            View Book
          </a>
        </section>
      </div>
    </>
  );
}

export default Card;
