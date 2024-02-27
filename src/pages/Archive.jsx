import { useEffect, useState } from "react";
import archiveList from "../archiveList.json";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Archive = () => {
  const { pathname } = useLocation();
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="p-4 bg-black archive">
      <div className="archive mt-36 columns-1 md:columns-3 xl:columns-5  gap-8 ">
        {archiveList.images.map((img, i) => (
          <>
            <img
              src={img.source}
              alt="archive"
              className={`rounded-[2rem] object-cover scale-[98%] mb-8`}
              key={i}
            />
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Archive;
