/* eslint-disable react/prop-types */
export default function FilmCard({ film }) {
  return (
    <div
      className="listItem"
      //   style={{
      //     backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0 25%, transparent 65% 100%), url(${film.Poster})`,
      //   }}
    >
      <h4
        className="text-white fs-6"
        // style={{ marginTop: "23%", width: "80%" }}
      >
        {film.Title}
      </h4>
      <img src={film.Poster} alt="" />
    </div>
  );
}
