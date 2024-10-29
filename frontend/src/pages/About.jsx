import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">About</h1>
      <p className="text-yellow-600">
        Hi{" "}
        <strong className="text-yellow-400 font-semibold hover:scale-105 duration-500">
          {profile?.name ? profile.name : ""}

        </strong>{" "}
        Memorise is a pioneering digital platform designed to empower users in tracking and enhancing cognitive health. By integrating advanced memory and cognitive assessments with engaging exercises, Memorise serves as a comprehensive tool to detect early signs of memory-related conditions, including Alzheimer’s disease and other forms of dementia.
      </p>
      <h2 className="font-semibold text-yellow-400 text-xl">
      Cognitive Health Monitoring:
      </h2>
      <p className="text-yellow-600">
      Memorise enables users to keep track of their cognitive health over time. Through a series of scientifically backed memory and attention assessments, the app identifies subtle changes in cognitive performance, providing early insights into potential risk factors associated with cognitive decline.
       </p>
      <h2 className="font-semibold text-yellow-400 text-xl">
      Engaging Mental Exercises:
      </h2>
      <p className="text-yellow-600">
      At the heart of Memorise is a collection of interactive exercises aimed at stimulating various aspects of cognition. The app features a variety of challenges designed to target memory, attention, language, and problem-solving skills. These exercises are crafted to keep the mind agile and engaged, providing a fun yet impactful way to strengthen cognitive abilities. Regular engagement with these activities helps users maintain mental agility, which is critical in reducing the risk of memory-related conditions.
      </p>
      <br />
      <span className="text-yellow-600">
      Memorise offers each user a unique cognitive journey, tracking their progress over time and delivering personalized feedback based on individual performance. Detailed progress reports allow users to see patterns in their cognitive abilities, with tailored insights that guide them in making informed lifestyle adjustments. By empowering users with knowledge about their mental health, Memorise encourages a proactive approach to cognitive well-being and provides valuable feedback that users can share with healthcare professionals if needed.
      </span>
      <h2 className="font-semibold text-yellow-400 text-xl">
      Support for Caregivers and Healthcare Providers
      </h2>
      <p className="text-yellow-600">
      Recognizing the importance of caregiver involvement in cognitive health, Memorise also offers tools and resources designed to support families and caregivers of individuals at risk. Through caregiver-accessible insights and educational resources, Memorise enables loved ones to understand and support their family members’ cognitive health journey. Healthcare providers can also use the data to make more informed assessments, ensuring their patients receive the support they need.
      </p>
    </div>
  );
}

export default About;
