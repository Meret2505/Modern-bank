import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Has gowy kart şertnamasyny tapyň
        <br className="sm:block hidden" />
        birnäçe aňsat ädimde.{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Biziň bankymyzdan kredit kart almak üçin diňe pasportyňyz ýetikdir.
        Siziň kredit kartyňyz 3 sagat içinde taýýar bolar
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] " />
    </div>
  </section>
);

export default CardDeal;
