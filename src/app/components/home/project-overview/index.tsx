"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectOverview = () => {
  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjectData(data?.projectOverview);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedImage, setSelectedImage] = useState<any>(null);

const openCertificate = (img: any) => {
  setSelectedImage(img);
};

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ">
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                Certifications
              </p>
              <div className="flex flex-col gap-2.5">
                {projectData?.certifications?.map((value: any, index: any) => {
                  return (
                    <button
                      key={index}
                      onClick={() => openCertificate(value?.image)}
                      className="group flex items-center gap-2 text-left"
                    >
                      <h4>{value?.name}</h4>
                      <Image
                      src={"/images/icon/tile-arrow-icon.svg"}
                      alt="tile-icon"
                      width={24}
                      height={24}
                      className="shrink-0 transition-all duration-300 ease-in group-hover:translate-x-1.5 group-hover:rotate-45"
                    />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                Side Projects
              </p>
              <div className="flex flex-col gap-2.5">
                {projectData?.sideProjects?.map((value: any, index: any) => {
                  const isComingSoon = value?.comingSoon;

                  const content = (
                    <div className="group flex flex-wrap items-center gap-2">
                      <h4
                        className={`${isComingSoon ? "text-muted-foreground" : "text-primary"}`}
                      >
                        {value?.name}
                      </h4>
                      {!isComingSoon ? (
                        <Image
                          src={"/images/icon/tile-arrow-icon.svg"}
                          alt="tile-icon"
                          width={24}
                          height={24}
                          className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                        />
                      ) : (
                        <div className="py-1.5 px-3 bg-muted rounded-lg">
                          <p className="text-xs md:text-base font-normal text-muted-foreground">
                            Coming Soon
                          </p>
                        </div>
                      )}
                    </div>
                  );

                  return isComingSoon ? (
                    <div key={index}>{content}</div>
                  ) : (
                    <Link key={index} href="/" className="group">
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-5"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="bg-white rounded-2xl p-4 max-w-4xl w-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Tombol kembali */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-3 right-4 px-3 py-1 rounded-lg border text-sm font-medium hover:bg-gray-100 transition"
      >
        ✕ Back
      </button>

      {/* PDF */}
      <iframe
        src={selectedImage}
        title="Certificate Preview"
        className="w-full h-[80vh] rounded-xl mt-10"
      />
    </div>
  </div>
)}

    </section>
  );
};

export default ProjectOverview;
