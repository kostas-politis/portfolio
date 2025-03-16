import React, { ReactElement } from 'react';
interface SkillProps {
  children: ReactElement;
  title: string;
}

export default function Skill({ children, title }: SkillProps) {
  return (
    <div className="flex items-center gap-x-3 rounded-md border-2 p-3">
      {children}
      <span>{title}</span>
    </div>
  );
}
