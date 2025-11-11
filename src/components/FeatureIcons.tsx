import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  background: linear-gradient(135deg, rgba(59,130,246,0.08), rgba(16,185,129,0.08));
  border-radius: 16px;
  border: 1px solid rgba(59,130,246,0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(16,185,129,0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 16px;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(59,130,246,0.15);
    border-color: rgba(59,130,246,0.3);
    
    &::before {
      opacity: 1;
    }
    
    svg {
      transform: scale(1.05);
      color: #3b82f6;
    }
  }
  
  svg {
    width: 42px;
    height: 42px;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
    color: #6b7280;
    stroke-width: 1.5;
  }
`;

export const RocketIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Professional Chart/Analytics Icon */}
      <path d="M3 3V21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 14L12 9L16 13L20 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7" cy="14" r="1" fill="currentColor"/>
      <circle cx="12" cy="9" r="1" fill="currentColor"/>
      <circle cx="16" cy="13" r="1" fill="currentColor"/>
      <circle cx="20" cy="9" r="1" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export const LightningIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dashboard/Grid Icon */}
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="14" y="3" width="7" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="14" y="9" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="3" y="12" width="7" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 16H18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M14 18H17" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  </IconWrapper>
);

export const ShieldIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Certificate/Award Icon */}
      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 13L14 21L16 18L19 19L17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13L10 21L8 18L5 19L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);

export const GlobeIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Globe/World Icon */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3C16.5 3 20 8.5 20 12S16.5 21 12 21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3C7.5 3 4 8.5 4 12S7.5 21 12 21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3V21" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);

export const TargetIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Table/Spreadsheet Icon */}
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 5V19" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 5V19" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 15H21" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);

export const DiamondIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Premium/Star Icon */}
      <polygon points="12,2 15.09,8.26 22,9 17,14.74 18.18,21.02 12,17.77 5.82,21.02 7,14.74 2,9 8.91,8.26 12,2" 
               stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);
