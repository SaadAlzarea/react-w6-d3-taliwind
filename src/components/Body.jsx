import { GrFormNext } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

let data = [
  {
    title: "Plan your trip",
    des: "Find a destination and any entry requirements.",
  },
  {
    title: "Visit the Help Center",
    des: "Find info on refunds, bags, seats and more.",
  },
  {
    title: "Stay connected",
    des: "Get Wi-Fi for your next flight.",
  },
  {
    title: "Time to start packing",
    des: "Learn more about bringing bags on your trip.",
  },
  {
    title: "What to know before you go",
    des: "The world of travel has changed, find out how.",
  },
  {
    title: "See what's on your flight",
    des: "View your seating, food and entertainment options.",
  },
];

function Body() {
  return (
    <div className="mt-3 p-2">
      {/* section 1 */}
      <div>
        <div className="flex flex-col just justify-center items-center">
          <div>
            <p className="text-3xl font-medium">Explore destinations</p>
            <p className="text-lg">
              Not sure where to go? Use our interactive map to find flights to
              great destinations.
            </p>
          </div>
          <div className="hidden lg:flex just justify-center items-center gap-3 mt-3">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Flying from</label>
              <input
                className="border rounded-md h-8"
                type="text"
                placeholder="Riyadh RUH"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Search type</label>
              <select className="border rounded-md h-8">
                <option value="">Roundtrip</option>
                <option value="">Oneway</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Date</label>
              <input
                className="border rounded-md h-8"
                type="date"
                placeholder="Riyadh RUH"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Max price</label>
              <input
                className="border rounded-md h-8"
                type="number"
                placeholder="Riyadh RUH"
              />
            </div>
            <div className="flex items-end h-15">
              <button className="w-30 bg-blue-600 h-10 rounded-full text-white ">
                Search
              </button>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-blue-700 font-medium h-15">
                <GrFormNext className="text-lg" /> Refine search
              </p>
            </div>
          </div>
          {/* <div class="bg-gray-100 flex items-center justify-center h-screen">
            <div class="w-full max-w-4xl h-96 border-4 border-gray-300 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.7318827395083!2d40.09287031500486!3d29.927167581934204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15f52bb351a61c69%3A0x5eb8ad50d2a2c6d9!2z2YXYs9mFINin2YTYsdiv2K_Yp9iq!5e0!3m2!1sar!2ssa!4v1680081830123!5m2!1sar!2ssa"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div> */}
        </div>
        {/* section -2  */}
        <div className=" flex flex-col items-center  mt-5">
          <div className="m-2">
            <p className="text-lg font-medium">Useful links for you</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:w-200">
            {data.map((item) => {
              return (
                <div className="border justify-between rounded-sm flex gap-4 w-full p-1  hover:border-blue-600 hover:border-2">
                  <div>
                    <p className="text-2xl font-medium">{item.title}</p>
                    <p className="text-sm">{item.des}</p>
                  </div>
                  <div className="text-3xl text-blue-600 flex items-center ">
                    <GrLinkNext />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Body;
