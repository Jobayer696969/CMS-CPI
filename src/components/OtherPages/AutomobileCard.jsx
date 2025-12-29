/* =======================
   SYLLABUS DATA
======================= */
const syllabusData = [
  {
    year: "1st Year",
    image: "/images/Automobile img/Automobile1.jpg",
    points: [
      "Technical Drawing: Learning to read and draw automotive components and assemblies.",
      "Basic Workshop Practice: Hands-on training in smithy, welding, and metal fitting.",
      "Engineering Mathematics: Building the foundation for calculating engine torque and power.",
      "Automotive Materials: Studying the properties of alloys, polymers, and glass used in vehicles.",
    ],
  },
  {
    year: "2nd Year",
    image: "/images/Automobile img/Automobile2.jpg",
    points: [
      "Internal Combustion (IC) Engines: Detailed study of 2-stroke and 4-stroke petrol and diesel engines.",
      "Chassis & Body Engineering: Understanding the structural frame, suspension, and steering systems.",
      "Fuel & Lubricants: Studying the chemistry of fuels and the importance of lubrication in moving parts.",
      "Thermodynamics: Analyzing heat energy conversion within engine cylinders.",
    ],
  },
  {
    year: "3rd Year",
    image: "/images/Automobile img/Automobile3.jpg",
    points: [
      "Transmission Systems: Learning about clutches, gearboxes, propeller shafts, and differentials.",
      "Automotive Electricals: Studying batteries, alternators, ignition systems, and lighting.",
      "Vehicle Dynamics: Analyzing braking systems, wheel alignment, and stability control.",
      "Garage Practice: Hands-on experience in engine dismantling and reassembly.",
    ],
  },
  {
    year: "4th Year",
    image: "/images/Automobile img/Automobile4.jpg",
    points: [
      "Electric & Hybrid Vehicles: Exploring battery technology, motors, and charging infrastructure for EVs.",
      "Automobile Engineering: Detailed study of vehicle systems, transmissions, and braking.",
      "Autotronics: Understanding Electronic Control Units (ECUs) and vehicle sensor networks",
      "Vehicle Maintenance & Emissions: Learning diagnostic techniques and how to control exhaust pollution.",
    ],
  },
];

/* =======================
   TEACHERS DATA
======================= */
const teachers = [
  {
    name: "Saibuzzaman Ali Mahdi",
    role: "Department Head",
    degree: "B.Sc. in Automobile  Engineering (BAUET)",
    highlight: true,
    image: "/images/Automobile img/Saibuzzaman.jpg",
  },
  {
    name: "Mishu Rana",
    role: "Instructor",
    degree: "M.Sc. in Automobile (DUET)",
    image: "/images/Automobile img/Mishu.jpg",
  },
  {
    name: "Talha Bin Abdur Rahman",
    role: "Instructor",
    degree: "B.Sc. in Automobile Engineering (BUET)",
    image: "/images/Automobile img/Talha.jpg",
  },
  {
    name: "Md. Towhiddjjaman",
    role: "Instructor",
    degree: "B.Sc. in Automobile Engineering (CUET)",
        image: "/images/Automobile img/Towhiddjjaman.png",
  },
  {
    name: "Sayeda Farjana Yasmin",
    role: "Instructor",
    degree: "B.Sc. in Automobile Engineering (RUET)",
    image: "/images/Automobile img/Yasmin.jpg",
  },
];

/* =======================
   TEACHER CARD
======================= */
const TeacherCard = ({ teacher }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[260px] mx-auto text-center transition-transform duration-300 hover:-translate-y-1">
      {/* Image Placeholder */}
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="font-semibold text-gray-900 text-base">{teacher.name}</h3>

      <p className="text-sm font-medium text-gray-700 mt-1">{teacher.role}</p>

      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
        {teacher.degree}
        <br />
        {teacher.dept}
      </p>
    </div>
  );
};

/* =======================
   MAIN PAGE
======================= */
export default function CST() {
  const head = teachers.find((t) => t.highlight);
  const others = teachers.filter((t) => !t.highlight);

  return (
    <main className="w-full">
      {/* =======================
          SYLLABUS SECTION
      ======================= */}
      <section className="bg-white text-black">
        <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-12">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
              Diploma in Automobile Engineering
            </h1>

            <p className="text-gray-800 mt-4 text-sm sm:text-base leading-relaxed">
              A Diploma in Automobile Engineering is a 4 year technical program that focuses on the design, manufacturing, testing, and servicing of vehicles. It covers the complex systems of modern transport, including engines, transmission systems, electricals, and safety features.{" "}
            </p>

            <p className="text-gray-900 font-semibold mt-4 text-sm sm:text-base">
              Course Syllabus (4 Years)
            </p>
          </div>

          {/* Syllabus Cards */}
          <div className="space-y-16 max-w-6xl mx-auto">
            {syllabusData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12`}
              >
                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                    {item.year}
                  </h2>

                  <ul className="space-y-2 text-gray-900 text-sm sm:text-base">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Placeholder */}
                <div className="w-full md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.year}
                    className="w-full aspect-video md:aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          TEACHERS SECTION
      ======================= */}
      <section className="bg-[#1f2f4f] py-16 px-4">
        <h2 className="text-center text-white text-3xl font-semibold mb-12">
          Teachers <span className="font-normal">( Automobile )</span>
        </h2>

        {/* Department Head */}
        <div className="flex justify-center mb-16">
          <TeacherCard teacher={head} />
        </div>

        {/* Other Teachers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {others.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>
      </section>
    </main>
  );
}
