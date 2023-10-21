import { useLoaderData } from "react-router-dom";
import banner from "../../assets/gadget-banner.png";
import Marquee from "react-fast-marquee";
import Brands from "./Brands";
const Home = () => {
  const loaderBrands = useLoaderData();
  return (
    <div className="bg-white">
      <div>
        <img src={banner} className="w-3/4 mx-auto" alt="" />
      </div>
      <div>
        <Marquee speed={100}>
          <p className="flex gap-5">
            <button className="btn btn-xs bg-red-400 text-white border-none">
              Authorized Reseller
            </button>
            <button className="btn btn-xs bg-green-400 text-white border-none">
              Trade In
            </button>
            <button className="btn btn-xs bg-blue-400 text-white border-none">
              Official Product with Warranty
            </button>
            <button className="btn btn-xs bg-orange-400 text-white border-none">
              0% EMI on Selected Products
            </button>
            <button className="btn btn-xs bg-purple-400 text-white border-none">
              Fast Delivery
            </button>
            <button className="btn btn-xs bg-lime-400 text-white border-none">
              100% Online Payment
            </button>
          </p>
        </Marquee>
      </div>
      <br />
      <div className="text-center text-3xl font-bold text-black">
        <h3>Our Products Brands</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6 my-8 px-6">
        {loaderBrands.map((brand) => {
          return <Brands key={brand.id} b={brand}></Brands>;
        })}
      </div>

      <div className="stats bg-black shadow-2xl text-white w-full mb-5">
        <div className="stat">
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
