"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "@/components/Projects.json";
import { Button } from "@/components/ui/button";

export default function ProjectDetailPage() {
  const [project, setProject] = useState<any>(null);
  const params = useParams();

  useEffect(() => {
    const projectId = params.id as string;
    const foundProject = Projects.find((p) => p.number === projectId);

    setProject(foundProject);
  }, [params.id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="pt-[91px] pb-20">
      <div className="text-start bg-ternary py-16">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary">
            {project.name}
          </h1>
          <div className="w-24 h-2 bg-primary mt-4"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8 pt-20">
        <div className="w-full">
          <p className="text-lg font-extralight text-gray-700 pb-10">
            {project.description}
          </p>
          <Link href="/">
            <Button className="bg-primary hover:bg-secondary/80 transition-colors duration-500">
              BACK TO PROJECTS
            </Button>
          </Link>
        </div>
        <div>
          <Slider {...settings}>
            {/* Adjusted heights for better visibility */}
            <div className="relative h-[500px] md:h-[500px]">
              <img
                src="/assets/services/Construction-Management.avif"
                alt="Detail Image 1"
                className="rounded-md h-full object-cover"
              />
            </div>
            <div className="relative h-[500px] md:h-[500px]">
              <img
                src={project.DetailImageTwo}
                alt="Detail Image 2"
                className="rounded-md h-full object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
