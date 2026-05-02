import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const socialIcon = [
    {
      img: "/images/icon/instagram.svg",
      href: "https://www.instagram.com/dwipahendrawan",
      icon: "Instagram",
    },
    {
      img: "/images/icon/linkedin-icon.svg",
      href: "#!",
      icon: "Linkedin",
    },
    {
      img: "/images/icon/github-icon.svg",
      href: "https://github.com/DwipaHendrawan",
      icon: "github",
    },
    {
      img: "/images/icon/whatsapp-icon.svg",
      href: "https://wa.me/6285156659781",
      icon: "whatsapp",
    },
  ];

  return (
    <section>
      <div className="container">
        {/* Banner */}
        <div className="w-full h-72">
          <Image
            src={"/images/hero-sec/bg-banner.png"}
            alt="banner-img"
            width={1080}
            height={267}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="border-x border-primary/10">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-7 pb-10">
            {/* Profile Image */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-44">
              <Image
                src={"/images/hero-sec/userr.png"}
                alt="user-img"
                width={250}
                height={250}
                className="rounded-full border-4 border-white shadow-md"
              />
            </div>

            {/* Main Content */}
            <div className="pt-24 flex flex-col items-center text-center gap-4">
              {/* Name */}
              <h1 className="text-2xl sm:text-3xl font-semibold">
                Dwipayana Hendrawannnnn
              </h1>

              {/* Role */}
              <p className="text-violet-600">Fresh Graduate</p>

              {/* Location */}
              <div className="flex items-center gap-2 text-primary">
                <Image
                  src={"/images/icon/map-icon.svg"}
                  alt="map-icon"
                  width={18}
                  height={18}
                />
                <span>Badung, Bali</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-3">
                {socialIcon.map((value, index) => (
                  <Link
                    href={value.href}
                    key={index}
                    target="_blank"
                    className="p-3 border border-primary/10 rounded-full hover:bg-primary/5 transition"
                  >
                    <Image
                      src={value.img}
                      alt={value.icon}
                      width={18}
                      height={18}
                    />
                  </Link>
                ))}
              </div>

              {/* Button */}
              <Button asChild className="mt-4 rounded-full p-[2px]">
                <Link
                  href="mailto:dwipayana2112@gmail.com"
                  className="rounded-full bg-gradient-to-r from-[#9282F8] to-[#F3CA4D] p-[2px]"
                >
                  <span className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full">
                    <Image
                      src="/images/icon/spark-icon.svg"
                      alt="spark-icon"
                      width={14}
                      height={14}
                    />
                    Get in touch
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
