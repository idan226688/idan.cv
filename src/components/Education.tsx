
const EducationItem = ({ title, institution, date, points }: {
  title: string;
  institution: string;
  date: string;
  points: string[];
}) => (
  <div className="mb-6 last:mb-0">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-muted-foreground">{institution} | {date}</p>
    <ul className="mt-2 list-disc list-inside space-y-1">
      {points.map((point, index) => (
        <li key={index} className="text-sm text-muted-foreground">{point}</li>
      ))}
    </ul>
  </div>
);

export const Education = () => {
  return (
    <div>
      <EducationItem
        title="Computer Science (B.Sc.)"
        institution="Ruppin Academic Center"
        date="October 2019 – August 2022"
        points={[
          "Graduated with a GPA of 86.21",
          "Big Data Specialization: Gained expertise in algorithms, tools, and technologies to process, analyze, and derive insights from large-scale datasets."
        ]}
      />
      <EducationItem
        title="Software Development Bootcamp"
        institution="InfinityLabs R&D"
        date="January 2024 – November 2024"
        points={[
          "Gained in-depth experience in C and C++ programming within a Linux environment, with a strong focus on data structures, embedded systems, networking, multithreading, operating systems, kernel modules, object-oriented programming (OOP), design patterns, and algorithms.",
          "Enhanced problem-solving and debugging skills by building real-world applications, practicing Agile methodologies and collaborating within a team to deliver quality software solutions."
        ]}
      />
    </div>
  );
};
