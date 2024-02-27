import archiveList from "../archiveList.json";
import Footer from "./Footer";

const Archive = () => {
  console.log(archiveList);
  return (
    <div className="p-4 bg-black">
      <div className="archive mt-36 columns-1 md:columns-3 xl:columns-5  gap-8 ">
        {archiveList.images.map((img, i) => (
          <img
            src={img.source}
            loading="lazy"
            alt="archive"
            className="rounded-[2rem] object-cover scale-[98%] mb-8"
            key={i}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Archive;
