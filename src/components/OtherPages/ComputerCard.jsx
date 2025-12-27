/* =======================
   SYLLABUS DATA
======================= */
const syllabusData = [
  {
    year: "1st Year",
    image: "/Computer/Computer1.jpg",
    points: [
      "Fundamentals of Computer & ICT",
      "Programming Language",
      "Digital Logic Design",
      "English & Communication Skills",
    ],
  },
  {
    year: "2nd Year",
    image: "/Computer/Computer2.jpg",
    points: [
      "Data Structures & Algorithms",
      "Database Management System (DBMS)",
      "Web Development (HTML, CSS, JavaScript, PHP)",
      "Applied Mathematics",
    ],
  },
  {
    year: "3rd Year",
    image: "/Computer/Computer3.jpg",
    points: [
      "Operating Systems",
      "Computer Networks",
      "Object Oriented Programming",
      "Software Engineering",
    ],
  },
  {
    year: "4th Year",
    image: "/Computer/Computer4.jpg",
    points: [
      "Artificial Intelligence & Machine Learning (Basics)",
      "Data Science & Big Data Analytics",
      "Cloud Computing & IoT",
      "Project / Internship",
    ],
  },
];

/* =======================
   TEACHERS DATA
======================= */
const teachers = [
  {
    name: "Syeda Farzana",
    role: "Department Head",
    degree: "MSC from NSU in",
    dept: "CSE Department.",
    highlight: true,
    image: "Computer/Farzana.jpg",
  },
  {
    name: "Muhammad Shahiyar Hossen",
    role: "Instructor",
    degree: "BSc from BUBT in",
    dept: "CSE Department.",
    image: "Computer/Shahriar.jpg",
  },
  {
    name: "Zakia Sultana Tanzil",
    role: "Instructor",
    degree: "BSc from AUST in",
    dept: "CSE Department.",
    image: "Computer/Zakia.jpg",
  },
  {
    name: "Mahfuza Sultana",
    role: "Instructor",
    degree: "BSc from BUET in",
    dept: "CSE Department.",
    image: "Computer/Mahfuza.jpg",
  },
  {
    name: "Tahmina Tahrim Esty",
    role: "Instructor",
    degree: "BSc from JU in",
    dept: "CSE Department.",
    image: "Computer/Esty.jpg",
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
export default function Computer() {
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
              Diploma in Computer Science & Technology
            </h1>

            <p className="text-gray-800 mt-4 text-sm sm:text-base leading-relaxed">
              A Diploma in Computer Science & Technology is a technical program
              that builds strong foundations in computing, programming,
              networking, databases, and modern IT systems.
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
