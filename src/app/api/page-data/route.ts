import { NextResponse } from "next/server";

const experienceData = [
  {
    icon: "/images/icon/duwurstudio.png",
    role: "Duwur Studio Bali.",
    location: "Denpasar",
    startYear: "March 2021",
    endYear: "September 2021",
    bulletPoints: [
      "Handled event photography for clients based on project requirements",
      "Edited raw photo files into final deliverables ready for client submission",
      "Provided operational support and assisted with tasks beyond core responsibilities",
    ],
  },
  {
    icon: "/images/icon/nrc.png",
    role: "PT Nusa Raya Cipta Tbk",
    location: "Denpasar, Bali",
    startYear: "March 2024",
    endYear: "March 2025",
    bulletPoints: [
      "Served as Information Systems Management Assistant in the back office division",
      "Supported IT equipment setup and troubleshooting for back office employees",
      "Prepared and ensured proper IT devices for construction project sites",
    ],
  },
];

const educationData = [
  {
    date: "2019 - 2022",
    title: "Multi Media",
    subtitle: "SMK Negeri 1 Kuta Selatan - Badung, Bali",
  },
  {
    date: "2022 - 2026",
    title: "Informatics - Information Data Management",
    subtitle: "Institut Bisnis dan Teknologi Indonesia - Denpasar, Bali",
  },
  {
    date: "2026 - Present",
    title: "Official IELTS and PTE Test Centre",
    subtitle:
      "IALF BALI General English and English for Young Learners - Denpasar, Bali",
  },
];

const projectOverview = {
  certifications: [
    {
      name: "IC3 GS6 Level 1",
      image: "/images/certifications/ic3.pdf",
    },
    {
      name: "Databases",
      image: "/images/certifications/databases.pdf",
    },
    {
      name: "TOEIC",
      image: "/images/certifications/toeic.pdf",
    },
  ],
  sideProjects: [
    { name: "Formless", url: "#" },
    { name: "Gridsnap", comingSoon: true },
    { name: "OrbitPay Mobile App", comingSoon: true },
    { name: "Siteflow Page Builder", comingSoon: true },
  ],
};

export const GET = async () => {
  return NextResponse.json({
    experienceData,
    educationData,
    projectOverview,
  });
};
