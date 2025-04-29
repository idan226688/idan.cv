
import { ReactNode } from 'react';
import { Card } from './ui/card';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <Card className="p-6 card-hover">
      <h2 className="section-title">{title}</h2>
      {children}
    </Card>
  );
};
