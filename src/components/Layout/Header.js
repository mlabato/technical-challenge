import { useState, useEffect } from "react";

const Header = () => {
  const [currencyInfo, setCurrencyInfo] = useState([0]);

  const ws = new WebSocket(
    "ws://stream.tradingeconomics.com/?client=guest:guest"
  );

  useEffect(() => {
    ws.onopen = function (e) {
      console.log("Connection established!");
      ws.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');
      ws.onmessage = function (e) {
        setCurrencyInfo(JSON.parse(e.data));
      };
    };
  }, []);

  const timeStamp = new Date(currencyInfo.dt).toLocaleTimeString("en-US");

  return (
    <section className="bg-[#081114] flex flex-row my-auto justify-between p-4 items-center">
      <div className="w-1/4 p-1">
        <img alt="" src="/logo.webp" />
      </div>
      <div className="bg-[#4AC4BF]  h-[40px] group hover:h-[90px] duration-500 transition-all   text-white sm:text-sm md:text-xl text-center p-2 rounded-xl cursor-pointer flex flex-col  my-auto mr-20">
        <h1 className="text-[#E6E6E6] sm:text-[10px] md:text-[14px] font-bold">
          EUR/USD{" "}
        </h1>
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-1000 ">
          <h1 className=" sm:text-[10px] md:text-[14px]">
            {currencyInfo.price}
          </h1>
          <h1 className=" sm:text-[8px] md:text-[14px]">{timeStamp}</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
