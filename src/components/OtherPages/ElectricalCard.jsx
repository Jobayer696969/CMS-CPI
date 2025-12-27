/* =======================
   SYLLABUS DATA
======================= */
const syllabusData = [
  {
    year: "1st Year",
    image: "/Electrical img/Electrical1.jpg",
    points: [
      "Basic Electricity & Magnetism: Understanding voltage, current, resistance, and magnetic circuits.",
      "Engineering Drawing: Learning to read and create electrical circuit symbols and schematics.",
      "Workshop Practice: Hands-on training in basic house wiring, soldering, and jointing.",
      "Applied Mathematics: Building the calculus and algebra skills needed for circuit analysis.",
    ],
  },
  {
    year: "2nd Year",
    image: "/Electrical img/Electrical2.jpg",
    points: [
      "Electrical Circuits (AC/DC): Analyzing complex networks using Kirchhoff’s laws and theorems.",
      "Electrical Machines - I: Studying the construction and working of DC motors and transformers.",
      "Electronics Devices & Circuits: Introduction to semiconductors, diodes, and transistors.",
      "Electrical Measurements: Learning to use multimeters, oscilloscopes, and energy meters.",
    ],
  },
  {
    year: "3rd Year",
    image: "/Electrical img/Electrical3.jpg",
    points: [
      "Power Generation & Transmission: How electricity is produced in plants and sent over long distances.",
      "Electrical Machines - II: Advanced study of Induction motors and Synchronous machines.",
      "Digital Electronics & Microprocessors: Learning about logic gates and programming basic controllers.",
      "Estimating & Costing: Calculating the materials and costs for residential and industrial wiring projects.",
    ],
  },
  {
    year: "4th Year",
    image: "/Electrical img/Electrical4.jpg",
    points: [
      "Switchgear & Protection: Learning about circuit breakers, fuses, and protecting the grid from faults.",
      "Industrial Automation (PLC & SCADA): Programming automated systems used in modern factories.",
      "Utilization of Electrical Energy: Studying electric traction (trains), heating, and industrial drives.",
      "Major Project / Industrial Internship: Developing a hardware prototype or gaining on-site experience at a power substation.",
    ],
  },
];

/* =======================
   TEACHERS DATA
======================= */
const teachers = [
  {
    name: "Engr. Md. Habibur Rahman ",
    role: "Department Head",
    degree: "B.sc. in EEE (DUET)",
    dept: "Electrical Department",
    highlight: true,
    image: "Electrical img/Habib.png",
  },
  {
    name: "Rasedul Islam Rasel",
    role: "Instructor",
    degree: "B.Sc. in EEE (RUET)",
    dept: "Electrical Department",
    image: "Electrical img/Rasel.png",
  },
  {
    name: "Md. Mehedi Hasan",
    role: "Instructor",
    degree: "B.Sc. in EEE (CUET)",
    dept: "Electrical Department",
    image: "Electrical img/Mehedi.jpg",
  },
  {
    name: "Md. Monsur Ali",
    role: "Instructor",
    degree: "B.Sc. in EEE (DUET)",
    dept: "Electrical Department",
    image: "Electrical img/Monsur.jpg",
  },
  {
    name: "Md. Shakil Hossain",
    role: "Instructor",
    degree: "B.Sc. in EEE (BUET)",
    dept: "Electrical Department",
    image: "Electrical img/Shakil.jpg",
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

      <h3 className="font-semibold text-gray-900 text-base">
        {teacher.name}
      </h3>

      <p className="text-sm font-medium text-gray-700 mt-1">
        {teacher.role}
      </p>

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
              Diploma in Electrical Engineering
            </h1>

            <p className="text-gray-800 mt-4 text-sm sm:text-base leading-relaxed">
              A Diploma in Electrical Engineering is a 4 year technical program that focuses on the generation, transmission, and distribution of electricity. It covers the fundamental principles of electromagnetism, circuitry, and power systems, alongside hands-on training in electrical wiring, motor control, and renewable energy technologies.
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
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
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
          Teachers <span className="font-normal">( CST )</span>
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
