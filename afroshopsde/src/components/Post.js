import {Link} from "react-router-dom"

export default function Post({
  name,
  id,
  owner,
  description,
  email,
  telephoneNumber,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{email}</p>
        <p className="card-text">{telephoneNumber}</p>
        <p className="card-text">{owner}</p>
        <Link to="/map" className="btn btn-primary">
          View
        </Link>
      </div>
    </div>
  );
}
