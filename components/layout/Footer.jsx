import { FOOTER } from "@/utils/data/constant";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <Image src={FOOTER.LOGO} alt="Footer Logo" />
          <p>{FOOTER.DESC}</p>
        </div>
        <div>
          <p>{FOOTER.ADDRESS.BUILDING}</p>
          <p>{FOOTER.ADDRESS.STREET}</p>
          <p>{FOOTER.ADDRESS.AREA}</p>
          <p>{FOOTER.ADDRESS.CITY}</p>
          <p>{FOOTER.CELL}</p>
          <p>{FOOTER.EMAIL}</p>
        </div>
      </div>
      <div>
        <hr />
        <div className="bg-red-600">
          {FOOTER.SOCIAL_ICONS.map((icon, idx) => (
            <Image src={icon} alt="footer social icon" key={idx} />
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
