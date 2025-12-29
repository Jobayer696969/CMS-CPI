/* =======================
   SYLLABUS DATA
======================= */
const syllabusData = [
  {
    year: "1st Year",
    image: "/images/Textile img/Textile1.jpg",
    points: [
      "Introduction to Textile Fibers: Studying the properties of natural fibers (cotton, silk, wool) and man-made fibers (polyester, nylon).",
      "Textile Chemistry - I: Learning the chemical composition of fibers and the basics of textile processing.",
      "Engineering Drawing: Designing textile machinery parts and plant layouts.",
      "Basic Mechanical & Electrical Engineering: Understanding the power systems that drive massive textile mills.",
    ],
  },
  {
    year: "2nd Year",
    image: "/images/Textile img/Textile2.jpg",
    points: [
      "Yarn Manufacture (Spinning): Learning the process of cleaning, carding, and spinning raw fiber into yarn.",
      "Fabric Manufacture (Weaving): Understanding loom mechanisms and how warp and weft yarns are interlaced.",
      "Textile Testing - I: Measuring fiber strength, fineness, and maturity in a laboratory setting.",
      "Fabric Structure & Analysis: Learning to identify different weaves like plain, twill, and satin.",
    ],
  },
  {
    year: "3rd Year",
    image: "/images/Textile img/Textile3.jpg",
    points: [
      "Dyeing & Printing Technology: Studying the application of colors and patterns to various types of fabrics.",
      "Knitting Technology: Understanding the mechanisms of circular and flat-bed knitting machines.",
      "Textile Finishing: Learning chemical and mechanical treatments that give fabrics special properties like water resistance or softness.",
      "Computer-Aided Textile Design (CATD): Using software to create intricate fabric patterns and garment designs.",
    ],
  },
  {
    year: "4th Year",
    image: "/images/Textile img/Textile4.jpg",
    points: [
      "Garment Manufacturing Technology: Learning the industrial process of pattern making, cutting, and sewing.",
      "Industrial Management & Quality Control: Managing labor productivity and ensuring fabrics meet international standards (like ISO).",
      "Technical Textiles: Exploring specialized fabrics used in medical, aerospace, and automotive industries.",
      "Major Project / Internship: Completing a stint in a spinning or dyeing mill to gain real-world industrial experience.",
    ],
  },
];

/* =======================
   TEACHERS DATA
======================= */
const teachers = [
  {
    name: "Sayeda Farjana Yasmin",
    role: "Department Head",
    degree: "B.Sc. in Textile  Engineering (BAUET)",
    highlight: true,
    image: "/images/Textile img/Yasmin.jpg",
  },
  {
    name: "Engr. Md. Mahbub Prince",
    role: "Instructor",
    degree: "M.Sc. in Textile (DUET)",
    image: "/images/Textile img/Mahbub.jpg",
  },
  {
    name: "TMd. Imran Khan",
    role: "Instructor",
    degree: "B.Sc. in Textile Engineering (BUET)",
    image: "/images/Textile img/Imran.jpg",
  },
  {
    name: "Aly Amrin Jinnut",
    role: "Instructor",
    degree: "B.Sc. in Textile Engineering (CUET)",
        image: "/images/Textile img/Jinnut.jpg",
  },
  {
    name: "Md. Arifur Rahman Sarkar",
    role: "Instructor",
    degree: "B.Sc. in Textile Engineering (RUET)",
    image: "/images/Textile img/Arifur.jpg",
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
              Diploma in Textile Engineering
            </h1>

            <p className="text-gray-800 mt-4 text-sm sm:text-base leading-relaxed">
              A Diploma in Textile Engineering is a 2–4 year technical program that focuses on the science of fibers, yarn production, fabricTextile manufacture, and chemical processing. It covers the entire production chain—from the molecular structure of natural and synthetic fibers to the high-speed industrial machinery used in weaving and knitting.{" "}
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
          Teachers <span className="font-normal">( Textile )</span>
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
