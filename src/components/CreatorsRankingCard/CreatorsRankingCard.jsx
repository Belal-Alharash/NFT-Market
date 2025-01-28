import "./CreatorsRankingCard.css";


export default function CreatorsRankingCard({ page, id, img, title, percent, sales }) {
  const isHomePage = page === "home";

  return (
    <div className={isHomePage ? "af-creators-card" : "af-ranking-card"}>
      <div className={isHomePage ? "af-creators-card-header" : "af-ranking-card-header"}>
        <div className={isHomePage ? "af-creators-card-id-pop" : "af-ranking-card-id-pop"}>
          <p className={isHomePage ? "af-creators-card-id" : "af-ranking-card-id"}>{id}</p>
        </div>
        <img
          className={isHomePage ? "af-creators-card-img" : "af-ranking-card-img"}
          src={img}
          alt={`Image of artist: ${title}`}
        />
      </div>
      <div className={isHomePage ? "af-creators-card-text" : "af-ranking-card-text"}>
        <h5 className="af-card-artist-name">{title}</h5>
        <p className={isHomePage ? "d-none" : "af-ranking-card- percent"}>
          {percent}
        </p>
        <div className={isHomePage ? "af-creators-card-sales" : "af-ranking-card-sales"}>
          <p>Total Sales:</p> <span>{sales}</span>
        </div>
      </div>
      </div>
  );
}