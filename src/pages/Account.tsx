import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../styles/GlobalStyles';
import { useAuth } from '../contexts/AuthContext';
import { products, getProductVideo, getProductVideos } from '../data/products';
import {
  AccountWrapper,
  AccountContent,
  Sidebar,
  SidebarItem,
  MainContent,
  SectionTitle,
  InfoCard,
  InfoGrid,
  InfoItem,
  LoginPromptWrapper,
  LoginPromptCard,
  LoginIcon,
  LoginTitle,
  LoginSubtitle,
  LoginButtons,
  LoginButton,
  WelcomeSection,
  WelcomeTitle,
  WelcomeSubtitle,
  EmptyOrdersText,
  EmptyOrdersButtonWrapper,
  ShoppingButton,
  CoursesGrid,
  CourseCard,
  CourseCardHeader,
  CourseTitle,
  CourseDescription,
  CourseStatus,
  CourseVideoWrapper,
  CourseVideo
} from '../styles/pages/AccountStyles';

const Account: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Пагинация курсов
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;

  // Отслеживание изменения размера экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Дополнительная защита от скачивания видео
  useEffect(() => {
    // Отключаем контекстное меню на всей странице для курсов
    const handleContextMenu = (e: MouseEvent) => {
      if (activeTab === 'courses') {
        e.preventDefault();
      }
    };

    // Отключаем некоторые горячие клавиши
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab === 'courses') {
        // Отключаем Ctrl+S, Ctrl+Shift+I, F12
        if (
          (e.ctrlKey && e.key === 's') ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          e.key === 'F12'
        ) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab]);

  // Данные курсов иллюстрации из products.ts
  const testAccountCourses = products.map(product => {
    const courseVideos = [];
    
    // В аккаунте показываем ТОЛЬКО 5-минутные видео из getProductVideos
    if (product.videos && product.videos.length > 0) {
      // Добавляем только полные 5-минутные видео курса
      courseVideos.push(...product.videos);
    }
    // Не используем product.video (10-секундные превью) в аккаунте
    
    return {
      id: product.id,
      title: product.name,
      description: product.description,
      price: `$${product.price}`,
      videos: courseVideos
    };
  });

  // Пагинация логика
  const totalPages = Math.ceil(testAccountCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = testAccountCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Прокручиваем к началу курсов при смене страницы
    if (typeof window !== 'undefined') {
      const coursesSection = document.getElementById('courses-section');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderProfileSection = () => (
    <div>
      <div style={{
        fontSize: isSmallMobile ? '1.2rem' : isMobile ? '1.4rem' : '1.6rem',
        fontWeight: '800',
        color: '#1e293b',
        marginBottom: isSmallMobile ? '16px' : '24px',
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        letterSpacing: '-0.02em',
        textAlign: isSmallMobile ? 'center' : 'left'
      }}>
        {isSmallMobile ? 'PROFILE' : 'PROFILE INFORMATION'}
      </div>
      
      <div style={{
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        borderRadius: isSmallMobile ? '12px' : '16px',
        padding: isSmallMobile ? '16px' : isMobile ? '20px' : '32px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? 'repeat(auto-fit, minmax(200px, 1fr))' : 'repeat(2, 1fr)',
          gap: isSmallMobile ? '16px' : isMobile ? '20px' : '24px'
        }}>
          <div style={{
            padding: isSmallMobile ? '12px' : '16px',
            background: '#fafafa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{
              fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
              fontWeight: '600',
              color: '#64748b',
              margin: '0 0 6px 0',
              fontFamily: '"Inter", -apple-system, sans-serif',
              letterSpacing: '0.025em'
            }}>First Name</h4>
            <p style={{
              fontSize: isSmallMobile ? '0.95rem' : '1rem',
              fontWeight: '600',
              color: '#1e293b',
              margin: '0',
              fontFamily: '"Inter", -apple-system, sans-serif'
            }}>{user?.firstName || 'Not provided'}</p>
          </div>
          <div style={{
            padding: isSmallMobile ? '12px' : '16px',
            background: '#fafafa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{
              fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
              fontWeight: '600',
              color: '#64748b',
              margin: '0 0 6px 0',
              fontFamily: '"Inter", -apple-system, sans-serif',
              letterSpacing: '0.025em'
            }}>Last Name</h4>
            <p style={{
              fontSize: isSmallMobile ? '0.95rem' : '1rem',
              fontWeight: '600',
              color: '#1e293b',
              margin: '0',
              fontFamily: '"Inter", -apple-system, sans-serif'
            }}>{user?.lastName || 'Not provided'}</p>
          </div>
          <div style={{
            padding: isSmallMobile ? '12px' : '16px',
            background: '#fafafa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            gridColumn: isSmallMobile ? '1' : 'span 1'
          }}>
            <h4 style={{
              fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
              fontWeight: '600',
              color: '#64748b',
              margin: '0 0 6px 0',
              fontFamily: '"Inter", -apple-system, sans-serif',
              letterSpacing: '0.025em'
            }}>Email Address</h4>
            <p style={{
              fontSize: isSmallMobile ? '0.9rem' : '1rem',
              fontWeight: '600',
              color: '#1e293b',
              margin: '0',
              fontFamily: '"Inter", -apple-system, sans-serif',
              wordBreak: 'break-word'
            }}>{user?.email}</p>
          </div>
          <div style={{
            padding: isSmallMobile ? '12px' : '16px',
            background: '#fafafa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{
              fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
              fontWeight: '600',
              color: '#64748b',
              margin: '0 0 6px 0',
              fontFamily: '"Inter", -apple-system, sans-serif',
              letterSpacing: '0.025em'
            }}>Account Status</h4>
            <p style={{
              fontSize: isSmallMobile ? '0.95rem' : '1rem',
              fontWeight: '600',
              color: '#10b981',
              margin: '0',
              fontFamily: '"Inter", -apple-system, sans-serif'
            }}>✓ Active</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrdersSection = () => (
    <div>
      <div style={{
        fontSize: isSmallMobile ? '1.2rem' : isMobile ? '1.4rem' : '1.6rem',
        fontWeight: '800',
        color: '#1e293b',
        marginBottom: isSmallMobile ? '16px' : '24px',
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        letterSpacing: '-0.02em',
        textAlign: isSmallMobile ? 'center' : 'left'
      }}>
        {isSmallMobile ? 'ORDERS' : 'ORDER HISTORY'}
      </div>
      
      <div style={{
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        borderRadius: isSmallMobile ? '12px' : '16px',
        padding: isSmallMobile ? '24px 16px' : isMobile ? '32px 20px' : '48px 32px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.1rem',
          color: '#64748b',
          fontFamily: '"Inter", -apple-system, sans-serif',
          lineHeight: '1.6',
          marginBottom: isSmallMobile ? '20px' : '32px'
        }}>
          No orders found. Start shopping to see your order history here.
        </div>
        <div>
          <Link 
            to="/products" 
            style={{
              display: 'inline-block',
              padding: isSmallMobile ? '12px 24px' : '16px 32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: isSmallMobile ? '0.9rem' : '1rem',
              fontWeight: '600',
              fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
            }}
          >
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const renderCoursesSection = () => {
    // Показываем курсы только для тестового аккаунта
    const isTestAccount = user?.email === 'test@test.com';
    
    if (!isTestAccount) {
      return (
        <div>
          <SectionTitle>MY INVESTMENT MASTERY COURSES</SectionTitle>
          
          <InfoCard>
            <EmptyOrdersText>
              🎓 Your purchased INVESTMENT MASTERY courses will appear here after successful payment.
            </EmptyOrdersText>
            <EmptyOrdersText style={{ fontSize: '1rem', marginTop: '1rem', opacity: 0.8 }}>
              Once you purchase any Investment Mastery course, you'll have lifetime access to all course materials, 
              including videos, downloadable resources, and future updates.
            </EmptyOrdersText>
            <EmptyOrdersButtonWrapper>
              <ShoppingButton as={Link} to="/products" variant="primary">
                Browse Investment Mastery Courses
              </ShoppingButton>
            </EmptyOrdersButtonWrapper>
          </InfoCard>
        </div>
      );
    }

    // Курсы для тестового аккаунта - новая продвинутая структура
    return (
      <div>
        <div style={{
          fontSize: isSmallMobile ? '1.25rem' : isMobile ? '1.5rem' : '2rem',
          fontWeight: '800',
          color: '#1e293b',
          marginBottom: isSmallMobile ? '15px' : '25px',
          textAlign: 'center',
          fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          letterSpacing: '-0.025em',
          lineHeight: '1.2',
          padding: isSmallMobile ? '0 10px' : '0'
        }}>
          {isSmallMobile ? 'MY INVESTMENT COURSES' : 'MY INVESTMENT MASTERY COURSES'}
        </div>
        
        {/* Course Progress Overview */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: isSmallMobile ? '15px' : '20px',
          padding: isSmallMobile ? '15px' : isMobile ? '25px' : '35px',
          marginBottom: isSmallMobile ? '20px' : '35px',
          color: 'white',
          boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
          margin: isSmallMobile ? '0 10px 20px 10px' : '0 0 35px 0'
        }}>
          <h3 style={{ 
            fontSize: isSmallMobile ? '1.1rem' : isMobile ? '1.4rem' : '1.75rem', 
            marginBottom: isSmallMobile ? '10px' : '15px',
            fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            lineHeight: '1.2',
            textAlign: isSmallMobile ? 'center' : 'left'
          }}>Learning Progress</h3>
          <p style={{ 
            opacity: 0.92, 
            marginBottom: isSmallMobile ? '15px' : '25px',
            fontSize: isSmallMobile ? '0.85rem' : isMobile ? '1rem' : '1.1rem',
            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: '400',
            lineHeight: '1.5',
            letterSpacing: '-0.005em',
            textAlign: isSmallMobile ? 'center' : 'left'
          }}>{isSmallMobile ? 'Continue your Investment journey' : 'Continue your Investment Mastery journey'}</p>
          <div style={{ 
            display: 'flex', 
            gap: isSmallMobile ? '8px' : isMobile ? '15px' : '30px', 
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            flexDirection: isSmallMobile ? 'column' : 'row'
          }}>
            <div style={{ 
              textAlign: 'center',
              flex: isSmallMobile ? 'none' : '1',
              minWidth: isSmallMobile ? 'auto' : '100px',
              marginBottom: isSmallMobile ? '10px' : '0'
            }}>
              <div style={{ 
                fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.75rem' : '2.25rem', 
                fontWeight: '800',
                fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.03em'
              }}>{testAccountCourses.length}</div>
              <div style={{ 
                fontSize: isSmallMobile ? '0.75rem' : isMobile ? '0.85rem' : '0.95rem', 
                opacity: 0.85,
                fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '500',
                letterSpacing: '0.01em',
                textTransform: 'uppercase'
              }}>{isSmallMobile ? 'Courses' : 'Total Courses'}</div>
            </div>
            <div style={{ 
              textAlign: 'center',
              flex: isSmallMobile ? 'none' : '1',
              minWidth: isSmallMobile ? 'auto' : '100px',
              marginBottom: isSmallMobile ? '10px' : '0'
            }}>
              <div style={{ 
                fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.75rem' : '2.25rem', 
                fontWeight: '800',
                fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.03em'
              }}>4</div>
              <div style={{ 
                fontSize: isSmallMobile ? '0.75rem' : isMobile ? '0.85rem' : '0.95rem', 
                opacity: 0.85,
                fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '500',
                letterSpacing: '0.01em',
                textTransform: 'uppercase'
              }}>{isSmallMobile ? 'Hours' : 'Hours of Content'}</div>
            </div>
            <div style={{ 
              textAlign: 'center',
              flex: isSmallMobile ? 'none' : '1',
              minWidth: isSmallMobile ? 'auto' : '100px'
            }}>
              <div style={{ 
                fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.75rem' : '2.25rem', 
                fontWeight: '800',
                fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.03em'
              }}>∞</div>
              <div style={{ 
                fontSize: isSmallMobile ? '0.75rem' : isMobile ? '0.85rem' : '0.95rem', 
                opacity: 0.85,
                fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '500',
                letterSpacing: '0.01em',
                textTransform: 'uppercase'
              }}>{isSmallMobile ? 'Access' : 'Lifetime Access'}</div>
            </div>
          </div>
        </div>

        {/* Courses List - One per row with larger video */}
        <div id="courses-section" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: isSmallMobile ? '15px' : '25px',
          padding: isSmallMobile ? '0 10px' : '0'
        }}>
          {currentCourses.map((course, index) => (
            <div key={course.id} style={{
              background: 'white',
              borderRadius: isSmallMobile ? '12px' : '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              border: '1px solid rgba(226, 232, 240, 0.6)',
              transition: 'all 0.3s ease'
            }}>
              {/* Course Header */}
              <div style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                padding: isSmallMobile ? '15px 12px' : isMobile ? '20px 25px' : '25px 35px',
                color: 'white'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '12px' : '0'
                }}>
                  <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <div style={{ 
                      fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : '0.85rem',
                      opacity: 0.9, 
                      marginBottom: isSmallMobile ? '6px' : '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: '600'
                    }}>
                      Course {startIndex + index + 1} of {testAccountCourses.length}
                    </div>
                    <h3 style={{ 
                      fontSize: isSmallMobile ? '1rem' : isMobile ? '1.25rem' : '1.5rem',
                      fontWeight: '700',
                      margin: 0,
                      lineHeight: '1.25',
                      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                      letterSpacing: '-0.015em'
                    }}>
                      {course.title}
                    </h3>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(10px)',
                    padding: '10px 18px',
                    borderRadius: '25px',
                    fontSize: isMobile ? '0.8rem' : '0.85rem',
                    fontWeight: '600',
                    fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    Available
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div style={{ padding: isSmallMobile ? '12px' : isMobile ? '20px' : '30px' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
                  gap: isSmallMobile ? '15px' : isMobile ? '20px' : '30px',
                  alignItems: 'start'
                }}>
                  {/* Video Section */}
                  <div>
                    {course.videos && course.videos.length > 0 && (
                      <div style={{ marginBottom: '20px' }}>
                        {course.videos.map((videoSrc, videoIndex) => (
                          <div key={videoIndex} style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            marginBottom: videoIndex < course.videos.length - 1 ? '15px' : '0'
                          }}>
                            {course.videos.length > 1 && (
                              <div style={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                background: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '15px',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                zIndex: 10
                              }}>
                                Video {videoIndex + 1} of {course.videos.length}
                              </div>
                            )}
                            <CourseVideo 
                              controls
                              controlsList="nodownload noremoteplayback"
                              disablePictureInPicture
                              onContextMenu={(e) => e.preventDefault()}
                              style={{
                                width: '100%',
                                height: isSmallMobile ? '180px' : isMobile ? '200px' : '350px',
                                objectFit: 'contain',
                                background: '#000'
                              }}
                            >
                              <source src={videoSrc} type="video/mp4" />
                              Your browser does not support the video tag.
                            </CourseVideo>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Course Description */}
                    <div style={{
                      padding: isSmallMobile ? '15px' : '25px',
                      background: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
                      borderRadius: isSmallMobile ? '12px' : '16px',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                    }}>
                      <h4 style={{ 
                        fontSize: isSmallMobile ? '1rem' : '1.15rem',
                        fontWeight: '700',
                        marginBottom: isSmallMobile ? '8px' : '12px',
                        color: '#1e293b',
                        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        letterSpacing: '-0.01em'
                      }}>
                        About This Course
                      </h4>
                      <p style={{ 
                        fontSize: isSmallMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        color: '#475569',
                        margin: 0,
                        fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: '400',
                        letterSpacing: '-0.005em'
                      }}>
                        {course.description}
                      </p>
                    </div>
                  </div>

                  {/* Course Info Sidebar */}
                  <div>
                    <div style={{
                      background: 'linear-gradient(145deg, #f7fafc 0%, #f1f5f9 100%)',
                      padding: isSmallMobile ? '15px' : isMobile ? '25px' : '30px',
                      borderRadius: isSmallMobile ? '12px' : '16px',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
                    }}>
                      <h4 style={{ 
                        fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1.1rem' : '1.2rem',
                        fontWeight: '700',
                        marginBottom: isSmallMobile ? '16px' : '24px',
                        color: '#1e293b',
                        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        letterSpacing: '-0.015em'
                      }}>
                        Course Details
                      </h4>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: isSmallMobile ? '12px' : '18px' }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: isSmallMobile ? 'flex-start' : 'center',
                          flexDirection: isSmallMobile ? 'column' : 'row',
                          gap: isSmallMobile ? '2px' : '0'
                        }}>
                          <span style={{ 
                            color: '#64748b', 
                            fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
                            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '500',
                            letterSpacing: '0.01em'
                          }}>Duration</span>
                          <span style={{ 
                            fontWeight: '700', 
                            color: '#1e293b',
                            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: isSmallMobile ? '0.85rem' : '0.95rem',
                            letterSpacing: '-0.01em'
                          }}>
                            {course.id === 1 ? '3-8 min' : 
                             course.id === 2 ? '5-10 min' : 
                             course.id === 3 || course.id === 4 ? '10-22 min' : 
                             course.id >= 5 && course.id <= 7 ? '15-22 min' : 
                             course.id >= 8 && course.id <= 10 ? '25-42 min' : 
                             course.id === 11 ? '35-42 min' : '5-10 min'}
                          </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ 
                            color: '#64748b', 
                            fontSize: '0.9rem',
                            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '500',
                            letterSpacing: '0.01em'
                          }}>Level</span>
                          <span style={{ 
                            fontWeight: '700', 
                            color: '#1e293b',
                            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '0.95rem',
                            letterSpacing: '-0.01em'
                          }}>
                            {course.id <= 4 ? 'Beginner' : course.id <= 8 ? 'Intermediate' : 'Advanced'}
                          </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ 
                            color: '#64748b', 
                            fontSize: '0.9rem',
                            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '500',
                            letterSpacing: '0.01em'
                          }}>Language</span>
                          <span style={{ 
                            fontWeight: '700', 
                            color: '#1e293b',
                            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '0.95rem',
                            letterSpacing: '-0.01em'
                          }}>English</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ 
                            color: '#64748b', 
                            fontSize: '0.9rem',
                            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '500',
                            letterSpacing: '0.01em'
                          }}>Access</span>
                          <span style={{ 
                            fontWeight: '700', 
                            color: '#1e293b',
                            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '0.95rem',
                            letterSpacing: '-0.01em'
                          }}>Lifetime</span>
                        </div>
                      </div>

                      <div style={{
                        padding: isSmallMobile ? '12px 16px' : '18px 20px',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: '0 4px 16px rgba(16, 185, 129, 0.25)'
                      }}>
                        <div style={{ 
                          color: 'white',
                          fontWeight: '700',
                          fontSize: isSmallMobile ? '0.85rem' : '1rem',
                          fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                          letterSpacing: '0.01em'
                        }}>
                          ✓ {isSmallMobile ? 'Active' : 'Enrolled & Active'}
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: isSmallMobile ? '25px' : '40px',
            gap: isSmallMobile ? '6px' : '10px',
            flexWrap: isSmallMobile ? 'wrap' : 'nowrap'
          }}>
            {/* Предыдущая страница */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: isSmallMobile ? '8px 10px' : '12px 16px',
                borderRadius: '12px',
                border: 'none',
                background: currentPage === 1 ? '#e2e8f0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: currentPage === 1 ? '#94a3b8' : 'white',
                fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '600',
                fontSize: isSmallMobile ? '0.75rem' : '0.9rem',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                minWidth: isSmallMobile ? '60px' : '100px'
              }}
            >
              {isSmallMobile ? '←' : '← Previous'}
            </button>

            {/* Номера страниц */}
            <div style={{ display: 'flex', gap: isSmallMobile ? '4px' : '8px' }}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  style={{
                    width: isSmallMobile ? '32px' : '44px',
                    height: isSmallMobile ? '32px' : '44px',
                    borderRadius: '12px',
                    border: 'none',
                    background: page === currentPage 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                      : '#f8fafc',
                    color: page === currentPage ? 'white' : '#64748b',
                    fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: page === currentPage ? '700' : '600',
                    fontSize: isSmallMobile ? '0.8rem' : '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: page === currentPage ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none'
                  }}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Следующая страница */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: isSmallMobile ? '8px 10px' : '12px 16px',
                borderRadius: '12px',
                border: 'none',
                background: currentPage === totalPages ? '#e2e8f0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: currentPage === totalPages ? '#94a3b8' : 'white',
                fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '600',
                fontSize: isSmallMobile ? '0.75rem' : '0.9rem',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                minWidth: isSmallMobile ? '60px' : '100px'
              }}
            >
              {isSmallMobile ? '→' : 'Next →'}
            </button>
          </div>
        )}

        {/* Информация о пагинации */}
        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          padding: '15px',
          background: '#f8fafc',
          borderRadius: '12px',
          color: '#64748b',
          fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '0.9rem'
        }}>
          Showing {startIndex + 1}-{Math.min(endIndex, testAccountCourses.length)} of {testAccountCourses.length} courses
        </div>
      </div>
    );
  };

  if (!user) {
    return (
      <AccountWrapper>
        <Container>
          <LoginPromptWrapper>
            <LoginPromptCard>
              <LoginIcon>
                🔐
              </LoginIcon>
              <LoginTitle>Access Required</LoginTitle>
              <LoginSubtitle>
                Please log in to access your account dashboard and manage your orders and personal information.
              </LoginSubtitle>
              <LoginButtons>
                <LoginButton as={Link} to="/login">
                  Sign In
                </LoginButton>
                <LoginButton as={Link} to="/register" variant="outline">
                  Create Account
                </LoginButton>
              </LoginButtons>
            </LoginPromptCard>
          </LoginPromptWrapper>
        </Container>
      </AccountWrapper>
    );
  }

  return (
    <AccountWrapper>
      <Container>
        <WelcomeSection>
          <WelcomeTitle>My Account</WelcomeTitle>
          <WelcomeSubtitle>
            Welcome back, {user.firstName}! Manage your account and view your orders.
          </WelcomeSubtitle>
        </WelcomeSection>

        <AccountContent>
          {/* Мобильная навигация */}
          {isMobile && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              position: 'sticky',
              top: '100px',
              zIndex: 100
            }}>
              <h3 style={{
                margin: '0 0 15px 0',
                fontSize: isSmallMobile ? '1rem' : '1.2rem',
                fontWeight: '600',
                color: '#1a202c',
                textAlign: 'center',
                fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
              }}>Account Navigation</h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <button
                  onClick={() => setActiveTab('profile')}
                  style={{
                    padding: isSmallMobile ? '10px 16px' : '14px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === 'profile' ? 
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                      '#f7fafc',
                    color: activeTab === 'profile' ? 'white' : '#4a5568',
                    fontWeight: '600',
                    fontSize: isSmallMobile ? '0.85rem' : '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  👤 {isSmallMobile ? 'Profile' : 'Profile Information'}
                </button>
                
                <button
                  onClick={() => {
                    setActiveTab('courses');
                    setCurrentPage(1);
                  }}
                  style={{
                    padding: isSmallMobile ? '10px 16px' : '14px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === 'courses' ? 
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                      '#f7fafc',
                    color: activeTab === 'courses' ? 'white' : '#4a5568',
                    fontWeight: '600',
                    fontSize: isSmallMobile ? '0.85rem' : '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  📚 {isSmallMobile ? 'My Courses' : 'My Investment Courses'}
                </button>
                
                <button
                  onClick={() => setActiveTab('orders')}
                  style={{
                    padding: isSmallMobile ? '10px 16px' : '14px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === 'orders' ? 
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                      '#f7fafc',
                    color: activeTab === 'orders' ? 'white' : '#4a5568',
                    fontWeight: '600',
                    fontSize: isSmallMobile ? '0.85rem' : '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  📦 {isSmallMobile ? 'Orders' : 'Order History'}
                </button>
                
                <button
                  onClick={logout}
                  style={{
                    padding: isSmallMobile ? '10px 16px' : '14px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: '#fed7d7',
                    color: '#c53030',
                    fontWeight: '600',
                    fontSize: isSmallMobile ? '0.85rem' : '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '10px',
                    fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  🚪 Logout
                </button>
              </div>
            </div>
          )}

          <Sidebar>
            <h3>Account Menu</h3>
            <SidebarItem 
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
            >
              Profile Information
            </SidebarItem>
            <SidebarItem 
              active={activeTab === 'courses'}
              onClick={() => {
                setActiveTab('courses');
                setCurrentPage(1);
              }}
            >
              My Investment Courses
            </SidebarItem>
            <SidebarItem 
              active={activeTab === 'orders'}
              onClick={() => setActiveTab('orders')}
            >
              Order History
            </SidebarItem>
            <SidebarItem 
              active={false}
              onClick={logout}
              style={{ marginTop: '20px', color: '#ef4444' }}
            >
              Logout
            </SidebarItem>
          </Sidebar>

          <MainContent>
            {activeTab === 'profile' && renderProfileSection()}
            {activeTab === 'courses' && renderCoursesSection()}
            {activeTab === 'orders' && renderOrdersSection()}
          </MainContent>
        </AccountContent>
      </Container>
    </AccountWrapper>
  );
};

export default Account;