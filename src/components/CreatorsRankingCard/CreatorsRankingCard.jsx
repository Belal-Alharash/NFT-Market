import "./CreatorsRankingCard.css";
export default function CreatorsRankingCard({ page, id, img, title, percent,description, sales }) {
  const isHomePage = page === "home";

  return (
    <div className={isHomePage ? "af-creators-card" : "af-ranking-card"}>
      <div className={isHomePage ? "af-creators-card-header" : "af-ranking-card-header"}>
        <div className={isHomePage ? "af-creators-card-id-pop" : "af-ranking-card-id-pop"}>
          <p className={isHomePage ? "af-creators-card-id" : "af-ranking-card-id"}>{id}</p>
        </div>
        <div className={isHomePage ? "ys-desc-creators" : "ys-desc-ranking"}>
        <img
          className={isHomePage ? "af-creators-card-img" : "af-ranking-card-img"}
          src={img}
          alt={`Image of artist: ${title}`}
        />
        <h5 className={isHomePage ? "d-none" :"af-card-ranking-name"}>{title}</h5>
        </div>
      </div>
      <div className={isHomePage ? "af-creators-card-text" : "af-ranking-card-text"}>
        <h5 className={isHomePage ? "af-card-artist-name" :"d-none"}>{title}</h5>
        <p className={isHomePage ? "d-none" : "af-ranking-card-percent"}>
          {percent}
        </p>
        <p className={isHomePage ? "d-none" : "af-ranking-card-description"}>
          {description}
        </p>
        <p className={isHomePage ? "d-none" : "af-ranking-card-sales"}>{sales} </p>
        <div className={isHomePage ? "af-creators-card-sales" : "d-none"}>
          <p>Total Sales:</p> <span >{sales}</span>
        </div>
      </div>
      </div>
  );
}