import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, description, email, linkedin, twitter }) => {
  return (
    <Card className="bg-gray-800 text-white shadow-md rounded-lg p-4 mb-4 w-full">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h3 className="text-md text-gray-400">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        {email && (
          <a href={`mailto:${email}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            <Image src="/gmail.svg" alt="Email" width={24} height={24} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            <Image src="../linkedin.svg" alt="LinkedIn" width={30} height={30} />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            <Image src="../linkedin.svg" alt="Twitter" width={24} height={24} />
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProfileCard;
