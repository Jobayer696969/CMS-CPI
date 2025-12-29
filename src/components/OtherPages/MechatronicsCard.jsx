/* =======================
   SYLLABUS DATA
======================= */
const syllabusData = [
  {
    year: "1st Year",
    image: "/images/Mechatronics img/Mechatronics1.jpg",
    points: [
      "Engineering Graphics & CAD: Learning to design parts and assemblies using computer software.",
      "Electrical & Electronics Fundamentals: Understanding the basics of circuits, components, and soldering.",
      "Workshop Technology: Hands-on experience with both mechanical tools and electronic testing.",
      "Basics of C Programming: Introducing logic and coding for hardware control.",
    ],
  },
  {
    year: "2nd Year",
    image: "/images/Mechatronics img/Mechatronics2.jpg",
    points: [
      "Digital Electronics: Studying logic gates, flip-flops, and integrated circuits.",
      "Sensors & Instrumentation: Learning how machines sense the world (proximity, temperature, and light sensors).",
      "Mechanisms & Machine Elements: Analyzing the mechanical movement used in robotic joints and linkages.",
      "Pneumatics & Hydraulics: Using fluid power to drive automated mechanical arms and presses.",
    ],
  },
  {
    year: "3rd Year",
    image: "/images/Mechatronics img/Mechatronics3.jpg",
    points: [
      "Microcontrollers (Arduino/PIC/ARM): Programming the brains that control mechatronic devices.",
      "Robotics & Kinematics: Studying robotic arm movements, degrees of freedom, and end-effectors.",
      "Mechanical Engineering Design: Basic design of machine elements like bolts, keys, and shafts.",
      "Thermal Engineering - II: Deep dive into Internal Combustion (IC) engines and air compressors.",
    ],
  },
  {
    year: "4th Year",
    image: "/images/Mechatronics img/Mechatronics4.jpg",
    points: [
      "Power Electronics: Managing the high voltage needed to drive industrial motors from low-voltage signals.",
      "Automobile Engineering: Detailed study of vehicle systems, transmissions, and braking.",
      "Product Design & Development: Integrating all skills to build a complete smart product.",
      "Major Project / Internship: Designing a working mechanical prototype or working in a manufacturing plant.",
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
    degree: "B.Sc. in Mechatronics  Engineering (BAUET)",
    highlight: true,
    image: "/images/Mechatronics img/Saibuzzaman.jpg",
  },
  {
    name: "Mishu Rana",
    role: "Instructor",
    degree: "M.Sc. in Mechatronics (DUET)",
    image: "/images/Mechatronics img/Mishu.jpg",
  },
  {
    name: "Md. Masud Rana",
    role: "Instructor",
    degree: "B.Sc. in Mechatronics Engineering (BUET)",
    image: "/images/Mechatronics img/Rana.jpg",
  },
  {
    name: "Md. Mehedi Al Hasan Prodhan",
    role: "Instructor",
    degree: "B.Sc. in Mechatronics Engineering (CUET)",
    image: "/images/Mechatronics img/Prodhan.jpg",
  },
  {
    name: "Md. Mostafizur Rahman",
    role: "Instructor",
    degree: "B.Sc. in Mechatronics Engineering (RUET)",
    image: "/images/Mechatronics img/Fizz.jpg",
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
              Diploma in Mechatronics Engineering
            </h1>

            <p className="text-gray-800 mt-4 text-sm sm:text-base leading-relaxed">
              A Diploma in Mechatronics Engineering is a 4 year multidisciplinary program that merges mechanical systems, electronics, control theory, and computer science. It focuses on the design and creation of "smart" machines and automated systems, such as industrial robots, automated assembly lines, and smart consumer products.{" "}
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
          Teachers <span className="font-normal">( Mechatronics )</span>
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
