import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Services
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Complete Construction, Engineering, Architectural,
              Electrical, Plumbing, Furniture and Industrial Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Featured Projects
              </h2>

              <p className="text-gray-600 mt-3">
                A showcase of some of our completed projects.
              </p>
            </div>

            <Link
              href="/projects"
              className="mt-4 md:mt-0 bg-black text-white px-6 py-3 rounded-lg"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY VIDEO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold">
              Company Project Video
            </h2>

            <p className="text-gray-600 mt-3">
              Watch one of our ongoing construction projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <video controls className="w-full rounded-2xl">
              <source src="/images/v1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20">
        <div className="container-custom px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready To Start Your Project?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Contact us today for construction, engineering,
            electrical, plumbing, furniture and design services.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
          >
            Get Free Quote
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}