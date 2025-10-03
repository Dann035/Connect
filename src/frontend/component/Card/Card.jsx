
function Card({img, title, author, views, time}) {
  return (
    <div className="card w-50">
      <img className="card-img" src={img} alt="alternativa" />
      <h2 className="card-title">{title}</h2>
      <span className="card-text">{author}</span>
      <div className="display-flex">
        <span>{views}</span>
        <span>{time}</span>
      </div>
    </div>
  )
}

export default Card