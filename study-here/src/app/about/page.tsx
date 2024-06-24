'use client';

import React from "react";
import ProfileCard from "./about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-4 pt-16">
      <h1 className="text-3xl font-semibold mb-6 text-center">About Us</h1>
      <div className="flex flex-col items-start">
        <ProfileCard
          name="Murtaza Iqbal"
          title="Python Developer || Jenkins || Data science student"
          description="Murtaza Iqbal is a Python Developer with experience in Jenkins and currently pursuing studies in Data Science. He is known for his expertise in Python programming and IT security. Murtaza's education includes studies at Lexicon IT-Proffs, focusing on Python and IT Security, and The Open University, where he is pursuing a degree in Data Science."
          linkedin="https://www.linkedin.com/in/s-murtaza-iqbal/"

        />
        <ProfileCard
          name="Ibrahim Iqbal"
          title="Full Stack Developer"
          description="Ibrahim Iqbal is a Full Stack Developer based in Sweden.  He has worked as a software development consultant at SALT, where he actively participates in the software development lifecycle, from testing to deployment. Ibrahim is proficient in Java, Spring, TypeScript, and Python, and he specializes in mob programming and HTTP."
          linkedin="https://www.linkedin.com/in/dib59/"

        />
        <ProfileCard
          name="Unas Aamir"
          title="Full Stack Developer"
          description="Unas Aamir is an experienced computer science student with a background in software engineering. Having completed his Bachelor's in Computer Science at the Institute of Business Administration (IBA). He has gained practical experience through internships at BCI News Media and Alkhidmat Foundation Pakistan, where he worked on projects ranging from website accessibility testing to content development and cataloging."
        />
      </div>
    </main>
  );
}