/* =======================
   SYLLABUS DATA
======================= */
const syllabusData = [
  {
    year: "1st Year",
    image: "/images/Mechanical img/Mechanical1.jpg",
    points: [
      "Engineering Graphics: Mastery of orthographic projections and 3D modeling fundamentals.",
      "Workshop Technology: Practical training in fitting, carpentry, and basic smithy.",
      "Applied Mechanics: Studying the laws of motion, friction, and equilibrium in mechanical systems.",
      "Basic Mathematics & Chemistry: Core science for understanding material properties and industrial processes.",
    ],
  },
  {
    year: "2nd Year",
    image: "/images/Mechanical img/Mechanical2.jpg",
    points: [
      "Thermodynamics: Understanding heat transfer, energy cycles, and steam properties.",
      "Material Science & Metallurgy: Studying the internal structure and properties of metals and alloys.",
      "Strength of Materials: Analyzing how machine parts react to tension, compression, and shear.",
      "Manufacturing Processes - I: Learning traditional machining like Lathe work, Drilling, and Milling.",
    ],
  },
  {
    year: "3rd Year",
    image: "/images/Mechanical img/Mechanical3.jpg",
    points: [
      "Fluid Mechanics & Machinery: Studying the behavior of liquids and the operation of pumps and turbines.",
      "Theory of Machines: Analyzing the motion of links, cams, gears, and governors.",
      "Mechanical Engineering Design: Basic design of machine elements like bolts, keys, and shafts.",
      "Thermal Engineering - II: Deep dive into Internal Combustion (IC) engines and air compressors.",
    ],
  },
  {
    year: "4th Year",
    image: "/images/Mechanical img/Mechanical4.jpg",
    points: [
      "CAD/CAM & CNC: Learning Computer-Aided Manufacturing and programming automated CNC machines.",
      "Automobile Engineering: Detailed study of vehicle systems, transmissions, and braking.",
      "Industrial Engineering & Management: Focus on plant layout, work-study, and productivity.",
      "Major Project / Internship: Designing a working mechanical prototype or working in a manufacturing plant.",
    ],
  },
];

/* =======================
   TEACHERS DATA
======================= */
const teachers = [
  {
    name: "Shah Rupom ",
    role: "Department Head",
    degree: "B.Sc. in Mechanical Engineering (BAUET)",
    highlight: true,
    image: "/images/Mechanical img/Rupom.png",
  },
  {
    name: "Md. Shohaib Hasan",
    role: "Instructor",
    degree: "M.Sc. in Physics (DU)",
    image: "/images/Mechanical img/Shohaib.jpg",
  },
  {
    name: "Md. Masud Rana",
    role: "Instructor",
    degree: "B.Sc. in Mechanical Engineering (BUET)",
    image: "/images/Mechanical img/Rana.jpg",
  },
  {
    name: "Md. Mehedi Al Hasan Prodhan",
    role: "Instructor",
    degree: "B.Sc. in Mechanical Engineering (CUET)",
    image: "/images/Mechanical img/Prodhan.jpg",
  },
  {
    name: "Md. Mostafizur Rahman",
    role: "Instructor",
    degree: "B.Sc. in Mechanical Engineering (RUET)",
    image: "/images/Mechanical img/Fizz.jpg",
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
              Diploma in Mechanical Engineering
            </h1>

            <p className="text-gray-800 mt-4 text-sm sm:text-base leading-relaxed">
              A Diploma in Mechanical Engineering is a 4 year technical
              program that focuses on the design, analysis, manufacturing, and
              maintenance of mechanical systems. It covers the fundamental
              principles of mechanics, thermodynamics, and energy, teaching
              students how to turn raw materials into functional machines.{" "}
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
          Teachers <span className="font-normal">( Mechanical )</span>
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
