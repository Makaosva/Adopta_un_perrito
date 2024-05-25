import Tags from "./Tags";

function MyCard({ imagen, name, description, tags }) {
  return (
    <div className="card">
      <img src={imagen} alt={name} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
        <Tags tags={tags} />
      </div>
    </div>
  );
}

export default MyCard;
