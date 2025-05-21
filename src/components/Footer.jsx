import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-black mt-7">
      <div className="flex flex-col justify-center items-center gap-3 mt-5 p-5">
        <p className="flex  justify-center items-center bg-white h-10 w-25 rounded-lg border-2 border-blue-600">
          {" "}
          <IoSearch /> Search
        </p>
        <div>
          <button className="flex items-center justify-center text-white rounded-2xl w-30 hover:text-blue">
            <MdOutlineLanguage /> English-US$
          </button>
        </div>
        <div className="text-white flex gap-4">
          <div>
            <FaTiktok />
          </div>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaXTwitter />
          </div>
          <div>
            <FaYoutube />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaLinkedinIn />
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
            <p className="text-xs text-blue-700 underline">Contract of carriage</p>
            <p className="text-xs text-blue-700 underline">Lengthy tarmac delay plan</p>
            <p className="text-xs text-blue-700 underline">Legal information</p>
            <p className="text-xs text-blue-700 underline">Contract of carriage</p>
            <p className="text-xs text-blue-700 underline">Contract of carriage</p>
            <p className="text-xs text-blue-700 underline">Contract of carriage</p>
            <p className="text-xs text-blue-700 underline">Contract of carriage</p>
            <p className="text-xs text-blue-700 underline">Contract of carriage</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
