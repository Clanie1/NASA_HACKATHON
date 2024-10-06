import asset1 from "../../assets/subscribe_section/asset_1.png";
import asset2 from "../../assets/subscribe_section/asset_2.png";

const SubscribeSection = ({ ref1 }) => {
  return (
    <div
      className="relative w-full h-[600px] flex justify-between items-center"
      ref={ref1}
    >
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-between items-center h-[80%] w-[40%]">
          <span className="text-4xl font-gopherRegular">Subscribe</span>

          <input
            className="bg-main-beige bg-opacity-45 w-full backdrop-blur-md border-[1px] border-black rounded-[10px] py-3 px-5 focus:outline-black"
            placeholder="Name"
          ></input>
          <input
            className="bg-main-beige bg-opacity-45 w-full backdrop-blur-md border-[1px] border-black rounded-[10px] py-3 px-5 focus:outline-black"
            placeholder="Email"
          ></input>
          <input
            className="bg-main-beige bg-opacity-45 w-full backdrop-blur-md border-[1px] border-black rounded-[10px] py-3 px-5 focus:outline-black"
            placeholder="Phone"
          ></input>
          <input
            className="bg-main-beige bg-opacity-45 w-full backdrop-blur-md border-[1px] border-black rounded-[10px] py-3 px-5 focus:outline-black"
            placeholder="Address"
          ></input>

          <button className="bg-[#ABA69C] bg-opacity-45 backdrop-blur-md px-10 py-3 rounded-[10px] border-[1px] border-black hover:bg-opacity-95 tr">
            Submit
          </button>
        </div>
      </div>

      <div className="w-[50%] h-full flex justify-start items-end">
        <img src={asset1} className="h-[450px]" />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <img src={asset2} className="h-[450px]" />
      </div>
    </div>
  );
};

export default SubscribeSection;
