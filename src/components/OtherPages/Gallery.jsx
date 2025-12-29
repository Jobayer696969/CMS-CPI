const galleryData = [
      {
    title: "Achievements",
    images: [
      "/Gallery img/Our NASA Boy.jpg",
      "/Gallery img/Mr Increadable-Tariqul.jpg",
    ],
  },
  {
    title: "Campus Days",
    images: [
      "/Gallery img/Campus Days-1.jpg",
      "/Gallery img/Campus Days-2.jpg",
      "/Gallery img/Campus Days-3.jpg",
      "/Gallery img/Campus Days-4.jpg",
    ],
  },
  {
    title: "Picnic 2025",
    images: [
      "/Gallery img/Picnic-2025-1.jpg",
      "/Gallery img/Picnic-2025-2.jpg",
      "/Gallery img/Picnic-2025-3.jpg",
      "/Gallery img/Picnic-2025-4.jpg",
      "/Gallery img/Picnic-2025-5.jpg",
      "/Gallery img/Picnic-2025-6.jpg",
      "/Gallery img/Picnic-2025-7.jpg",
      "/Gallery img/Picnic-2025-8.jpg",
      "/Gallery img/Picnic-2025-9.jpg",
      "/Gallery img/Picnic-2025-10.jpg",
      "/Gallery img/Picnic-2025-11.jpg",
      "/Gallery img/Picnic-2025-12.jpg",
      "/Gallery img/Picnic-2025-13.jpg",
      "/Gallery img/Picnic-2025-14.jpg",
      "/Gallery img/Picnic-2025-15.jpg",
      "/Gallery img/Picnic-2025-16.jpg",
      "/Gallery img/Picnic-2025-17.jpg",
      "/Gallery img/Picnic-2025-18.jpg",
      "/Gallery img/Picnic-2025-19.jpg",
    ],
  },
  {
    title: "Iftar Parties",
    images: [
      "/Gallery img/Iftar Party-2024.jpg",
      "/Gallery img/Iftar Party-2025.jpg",
    ],
  },
];

const Gallery = () => {
  return (
    <div className="w-full bg-gray-950 px-4 md:px-8 py-12">
      {galleryData.map((section, index) => (
        <div key={index} className="mb-20">
          {/* SECTION TITLE */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 border-l-4 border-blue-500 pl-4">
            {section.title}
          </h2>

          {/* MASONRY GALLERY */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
            {section.images.map((img, i) => (
              <div
                key={i}
                className="mb-4 break-inside-avoid rounded-xl overflow-hidden bg-gray-800 shadow-lg hover:scale-[1.02] transition"
              >
                <img
  src={`/images${img}`}
  alt=""
  className="w-full"
/>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
