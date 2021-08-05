import "./daoCategories.css";

function DaoCategories({ active, handleBtnClick }) {
  return (
    <div className="categories">
      <div className="buttons">
        <button
          id="all"
          className={`btn ${active === "all" && "btn-selected"}`}
          onClick={(e) => handleBtnClick(e)}
        >
          All
        </button>
        <button
          id="protocol"
          className={`btn ${active === "protocol" && "btn-selected"}`}
          onClick={(e) => handleBtnClick(e)}
        >
          Protocol
        </button>
        <button
          id="service"
          className={`btn ${active === "service" && "btn-selected"}`}
          onClick={(e) => handleBtnClick(e)}
        >
          Service
        </button>
        <button
          id="grant"
          className={`btn ${active === "grant" && "btn-selected"}`}
          onClick={(e) => handleBtnClick(e)}
        >
          Grant
        </button>
        <button
          id="media"
          className={`btn ${active === "media" && "btn-selected"}`}
          onClick={(e) => handleBtnClick(e)}
        >
          Media
        </button>
        <button
          id="social"
          className={`btn ${active === "social" && "btn-selected"}`}
          onClick={(e) => handleBtnClick(e)}
        >
          Social
        </button>
        <button
          id="investment"
          className={`btn ${active === "investment" && "btn-selected"}`}
          onClick={(e) => handleBtnClick(e)}
        >
          Investment
        </button>
        <button
          id="platform"
          className={`btn ${active === "platform" && "btn-selected"}`}
          onClick={(e) => handleBtnClick(e)}
        >
          Platform
        </button>
        <button
          id="collector"
          className={`btn ${active === "collector" && "btn-selected"}`}
          onClick={(e) => handleBtnClick(e)}
        >
          Collector
        </button>
      </div>
    </div>
  );
}

export default DaoCategories;
