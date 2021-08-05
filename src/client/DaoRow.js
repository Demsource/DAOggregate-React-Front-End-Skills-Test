import twitterIcon from "./icons/twitterIcon.svg";
import webpageIcon from "./icons/webpageIcon.svg";

function DaoRow({ dao }) {
  return (
    <tr className="dao-row">
      <td className="d-col-name">
        <div className="flex ai-c-flex">
          <img src={dao.img} alt={`${dao.name} company logo`} />
          <span>{dao.name}</span>
        </div>
      </td>
      <td className="d-col-category">{dao.category}</td>
      <td className="d-col-aum">
        {isNaN(Number(dao.aum))
          ? "N/A"
          : Number(dao.aum).toLocaleString("En-US")}
      </td>
      <td className="d-col-twl">{Number(dao.twl).toLocaleString("En-US")}</td>
      <td className="d-col-found-date">{dao.foundDate}</td>
      <td className="d-col-social-icons">
        <div className="flex">
          <a href="/#">
            <img src={webpageIcon} alt="webpage icon" />
          </a>
          <a href="/#">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </div>
      </td>
    </tr>
  );
}

export default DaoRow;
