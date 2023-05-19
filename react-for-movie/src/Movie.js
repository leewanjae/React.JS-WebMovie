function Movie({ coverImg, title, summary, generes }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {generes &&
          generes.map((gen) => ({
            gen,
          }))}
      </ul>
    </div>
  );
}

export default Movie;
