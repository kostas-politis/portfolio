import React, { ReactNode } from 'react';

interface ParentProps {
  children: ReactNode;
}

export default function GradientSkills({ children }: ParentProps) {
  return (
    <div className="scroller">
      <div className="scroller-inner gradient-wrapper">
        <svg
          width="0"
          height="0"
          style={{ position: 'absolute' }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e187" />
              <stop offset="100%" stopColor="#99ffd6" />
            </linearGradient>
          </defs>
        </svg>
        {children}
        {children}
      </div>
    </div>
  );
}
