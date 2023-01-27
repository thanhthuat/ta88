import React from "react";
import { Bannercomponent } from "../../components/component-banner";
import Bannerfoolbalcomponent from "../../components/component-banner-foolbal/banner-foolbal.component";
import Betmarathoncomponent from "../../components/component-bet-marathon/bet-marathon.component";
import Livecasinocomponent from "../../components/component-casino/live-casino.component";
import FeatureCategorycomponent from "../../components/component-feature-category/feature-category.component";
import Footercomponent from "../../components/component-footer/footer.component";
import Gamehotcomponent from "../../components/component-gamehot/gamehot.component";
import Marathoncomponent from "../../components/component-marathon/marathon.component";
import Navcomponent from "../../components/component-nav/nav.component";
import Newinformationcomponent from "../../components/component-newinformation/newinformation.component";
import Partnercomponent from "../../components/component-partner/partner.component";
import Vipthumnailcomponent from "../../components/component-vip/vip-thumnail.component";

type Props = {};

function Homepage({}: Props) {
  return (
    <div>
      <Navcomponent />
      <Bannercomponent />
      <Bannerfoolbalcomponent />
      <Marathoncomponent />
      <FeatureCategorycomponent />
      <Betmarathoncomponent />
      <Vipthumnailcomponent />
      <Livecasinocomponent />
      <Gamehotcomponent />
      <Partnercomponent />
      <Newinformationcomponent />
      <Footercomponent />
    </div>
  );
}

export default Homepage;
