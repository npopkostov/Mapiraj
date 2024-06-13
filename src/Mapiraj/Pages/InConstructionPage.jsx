import React from "react";
import Header from "../../PotHoles/Components/Header";
import Footer from "../../PotHoles/Components/Footer";
import { MdConstruction } from "react-icons/md";

const InConstructionPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-green-50 h-[750px] items-center justify-center">
        {" "}
        <MdConstruction className="size-60 flex-col text-yellow-600" />
        <h1 className="flex-col font-bold text-4xl">Under construction</h1>
        <h1 className="flex-col font-bold text-xl">ETD: 1-2 Weeks</h1>
      </div>
      <Footer />
    </>
  );
};

export default InConstructionPage;
