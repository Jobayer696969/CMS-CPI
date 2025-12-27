/* =======================
   SYLLABUS DATA
======================= */
const syllabusData = [
  {
    year: "1st Year",
      image: "/Civil img/Civil1.jpg",
    points: [
      "Engineering Drawing: Learning the basics of manual drafting and geometric construction.",
      "Civil Engineering Materials: Studying the properties of brick, cement, timber, and stone.",
      "Digital Logic DesignApplied Mechanics: Understanding forces, moments, and their effects on structures.",
      "Mathematics & Physics: Building the core scientific foundation for structural calculations.",
    ],
  },
  {
    year: "2nd Year",
          image: "/Civil img/Civil2.jpg",
    points: [
      "Surveying: Mastering the use of leveling instruments, theodolites, and total stations.",
      "Mechanics of Structures: Analyzing stress, strain, and the internal forces in beams and columns.",
      "Hydraulics: Studying fluid flow, water pressure, and open channel systems.",
      "Building Construction: Learning the step-by-step process of constructing foundations, walls, and roofs.",
    ],
  },
  {
    year: "3rd Year",
          image: "/Civil img/Civil3.jpg",
    points: [
      "Concrete Technology: Designing mix proportions and testing the strength of Reinforced Cement Concrete (RCC).",
      "Quantity Surveying & Estimating: Calculating the cost, materials, and labor required for a project.",
      "Transportation Engineering: Designing road layouts, highway pavements, and railway tracks.",
      "Geotechnical Engineering: Analyzing soil types and their ability to support heavy structures.",
    ],
  },
  {
    year: "4th Year",
          image: "/Civil img/Civil4.jpg",
    points: [
      "Artificial Intelligence & Machine Learning (Basics)",
      "Environmental Engineering: Studying water supply systems and sewage treatment plants.",
      "Construction Management: Project scheduling, safety regulations, and site supervision techniques.",
      "Major Project / Internship: Completing a real-world design project or working on-site at a construction firm",
    ],
  },
];

/* =======================
   TEACHERS DATA
======================= */
const teachers = [
  {
    name: "Engr. Md. Mahbub Prince ",
    role: "Department Head",
    degree: "B.Sc. in CE (RUET) ",
    highlight: true,
        image: "Civil img/Prince.png",
  },
  {
    name: "Engr. Md. Mahabub Alam",
    role: "Instructor",
    degree: "B.Sc. in CE (RUET) ",
        image: "Civil img/Mahbub.png",

  },
  {
    name: "Md. Shahadot Hossain",
    role: "Instructor",
    degree: "B.Sc. (Engg) in CE (IUBAT) ",
        image: "Civil img/Sahadot.png",
  },
  {
    name: "Md. Imran Khan",
    role: "Instructor",
    degree: "B.Sc. (Hons) in Mathematics (IU) ",
        image: "Civil img/Emran.png",
  },
  {
    name: "Aly Amrin Jinnut",
    role: "Instructor",
    degree: "B.Sc. in CE ",
        image: "Civil img/Amrin.png",
  }

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
              Diploma in Civil Engineering
            </h1>

            <p className="text-gray-800 mt-4 text-sm sm:text-base leading-relaxed">
             A Diploma in Civil Engineering is a 4 year technical program that focuses on the planning, design, construction, and maintenance of the physical and naturally built environment. It provides students with a strong foundation in surveying, structural mechanics, construction materials, and blueprint reading.
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
