import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-3xl font-bold mb-6 text-green-400">About</h1>
      <p className="text-green-600">
        Hi{" "}
        <strong className="text-green-400 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
        ,We at GitHub Club believe in the power of community-driven development and open-source collaboration. Whether you are an experienced developer or just starting out, our club provides a space for learning, sharing, and growing together as we explore the world of software development, version control, and innovation.
      </p>
      <h2 className="font-semibold text-green-400 text-xl">
       What We Do:
      </h2>
      <p className="text-green-600">
        Workshops & Learning Sessions: Learn Git and GitHub from scratch, understand the best practices of code versioning, and collaborate on exciting open-source projects.
        Open-Source Projects: Engage in real-world projects, contribute to open-source repositories, and build your portfolio while making a global impact.
        Collaborative Coding: Team up with fellow developers, explore new technologies, and build applications that solve real-world problems.
        Hackathons & Competitions: Challenge yourself with coding competitions, participate in hackathons, and bring innovative ideas to life.
       </p>
      <h2 className="font-semibold text-green-400 text-xl">
        Why Join?:
      </h2>
      <p className="text-green-600">
        Community: Connect with like-minded individuals who share your passion for coding and technology.
        Skill Development: Enhance your coding, problem-solving, and collaboration skills through hands-on projects.
        Mentorship: Get guidance from experienced developers and industry professionals.
        Opportunities: Gain exposure to exciting job and internship opportunities through our network.
      </p>
      <br />
      <span className="text-green-600">
        He is dedicated to leveraging his expertise to contribute to
        innovative projects and drive technological advancements. Whether
        working on front-end interfaces or back-end logic, he is passionate
        about delivering exceptional digital solutions that meet user needs and
        exceed client expectations.
      </span>
      <h2 className="font-semibold text-green-400 text-xl">
        Tech Talks & Guest Speakers
      </h2>
      <p className="text-green-600">
      At <strong>GitHub Club</strong>, we regularly host Tech Talks featuring industry experts and seasoned developers. These sessions provide insights into the latest trends in software development, emerging technologies, and the open-source ecosystem. Our Guest Speakers share their experiences, offer valuable career advice, and discuss real-world challenges in the tech industry.

      Joining these talks will not only expand your technical knowledge but also help you network with professionals in the field, giving you a glimpse of what’s happening at the forefront of tech innovation
      </p>
    </div>
  );
}

export default About;
