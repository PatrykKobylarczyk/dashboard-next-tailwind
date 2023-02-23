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

const dashboardStatistic = [
  {
    id: 1,
    title: "total earnings",
    percentage: 16.45,
    amount: 589.89,
    link: "More details",
    icon: <MdAttachMoney />,
  },
  {
    id: 2,
    title: "orders",
    percentage: -3.75,
    amount: 36,
    link: "See all orders",
    icon: <MdOutlineShoppingBag />,
  },
  {
    id: 3,
    title: "customers",
    percentage: 340,
    amount: 123.4,
    link: "See details",
    icon: <MdPersonOutline />,
  },
  {
    id: 4,
    title: "balance",
    percentage: 0.0,
    amount: 245.78,
    link: "Withdraw money",
    icon: <BsWallet2 />,
  },
];

const stores = [
  {
    id: "s1",
    name: "Galeria Bałtycka",
    director: "Pierce Brosnan",
    image: "",
    progress: 71.3,
    deadline: "31/04/2023",
    visited: 1289,
    status: "pending",
  },
  {
    id: "s2",
    name: "Forum",
    director: "Albercik Dev",
    image: "",
    progress: 100,
    deadline: "31/02/2023",
    visited: 1201,
    status: "completed",
  },
  {
    id: "s3",
    name: "Metropolia",
    director: "Król Karol III",
    image: "",
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
    link: string;
    icon: JSX.Element;
  }


export default function Home() {
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
        <div className="w-full h-full flex flex-col  gap-3">
          <h2 className="font-bold text-base mt-1 ">Dashboard</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4  gap-3 mt-2">
            {statistics}
          </div>
          <div className="w-full flex flex-col md:flex-row gap-3 ">
            <div className="w-full md:w-3/5 h-72 rounded-xl bg-white grid place-items-center">
              wykres
            </div>
            <div className="w-full md:w-2/5 h-72 rounded-xl bg-white grid place-items-center">
              mapka
            </div>
          </div>
          <div className="w-full  bg-white rounded-xl p-5">
            <OrdersTable stores={stores} />
          </div>
        </div>
      </PageContent>
    </>
  );
}
