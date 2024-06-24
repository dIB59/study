'use client';

import React from "react";
import ProfileCard from "./about";

export default function AboutPage() {
    return (
      <main className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-4">
        <h1 className="text-3xl font-semibold mb-6 text-center">About Us</h1>
        <div className="flex justify-start items-start">
          <div className="flex flex-col">
            <ProfileCard
              name="Ibrahim Iqbal"
              title="Founder & CEO"
              description="Ibrahim is the visionary behind our company with extensive experience in the industry."
            />
            <ProfileCard
              name="Unas Aamir"
              title="Chief Technology Officer"
              description="Unas leads our tech team, ensuring we stay ahead of the curve with innovative solutions."
            />
            <ProfileCard
              name="Murtaza Iqbal"
              title="Chief Marketing Officer"
              description="Murtaza drives our marketing efforts, connecting us with clients around the globe."
            />
          </div>
        </div>
      </main>
    );
  }