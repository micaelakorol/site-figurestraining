import { Support } from "../../../../styles/Login";
import { support } from "../../../../assets/variables";

const BtnSupport = () => {
  return (
    <Support href="mailto:micaelakorol@gmail.com">
      <abbr title="User Support, press here">
        <img
          src={support}
          alt="support"
          className="support"
        />
      </abbr>
    </Support>
  );
};

export default BtnSupport;
