import Head from "next/head";
import PageContent from "@/components/PageContent";
import {
  MdAttachMoney,
  MdOutlineShoppingBag,
  MdPersonOutline,
} from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import DashboardStatisticCard from "@/components/DashboardStatisticCard";
import OrdersTable from "@/components/OrdersTable";
import BasicCard from "@/components/BasicCard";
import ChartBar from "@/components/ChartBar";
import DoughnutChart from "@/components/DoughnutChart";
const dashboardStatistic = [
  {
    id: 1,
    title: "budget",
    percentage: 12,
    amount: 24,
    thousands: true,
    unit: "$",
    link: "More details",
    icon: <MdAttachMoney />,
  },
  {
    id: 2,
    title: "total customers",
    percentage: -3.75,
    amount: 1.6,
    thousands: true,
    unit: "",
    link: "See all orders",
    icon: <MdOutlineShoppingBag />,
  },
  {
    id: 3,
    title: "task progress",
    percentage: 0,
    amount: 75.5,
    thousands: false,
    unit: "%",
    link: "See details",
    icon: <MdPersonOutline />,
  },
  {
    id: 4,
    title: "total profit",
    percentage: 0,
    amount: 15,
    thousands: true,
    unit: "$",
    link: "Withdraw money",
    icon: <BsWallet2 />,
  },
];

const stores = [
  {
    id: "s1",
    location: "Galeria Bałtycka",
    director: "Pierce Brosnan",
    image: "https://i.pravatar.cc/150?img=3",
    progress: 71.3,
    deadline: "31/04/2023",
    visited: 1289,
    status: "pending",
  },
  {
    id: "s2",
    location: "Forum",
    director: "Albercik Dev",
    image: "https://i.pravatar.cc/150?img=7",
    progress: 100,
    deadline: "31/02/2023",
    visited: 1201,
    status: "completed",
  },
  {
    id: "s3",
    location: "Metropolia",
    director: "Król Karol III",
    image: "https://i.pravatar.cc/150?img=2",
    progress: 84,
    deadline: "19/06/2023",
    visited: 1589,
    status: "refunded",
  },
];

interface StatisticCard {
  id: number;
  title: string;
  percentage: number;
  amount: number;
  thousands: boolean;
  unit: string;
  link: string;
  icon: JSX.Element;
}

const Home = () => {
  const statistics = dashboardStatistic.map((item: StatisticCard) => {
    return <DashboardStatisticCard key={item.id} item={item} />;
  });

  return (
    <>
      <Head>
        <title>Dashboard | Patryk Kobylarczyk</title>
        <meta name="description" content="Dashboard by Patryk Kobylarczyk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContent>
        <div className="w-full h-full flex flex-col gap-4 ">
          <h2 className="font-bold text-base md:text-2xl lg:text-3xl my-3">
            Dashboard
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4  gap-4 mt-2">
            {statistics}
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 ">
            <div className="w-full md:w-3/5 md:max-w-3/5">
              <BasicCard>
                <div className="h-80 w-full">
                  <ChartBar />
                </div>
              </BasicCard>
            </div>
            <div className="w-full md:w-2/5 md:max-w-2/5">
              <BasicCard>
                <div className="h-80 w-full">
                  <DoughnutChart />
                </div>
              </BasicCard>
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-4 mt-5">
            <h2 className="font-bold text-base md:text-2xl lg:text-3xl my-3">
              Last Orders
            </h2>
            <BasicCard resetPadding>
              <OrdersTable stores={stores} />
            </BasicCard>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Home;
