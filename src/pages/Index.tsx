
import { ContactInfo } from "@/components/ContactInfo";
import { Section } from "@/components/Section";
import { Education } from "@/components/Education";
import { PdfExportButton } from "@/components/PdfExportButton";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  const projects = [
    {
      title: "IoT Cloud File Storage System (private)",
      description: "Designed and implemented a distributed IoT file storage system using RAID 0+1 architecture, written in C and C++."
    },
    {
      title: "Watchdog Software (private)",
      description: "Developed a fault-tolerant, multi-threaded watchdog program in C to monitor and restart critical processes."
    },
    {
      title: "Bacteria Level Prediction in Water (private)",
      description: "Designed and implemented predictive models using Python to estimate bacterial concentrations in water. This project was developed as part of my final project during the Big Data specialization, leveraging data analysis and machine learning techniques."
    },
    {
      title: "Other Projects",
      description: "Various projects in my computer science degree using different software languages - Java, JavaScript, HTML, CSS, SQL, C, C#, Python."
    }
  ];

  const skills = {
    "Languages": ["C", "C++", "Java", "Python"],
    "Development Tools": ["Git", "Docker"],
    "Operating Systems": ["Linux"],
    "Human Languages": ["Hebrew (Native)", "English (Fluent)"]
  };

  return (
    <div className="min-h-screen bg-background py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="text-center md:text-left mb-4 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Idan Hadad</h1>
          <ContactInfo />
        </div>

        <Section title="Summary">
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm sm:text-base">
            <li>Bachelor of Science (B.Sc.) in Computer Science.</li>
            <li>Enjoys collaborating in dynamic team environments and solving complex problems through simple and effective solutions, while learning new methods and technologies.</li>
            <li>Currently leveraging extensive expertise in C, C++, and Java backend development to deliver scalable, high-performance solutions with a focus on microservice architecture, enterprise integration, and optimized system design across mission-critical applications.</li>
          </ul>
        </Section>

        <Section title="Education">
          <Education />
        </Section>

        <Section title="Projects">
          <div className="grid gap-3 sm:gap-4">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-3 sm:p-4 hover:bg-accent transition-colors">
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{category}</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {items.map((item, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <PdfExportButton />
    </div>
  );
};

export default Index;
