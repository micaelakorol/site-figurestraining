import React from "react";
import { BtnIcon } from "../../../../styles/Dashboard";
import Icons from "../../../reusable/Icons";
import { buttonsDashboard } from "../functions/buttonsDashboard";
const ActionDashboardBtn = () => {
  const itemButton = buttonsDashboard;
  return (
    <section>
      {itemButton.map((item) =>(
        <React.Fragment key={item.id}>
         <BtnIcon to={item.to} onClick={item.onClick ? item.onClick : null}>
        <abbr title={item.title}>
          <Icons src={item.src} alt={item.alt}/>
        </abbr>
      </BtnIcon>
      </React.Fragment>
      ))}
    </section>
  );
};

export default ActionDashboardBtn;
