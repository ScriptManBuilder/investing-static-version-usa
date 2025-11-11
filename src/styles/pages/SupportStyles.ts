import styled from 'styled-components';

export const SupportWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding-top: 80px;
  }
  
  @media (max-width: 480px) {
    padding-top: 80px;
  }
  
  @media (max-width: 360px) {
    padding-top: 70px;
  }
`;

export const HeroSection = styled.section`
  padding: 170px 0 100px;
  text-align: center;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 100px 0 70px;
  }
  
  @media (max-width: 480px) {
    padding: 65px 0 40px;
  }
  
  @media (max-width: 360px) {
    padding: 50px 0 30px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  background: white;
  border-radius: 80px;
  padding: 40px 60px;
  margin: 0 auto;
  max-width: 840px;
  border: 1px solid rgba(102, 126, 234, 0.12);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.5);
  
  @media (max-width: 768px) {
    border-radius: 60px;
    padding: 30px 42px;
    max-width: 720px;
  }
  
  @media (max-width: 480px) {
    border-radius: 45px;
    padding: 25px 30px;
    max-width: 90%;
    margin: 0 5%;
  }
  
  @media (max-width: 360px) {
    border-radius: 35px;
    padding: 20px 22px;
    margin: 0 3%;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(102, 126, 234, 0.3) 0%, 
      rgba(102, 126, 234, 0.1) 25%, 
      rgba(102, 126, 234, 0.05) 50%, 
      rgba(102, 126, 234, 0.1) 75%, 
      rgba(102, 126, 234, 0.3) 100%);
    border-radius: 80px;
    z-index: -1;
    animation: shimmer 4s ease-in-out infinite;
    
    @media (max-width: 768px) {
      border-radius: 60px;
    }
    
    @media (max-width: 480px) {
      border-radius: 45px;
    }
    
    @media (max-width: 360px) {
      border-radius: 35px;
    }
  }
  
  @keyframes shimmer {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 30%, #4a5568 60%, #1a202c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  text-shadow: none;
  letter-spacing: -2.5px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.6rem;
    letter-spacing: -1.2px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 14px;
    letter-spacing: -0.8px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.7rem;
    margin-bottom: 12px;
    letter-spacing: -0.4px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%);
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
    
    @media (max-width: 480px) {
      width: 80px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: none;
  font-weight: 500;
  letter-spacing: 0.3px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 80%;
    line-height: 1.5;
    letter-spacing: 0.1px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: 0px;
    max-width: 85%;
  }
  
  @media (max-width: 360px) {
    font-size: 0.95rem;
    line-height: 1.3;
    letter-spacing: 0px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 480px) {
    padding: 0 12px;
  }
  
  @media (max-width: 360px) {
    padding: 0 10px;
  }
`;

export const SupportContent = styled.div`
  background: white;
  margin-top: -80px;
  border-radius: 24px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.5);
  padding: 80px 60px;
  position: relative;
  z-index: 3;
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    margin-top: -60px;
    padding: 60px 40px;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    margin-top: -30px;
    padding: 30px 16px;
    border-radius: 12px;
  }
  
  @media (max-width: 360px) {
    margin-top: -25px;
    padding: 24px 12px;
    border-radius: 10px;
  }
`;

export const ContactSection = styled.section`
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
  
  @media (max-width: 360px) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 30%, #4a5568 60%, #1a202c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 80px;
  text-align: center;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -1.5px;
  
  @media (max-width: 768px) {
    font-size: 2.6rem;
    margin-bottom: 60px;
    letter-spacing: -1px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 40px;
    letter-spacing: -0.5px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.8rem;
    margin-bottom: 32px;
    letter-spacing: -0.3px;
  }
  

  
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 6px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%);
    border-radius: 3px;
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
    
    @media (max-width: 480px) {
      width: 60px;
      height: 4px;
      bottom: -24px;
      border-radius: 2px;
    }
  }
`;

export const ContactMethodsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 80px;
  perspective: 1000px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    gap: 24px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 360px) {
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export const ContactCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #fafbff 50%, #ffffff 100%);
  padding: 56px 42px;
  border-radius: 28px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(102, 126, 234, 0.12);
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(102, 126, 234, 0.08),
    0 8px 16px rgba(102, 126, 234, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  min-width: 0;
  width: 110%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 44px 34px;
    border-radius: 24px;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 32px 26px;
    border-radius: 20px;
  }
  
  @media (max-width: 360px) {
    padding: 28px 21px;
    border-radius: 16px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  &:hover {
    transform: translateY(-16px) rotateX(5deg);
    box-shadow: 
      0 48px 80px rgba(102, 126, 234, 0.25),
      0 24px 48px rgba(102, 126, 234, 0.15),
      0 12px 24px rgba(102, 126, 234, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    border-color: rgba(102, 126, 234, 0.25);
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
    
    @media (max-width: 480px) {
      transform: translateY(-8px);
    }
  }
`;

export const ContactIcon = styled.div`
  width: 88px;
  height: 88px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%);
  background-size: 200% 200%;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px;
  color: white;
  font-size: 2rem;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 16px 32px rgba(102, 126, 234, 0.4),
    0 8px 16px rgba(102, 126, 234, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  position: relative;
  animation: breathe 4s ease-in-out infinite;
  
  @media (max-width: 480px) {
    width: 72px;
    height: 72px;
    border-radius: 20px;
    margin-bottom: 24px;
    font-size: 1.6rem;
  }
  
  @media (max-width: 360px) {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    margin-bottom: 20px;
    font-size: 1.4rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #667eea, #764ba2, #8b5cf6, #667eea);
    background-size: 400% 400%;
    border-radius: 26px;
    z-index: -1;
    animation: gradientShift 6s ease infinite;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  @keyframes breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  ${ContactCard}:hover & {
    transform: scale(1.15) rotate(10deg) translateY(-8px);
    box-shadow: 
      0 24px 48px rgba(102, 126, 234, 0.5),
      0 12px 24px rgba(102, 126, 234, 0.4),
      inset 0 2px 4px rgba(255, 255, 255, 0.3);
    background-position: 100% 100%;
    animation-play-state: paused;
    
    &::before {
      opacity: 1;
    }
    
    @media (max-width: 480px) {
      transform: scale(1.08) rotate(6deg) translateY(-4px);
    }
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const ContactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 20px 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
  position: relative;
  text-align: center;
  width: 100%;
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
    letter-spacing: -0.3px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.3rem;
    margin-bottom: 12px;
    letter-spacing: -0.2px;
  }
  
  ${ContactCard}:hover & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateY(-2px);
  }
`;

export const ContactInfo = styled.p`
  color: #64748b;
  margin: 0;
  line-height: 1.7;
  font-weight: 500;
  font-size: 1rem;
  opacity: 0.9;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  ${ContactCard}:hover & {
    color: #475569;
    opacity: 1;
    transform: translateY(-1px);
  }
`;

export const ContactLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  word-break: break-all;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
  
  &:hover {
    color: #764ba2;
    text-decoration: underline;
  }
`;

export const ContactText = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: -0.5px;
  white-space: nowrap;
  position: relative;
  transition: all 0.4s ease;
  text-shadow: 0 2px 4px rgba(102, 126, 234, 0.1);
  display: block;
  margin: 0 auto 16px auto;
  max-width: 100%;
  text-align: center;
  line-height: 1.4;
  
  @media (max-width: 1200px) {
    font-size: 0.8rem;
    letter-spacing: -0.7px;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    letter-spacing: -0.5px;
    white-space: normal;
    word-break: break-word;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 12px;
    line-height: 1.3;
    letter-spacing: -0.3px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.75rem;
    margin-bottom: 10px;
    line-height: 1.3;
    letter-spacing: -0.2px;
  }
  
  ${ContactCard}:hover & {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: scale(1.01) translateY(-1px);
    text-shadow: 0 4px 8px rgba(102, 126, 234, 0.2);
  }
`;

export const ContactForm = styled.form`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 24px 16px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 12px;
    border-radius: 10px;
  }
  
  @media (max-width: 360px) {
    padding: 16px 10px;
    border-radius: 8px;
  }
`;

export const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  margin-bottom: 15px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
  
  @media (max-width: 480px) {
    gap: 12px;
    padding: 16px;
    margin-bottom: 12px;
    border-radius: 12px;
  }
  
  @media (max-width: 360px) {
    gap: 10px;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  
  &:hover {
    background: #e9ecef;
    transform: translateY(-2px);
  }
  
  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    
    @media (max-width: 480px) {
      width: 44px;
      height: 44px;
    }
    
    @media (max-width: 360px) {
      width: 40px;
      height: 40px;
    }
  }
  
  .content {
    flex: 1;
    
    h4 {
      color: #333;
      margin-bottom: 5px;
      font-size: 1.1rem;
      
      @media (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 4px;
      }
      
      @media (max-width: 360px) {
        font-size: 0.95rem;
        margin-bottom: 3px;
      }
    }
    
    p {
      color: #666;
      margin: 0;
      font-size: 0.9rem;
      
      @media (max-width: 480px) {
        font-size: 0.85rem;
      }
      
      @media (max-width: 360px) {
        font-size: 0.8rem;
      }
    }
    
    a {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  
  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
  
  @media (max-width: 360px) {
    margin-bottom: 14px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
  }
  
  input,
  textarea,
  select {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    @media (max-width: 480px) {
      padding: 10px 12px;
      border-radius: 8px;
      font-size: 0.95rem;
    }
    
    @media (max-width: 360px) {
      padding: 8px 10px;
      border-radius: 6px;
      font-size: 0.9rem;
    }
    
    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
    
    @media (max-width: 480px) {
      min-height: 100px;
    }
    
    @media (max-width: 360px) {
      min-height: 80px;
    }
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  
  @media (max-width: 480px) {
    margin-bottom: 6px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 360px) {
    margin-bottom: 5px;
    font-size: 0.9rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 8px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 360px) {
    padding: 10px;
    border-radius: 6px;
    font-size: 0.9rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    
    @media (max-width: 480px) {
      transform: translateY(-1px);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const FAQSection = styled.section`
  margin-top: 60px;
  
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  
  @media (max-width: 480px) {
    margin-top: 24px;
  }
  
  @media (max-width: 360px) {
    margin-top: 20px;
  }
`;

export const FAQItem = styled.div`
  background: linear-gradient(145deg, #f8fafc 0%, #ffffff 100%);
  border-radius: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  border: 1px solid rgba(102, 126, 234, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.1);
  }
`;

export const FAQQuestion = styled.button`
  width: 100%;
  padding: 28px 32px;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  @media (max-width: 768px) {
    padding: 24px 28px;
    font-size: 1.15rem;
  }
  
  @media (max-width: 480px) {
    padding: 16px 20px;
    font-size: 1rem;
    line-height: 1.3;
  }
  
  @media (max-width: 360px) {
    padding: 14px 16px;
    font-size: 0.95rem;
    line-height: 1.2;
  }
  
  &::after {
    content: '+';
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    font-weight: 300;
    color: #667eea;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    @media (max-width: 480px) {
      right: 20px;
      font-size: 1.2rem;
    }
    
    @media (max-width: 360px) {
      right: 16px;
      font-size: 1.1rem;
    }
  }
  
  &.active::after {
    transform: translateY(-50%) rotate(45deg);
    color: #764ba2;
  }
  
  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.04);
  }
`;

export const FAQAnswer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(102, 126, 234, 0.02);
  
  &.active {
    max-height: 200px;
  }
  
  p {
    padding: 0 32px 28px;
    color: #4a5568;
    line-height: 1.7;
    margin: 0;
    font-weight: 400;
    
    @media (max-width: 768px) {
      padding: 0 28px 24px;
      font-size: 0.95rem;
    }
    
    @media (max-width: 480px) {
      padding: 0 24px 20px;
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
`;
