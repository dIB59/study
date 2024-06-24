import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, description }) => {
  return (
    <Card className="bg-gray-800 text-white shadow-md rounded-lg p-4 mb-4 w-80">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h3 className="text-md text-gray-400">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <Button className="bg-gray-700 text-white hover:bg-gray-600">LinkedIn</Button>
        <Button className="bg-gray-700 text-white hover:bg-gray-600">Twitter</Button>
        <Button className="bg-gray-700 text-white hover:bg-gray-600">Email</Button>
      </div>
    </Card>
  );
};

export default ProfileCard;