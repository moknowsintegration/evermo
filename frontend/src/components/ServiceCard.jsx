import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#1E3A8A]">
      <CardHeader>
        <div className="w-12 h-12 bg-[#1E3A8A] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-[#1E3A8A]" />
        </div>
        <CardTitle className="text-xl font-semibold text-[#1F2937]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[#6B7280] mb-4">{description}</CardDescription>
        <Link
          to={link}
          className="inline-flex items-center text-sm font-medium text-[#1E3A8A] hover:text-[#F59E0B] group"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;