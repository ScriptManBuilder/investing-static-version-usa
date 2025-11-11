import styled, { keyframes, css } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

export const LoaderContainer = styled.div<{ $isComplete: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  
  ${({ $isComplete }) => $isComplete && css`
    animation: ${fadeOut} 0.8s ease-in-out forwards;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.08) 0%, transparent 50%);
    animation: ${pulse} 4s ease-in-out infinite;
  }
`;

export const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
  max-width: 600px;
  padding: 0 20px;
`;

export const Logo = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 10px 0;
  letter-spacing: 3px;
  text-shadow: 0 4px 20px rgba(120, 119, 198, 0.3);
  
  background: linear-gradient(135deg, #ffffff 0%, #e0e6ff 50%, #c7d2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const Tagline = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: #b8bcc8;
  margin: 0 0 50px 0;
  font-weight: 300;
  letter-spacing: 1px;
  opacity: 0.9;
`;

export const SpinnerContainer = styled.div`
  margin: 30px 0 40px 0;
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid #7877c6;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
  
  box-shadow: 
    0 0 20px rgba(120, 119, 198, 0.3),
    inset 0 0 20px rgba(120, 119, 198, 0.1);
`;

export const ProgressSection = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(90deg, #7877c6 0%, #9ca3f7 50%, #c7d2fe 100%);
  border-radius: 10px;
  transition: width 0.3s ease-out;
  box-shadow: 
    0 0 10px rgba(120, 119, 198, 0.5),
    0 0 20px rgba(120, 119, 198, 0.3);
  
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
    animation: shimmer 2s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

export const ProgressText = styled.span`
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  min-width: 50px;
`;

export const LoadingText = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: #b8bcc8;
  margin: 20px 0 0 0;
  font-weight: 400;
  text-align: center;
  opacity: 0.8;
  animation: ${pulse} 3s ease-in-out infinite;
  min-height: 25px;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0 10px;
  }
`;