import adver1 from "../../assets/addver-1.jpg";
import adver2 from "../../assets/addver-2.jpg";
import adver3 from "../../assets/addver-3.jpg";

const Advertisement = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={adver1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-sm">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-sm">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={adver2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-sm">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-sm">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={adver3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-sm">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-sm">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
