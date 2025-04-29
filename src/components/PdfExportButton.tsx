
import { Button } from "./ui/button";
import { FileDown } from "lucide-react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Link as PDFLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    color: '#333',
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 8
  },
  contact: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#f3f4f6',
    borderRadius: 4
  },
  contactText: {
    fontSize: 8,
    color: '#6b7280'
  },
  section: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 6,
    border: '1pt solid #eaeaea'
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 6,
    paddingBottom: 3,
    borderBottom: '1pt solid #eaeaea'
  },
  sectionContent: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#4b5563'
  },
  paragraph: {
    fontSize: 9,
    marginBottom: 6,
    lineHeight: 1.4,
    color: '#4b5563'
  },
  bulletPoint: {
    marginBottom: 4,
    fontSize: 9,
    flexDirection: 'row'
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: '#4b5563'
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 2
  },
  listItemContent: {
    flex: 1,
    fontSize: 9,
    color: '#4b5563'
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },
  skillCategory: {
    width: '50%',
    marginBottom: 6
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#4b5563'
  },
  skillsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3
  },
  skillTag: {
    backgroundColor: '#e0e7ff',
    borderRadius: 8,
    padding: '2 6',
    fontSize: 7,
    color: '#8B5CF6'
  },
  projectCard: {
    marginBottom: 6,
    padding: 6,
    backgroundColor: '#f3f4f6',
    borderRadius: 4
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#4b5563'
  },
  projectDescription: {
    fontSize: 8,
    color: '#6b7280'
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: 7,
    paddingTop: 5,
    borderTop: '1pt solid #eaeaea'
  }
});

const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Idan Hadad</Text>
        <View style={styles.contact}>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>+972-50-4009634</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>idan226688@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <PDFLink src="https://github.com/idan226688" style={styles.contactText}>GitHub</PDFLink>
          </View>
          <View style={styles.contactItem}>
            <PDFLink src="https://www.linkedin.com/in/idan-hadad-8793a2249/" style={styles.contactText}>LinkedIn</PDFLink>
          </View>
        </View>
      </View>

      {/* Summary Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Bachelor of Science (B.Sc.) in Computer Science.</Text>
        </View>
        
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Enjoys collaborating in dynamic team environments and solving complex problems through simple and effective solutions, while learning new methods and technologies.</Text>
        </View>
        
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Currently leveraging extensive expertise in C, C++, and Java backend development to deliver scalable, high-performance solutions with a focus on microservice architecture, enterprise integration, and optimized system design across mission-critical applications.</Text>
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        
        <Text style={[styles.paragraph, { fontWeight: 'bold', marginBottom: 3 }]}>Computer Science (B.Sc.), Ruppin Academic Center | October 2019 – August 2022</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Graduated with a GPA of 86.21</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Big Data Specialization: Gained expertise in algorithms, tools, and technologies to process, analyze, and derive insights from large-scale datasets.</Text>
        </View>
        
        <Text style={[styles.paragraph, { fontWeight: 'bold', marginTop: 6, marginBottom: 3 }]}>InfinityLabs R&D, Software development Bootcamp | January 2024 – November 2024</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Gained in-depth experience in C and C++ programming within a Linux environment, with a strong focus on data structures, embedded systems, networking, multithreading, operating systems, kernel modules, object-oriented programming (OOP), design patterns, and algorithms.</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Enhanced problem-solving and debugging skills by building real-world applications, practicing Agile methodologies and collaborating within a team to deliver quality software solutions.</Text>
        </View>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>IoT Cloud File Storage System (private): Designed and implemented a distributed IoT file storage system using RAID 0+1 architecture, written in C and C++.</Text>
        </View>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Watchdog software (private): Developed a fault-tolerant, multi-threaded watchdog program in C to monitor and restart critical processes.</Text>
        </View>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Bacteria Level Prediction in Water (private): Designed and implemented predictive models using Python to estimate bacterial concentrations in water. This project was developed as part of my final project during the Big Data specialization, leveraging data analysis and machine learning techniques.</Text>
        </View>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Other projects: Various projects in my computer science degree using different software languages - Java, JavaScript, HTML, CSS, SQL, C, C#, Python.</Text>
        </View>
      </View>

      {/* Technical Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Language: C, C++, Java, Python.</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Development Tools: Git, Docker.</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Operating Systems: Linux.</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>Hebrew: Native.</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listItemContent}>English: Fluent.</Text>
        </View>
      </View>
      
      <Text style={styles.footer}>
        Idan Hadad | CV | Generated on {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export const PdfExportButton = () => {
  return (
    <PDFDownloadLink document={<CVDocument />} fileName="idan-hadad-cv.pdf">
      {({ loading }) => (
        <Button variant="outline" className="fixed bottom-4 right-4 z-50">
          {loading ? "Generating PDF..." : (
            <>
              <FileDown className="mr-2" />
              Download CV as PDF
            </>
          )}
        </Button>
      )}
    </PDFDownloadLink>
  );
};
