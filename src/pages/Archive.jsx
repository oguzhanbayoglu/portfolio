import archiveList from "../archiveList.json";

const Archive = () => {
  console.log(archiveList);
  return (
    <div className="p-4 bg-black">
      <div className="archive mt-40 columns-1 md:columns-3 xl:columns-5 2xl:columns-7 gap-8 ">
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
      <footer className="flex gap-4 items-center justify-center mb-16 mt-40 w-full">
        <img src="logo.png" alt="logo" className="h-4" />{" "}
        <p className="pt-1 font-mono text-white">Oguzhan Bayoglu - 2024</p>{" "}
      </footer>
    </div>
  );
};

export default Archive;
