import React from "react";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import { userData } from "../dummyData";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";

const Home = () => {
  return (
    <div className="flex-5">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="فعالیت کاربران"
        grid
        dataKey="activeUsers"
      />
      <div className="flex m-5 ">
        <WidgetLg/>
        <WidgetSm/>
      </div>
    </div>
  );
};

export default Home;
