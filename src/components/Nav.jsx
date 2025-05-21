import "../assets/bg-logo.png";
import { MdOutlineLanguage } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { PiShoppingCartFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlShareAlt } from "react-icons/sl";
import { GrTransaction } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { LuFolders } from "react-icons/lu";

function Nav() {
  return (
    <div className="min-h-screen w-full bg-cover bg-[url(https://media.united.com/assets/m/178313ba33aca8b4/original/1265_Starlink_HP_Takeover_Desktop_img_1366x768-2x.jpg)]">
      <nav className="flex h-14 justify-around items-center bg-gray-950/90 sticky top-0 ">
        <div className="flex items-center gap-3 w-20">
          <img
            src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg"
            alt=""
          />
          <ul className="hidden lg:flex items-center justify-center gap-5  text-white text-xs font-medium ">
            <li className="hover:underline hover:text-blue-500 ">Book</li>
            <li className="hover:underline hover:text-blue-500 w-15">
              My trips
            </li>
            <li className="hover:underline hover:text-blue-500 w-15">
              Travel info
            </li>
            <li className="hover:underline hover:text-blue-500 w-15">
              MileagePlus
            </li>
            <li className="hover:underline hover:text-blue-500 w-15">Deals</li>
            <li className="hover:underline hover:text-blue-500 w-15">Help</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 text-white text-xs">
          <button className="flex items-center justify-center hover:bg-gray-500 rounded-2xl w-30 hover:text-black">
            <MdOutlineLanguage /> English-US$
          </button>
          <button className="flex items-center justify-center hover:bg-gray-500 rounded-2xl h-5 w-5 text-center hover:text-black">
            <IoIosSearch />
          </button>
          <button className="flex items-center justify-center hover:bg-gray-500 rounded-2xl h-5 w-5  hover:text-black">
            <IoPerson />
          </button>
          <button className="flex items-center justify-center hover:bg-gray-500 rounded-2xl h-5 w-5  hover:text-black">
            <PiShoppingCartFill />
          </button>
          <button className="lg:hidden  flex items-center justify-center hover:bg-gray-500 rounded-2xl h-5 w-5  hover:text-black">
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      <div className=" p-2 min-h-150 lg:flex justify-around items-center gap-3 lg:min-h-150 md:m-10 md:gap-3">
        {/* register - left side */}
        <div className="bg-white min-w-2/5 rounded-lg ">
          {/* hesder */}
          <ul className="flex text-sm w-full justify-around items-center h-10 bg-blue-950 text-white rounded-t-lg">
            <li className="flex justify-center items-center border h-10 w-full rounded-tl-lg bg-white text-blue-950 border-b-blue-50">
              Book
            </li>
            <li className="flex justify-center items-center border h-10 w-full">
              Flight Status
            </li>
            <li className="flex justify-center items-center border h-10 w-full">
              Check-in
            </li>
            <li className="flex justify-center items-center border h-10 w-full rounded-tr-lg">
              My trips
            </li>
          </ul>
          {/* section1 */}
          <div className="flex flex-wrap lg:flex-nowrap gap-9 h-14 items-center justify-center text-xs w-full">
            <ul className="flex justify-center items-center gap-14 border-b w-90 h-8">
              <li className="border-b-2 h-8 w-full text-center font-bold">
                Flight
              </li>
              <li className="h-8">Packages</li>
              <li className="h-8">Hotel</li>
              <li className="h-8">Car</li>
            </ul>
            <p className="h-10">
              <a
                href=""
                className="flex justify-around items-center gap-3 text-blue-600 h-8"
              >
                Cruise <SlShareAlt />
              </a>
            </p>
          </div>
          {/* section2 */}
          <div className="flex flex-wrap  lg:flex justify-around items-center text-xs h-8 p-2">
            <div className="flex justify-between gap-3 items-center ">
              <input type="radio" id="trip" />
              <label htmlFor="trip">Roundtrip</label>
            </div>
            <div className="flex justify-between gap-3 items-center ">
              <input type="radio" id="trip" />
              <label htmlFor="trip">one-way</label>
            </div>
            <div className="flex justify-between gap-3 items-center ">
              <input type="checkbox" />
              <label>Book with miles</label>
            </div>
            <div className="flex justify-between gap-3 items-center ">
              <input type="checkbox" />
              <label>Flexible dates</label>
            </div>
          </div>
          {/* section-3 */}
          <div className="lg:flex justify-around items-center h-32 w-full p-2">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-sm font-medium">From</p>
                <input
                  type="text"
                  className="border-1 rounded-lg h-7 w-full"
                  placeholder="Riyadh RUH"
                />
              </div>
              <div className="w-full">
                <p className="text-sm font-medium ">Date</p>
                <input
                  type="date"
                  className="border-1 rounded-lg h-7 w-full"
                  placeholder="Riyadh RUH"
                />
              </div>
            </div>
            <div className=" lg:mb-9 text-lg text-blue-600">
              <GrTransaction />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-sm font-medium ">To</p>
                <input
                  type="text"
                  className="border-1 rounded-lg h-7 w-full"
                  placeholder="Riyadh RUH"
                />
              </div>
              <div>
                <p className="text-sm font-medium ">Travels</p>
                <input
                  type="text"
                  className="border-1 rounded-lg h-7 w-full"
                  placeholder="Riyadh RUH"
                />
              </div>
            </div>
          </div>
          {/* section-4 */}
          <div className="lg:flex items-center justify-around lg:mt-4 mt-32 p-2">
            <div className="flex flex-col justify-center items-start gap-1 h-32">
              <select className="border-1 rounded-lg w-full">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business or First</option>
              </select>
              <p className="flex">
                <a
                  href=""
                  className="flex justify-center items-center text-blue-600 hover:underline "
                >
                  Advanced search <MdNavigateNext className="text-lg" />
                </a>
              </p>
              <p className="text-xs">(Certificates, multi-city and upgrades)</p>
              <p className="text-xs">
                {" "}
                <span className=" text-blue-600 underline ">
                  Changed bag rules
                </span>{" "}
                and <br />{" "}
                <span className=" text-blue-600 underline ">
                  fees for optional services
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3 h-32">
              <button className="lg:h-8 h-10 w-full text-sm bg-blue-700 rounded-full text-white hover:bg-blue-900">
                Find Flights
              </button>
              <button className="flex justify-center items-center text-sm text-blue-700 border-2 h-10 lg:h-8 w-full rounded-full">
                {" "}
                <LuFolders /> Find your travel credits
              </button>
            </div>
          </div>
        </div>
        {/* right section */}
        <div>
          <div className="flex flex-col text-white p-4 bg-gray-950/80">
            <p className="text-xs">FAST WI-FI</p>
            <p className="text-2xl">
              Break the Wi-Fi <br />
              barrier. Free Wi-Fi on <br />
              select flights. Only <br /> with MileagePlus.
            </p>
            <p className="flex text-xs underline items-center">
              Join MileagePlus <MdNavigateNext className="text-lg" />
            </p>
          </div>
          <div>
            <img src="https://www.united.com/en-US/book-flight/united-reservations" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
