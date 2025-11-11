import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../styles/GlobalStyles';
import { products } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import { RocketIcon, LightningIcon, ShieldIcon, GlobeIcon, TargetIcon, DiamondIcon } from '../components/FeatureIcons';
import LazyImage from '../components/LazyImage';
import { COMPANY_INFO } from '../config/constants';
import {
  HeroSection,
  HeroVideo,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  FeaturesSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  CarouselContent,
  CarouselTitle,
  CarouselSubtitle,
  CarouselDots,
  CarouselDot,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  ProductsSection,
  VideoSection,
  VideoSectionVideo,
  VideoSectionContent,
  VideoSectionTitle,
  VideoSectionSubtitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductButton,
  PremiumButton,
  ScrollReveal,
  ParallaxElement,
  PhotoGallerySection,
  PhotoStrip,
  PhotoItem,
  ScrollingTextBanner,
  ScrollingText,
  InfoSection,
  InfoGrid,
  InfoBlock,
  InfoTitle,
  InfoDescription,
  InfoSubsection,
  InfoSubtitle,
  InfoText,
  InfoHighlight
} from '../styles/pages/HomeStyles';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);
  const { formatPrice } = usePrice();
  const scrollRevealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoSectionVisible, setIsVideoSectionVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  // Состояние для карусели
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Состояние для второй карусели (Featured Solutions)
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);
  const totalFeaturedSlides = 3;

  // Состояние для автоматического выделения карточек продуктов
  const [activeProductCard, setActiveProductCard] = useState(0);
  const totalProductCards = featuredProducts.length;

  // Данные для слайдов карусели
  const carouselSlides = [
    {
      title: "Why Choose Investment Mastery?",
      subtitle: "Discover the excellence that makes our investment education exceptional"
    },
    {
      title: "Expert-Led Investment Training",
      subtitle: "Learn from industry professionals with real-world trading and portfolio management experience"
    },
    {
      title: "Innovation Meets Investing",
      subtitle: "Where cutting-edge investment strategies meet practical application"
    }
  ];

  // Данные для слайдов Featured Solutions
  const featuredSlides = [
    {
      title: "Featured Investment Courses",
      subtitle: "Discover our most popular and effective investment training programs"
    },
    {
      title: "Revolutionary Investment Learning",
      subtitle: "Next-generation investment education that transforms financial careers"
    },
    {
      title: "Premium Investment Education",
      subtitle: "Crafted for those who demand excellence in wealth building mastery"
    }
  ];

  // Мемоизируем массив изображений для галереи
  const galleryImages = useMemo(() => {
    // Новые Investment изображения для галереи
    const allImages = [
      { src: `/images/img_1.jpg`, alt: `Investment Portfolio 1`, type: 'investment-portfolio' },
      { src: `/images/img_2.jpg`, alt: `Trading Portfolio 2`, type: 'investment-portfolio' },
      { src: `/images/img_3.jpg`, alt: `Financial Portfolio 3`, type: 'investment-portfolio' },
      { src: `/images/img_4.jpg`, alt: `Wealth Building Portfolio 4`, type: 'investment-portfolio' },
      { src: `/images/img_5.jpg`, alt: `Market Analysis Portfolio 5`, type: 'investment-portfolio' },
      { src: `/images/img_6.jpg`, alt: `Investment Strategy Portfolio 6`, type: 'investment-portfolio' },
      { src: `/images/img_7.jpg`, alt: `Portfolio Management Portfolio 7`, type: 'investment-portfolio' },
      { src: `/images/img_8.jpg`, alt: `Asset Allocation Portfolio 8`, type: 'investment-portfolio' }
    ];
    
    // Перемешиваем для разнообразия и добавляем id
        return allImages
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({
        id: index,
        src: img.src,
        alt: img.alt,
        type: img.type
      }));
  }, []);

  // Мемоизируем текст для бегущей строки
  const scrollingTexts = useMemo(() => [
    'MASTER INVESTING TODAY',
    'FOLLOW US @INVESTING_ECOURSES',
    'PREMIUM INVESTMENT COURSES',
    'TRANSFORM YOUR WEALTH WITH INVESTING',
    'STOCKS, CRYPTO & REAL ESTATE',
    'JOIN THE INVESTMENT REVOLUTION NOW'
  ], []);  useEffect(() => {
    // Intersection Observer для scroll reveal эффектов
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Наблюдаем за всеми элементами с scroll reveal
    scrollRevealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Intersection Observer для галереи
    const galleryObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          galleryObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    // Intersection Observer для новой видео секции
    const videoSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoSectionVisible(true);
          videoSectionObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (galleryRef.current) {
      galleryObserver.observe(galleryRef.current);
    }

    if (videoSectionRef.current) {
      videoSectionObserver.observe(videoSectionRef.current);
    }

    // Parallax эффект при скролле (throttled)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          parallaxRefs.current.forEach((ref, index) => {
            if (ref) {
              const speed = (index + 1) * 0.1;
              const yPos = -(scrollY * speed);
              ref.style.transform = `translateY(${yPos}px)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      galleryObserver.disconnect();
      videoSectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Автоматическое переключение слайдов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Автоматическое переключение слайдов Featured Solutions каждые 5 секунд (со сдвигом)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedSlide(prev => (prev + 1) % totalFeaturedSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalFeaturedSlides]);

  // Автоматическое выделение карточек продуктов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProductCard(prev => (prev + 1) % totalProductCards);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalProductCards]);

  // Функция для переключения на определенный слайд
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Функция для переключения на определенный слайд Featured Solutions
  const goToFeaturedSlide = (slideIndex: number) => {
    setCurrentFeaturedSlide(slideIndex);
  };

  // Поддержка свайпов для мобильных устройств
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Свайп влево - следующий слайд
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    } else if (isRightSwipe) {
      // Свайп вправо - предыдущий слайд
      setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  // Поддержка свайпов для Featured Solutions карусели
  const [featuredTouchStart, setFeaturedTouchStart] = useState<number | null>(null);
  const [featuredTouchEnd, setFeaturedTouchEnd] = useState<number | null>(null);

  const onFeaturedTouchStart = (e: React.TouchEvent) => {
    setFeaturedTouchEnd(null);
    setFeaturedTouchStart(e.targetTouches[0].clientX);
  };

  const onFeaturedTouchMove = (e: React.TouchEvent) => {
    setFeaturedTouchEnd(e.targetTouches[0].clientX);
  };

  const onFeaturedTouchEnd = () => {
    if (!featuredTouchStart || !featuredTouchEnd) return;
    
    const distance = featuredTouchStart - featuredTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Свайп влево - следующий слайд
      setCurrentFeaturedSlide(prev => (prev + 1) % totalFeaturedSlides);
    } else if (isRightSwipe) {
      // Свайп вправо - предыдущий слайд
      setCurrentFeaturedSlide(prev => (prev - 1 + totalFeaturedSlides) % totalFeaturedSlides);
    }
  };

  const setScrollRevealRef = (index: number) => (el: HTMLDivElement | null) => {
    scrollRevealRefs.current[index] = el;
  };

  const setParallaxRef = (index: number) => (el: HTMLDivElement | null) => {
    parallaxRefs.current[index] = el;
  };

  return (
    <>
      <HeroSection>
        <HeroVideo 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src="/videos/videoAI_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
        <Container>
          <HeroContent>
            <HeroTitle>INVESTING E-COURSES</HeroTitle>
            <HeroSubtitle>
              Master the Art of Investing with Expert-Led Video Courses - Transform Your Financial Future Today
            </HeroSubtitle>
            <HeroButtons>
              <Button as={Link} to="/products" variant="primary">
                Browse Courses
              </Button>
              <Button as={Link} to="/about" variant="outline">
                Our Mission
              </Button>
            </HeroButtons>
          </HeroContent>
        </Container>
      </HeroSection>

      <FeaturesSection>
        
        <Container>
          <ScrollReveal ref={setScrollRevealRef(0)}>
            {/* Карусель плашек */}
            <CarouselContainer
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <CarouselTrack currentSlide={currentSlide}>
                {carouselSlides.map((slide, index) => (
                  <CarouselSlide key={index}>
                    <CarouselContent>
                      <CarouselTitle>{slide.title}</CarouselTitle>
                      <CarouselSubtitle>{slide.subtitle}</CarouselSubtitle>
                    </CarouselContent>
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselContainer>
            
            {/* Навигационные точки */}
            <CarouselDots>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <CarouselDot
                  key={index}
                  active={currentSlide === index}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </CarouselDots>
          </ScrollReveal>
          
          <FeaturesGrid>
            <ScrollReveal ref={setScrollRevealRef(1)} delay={100}>
              <FeatureCard>
                <RocketIcon />
                <FeatureTitle>Expert Investment Instruction</FeatureTitle>
                <FeatureDescription>
                  Learn from industry professionals with hands-on trading and portfolio management experience and proven track records.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(2)} delay={200}>
              <FeatureCard>
                <LightningIcon />
                <FeatureTitle>Instant Access Learning</FeatureTitle>
                <FeatureDescription>
                  Start learning immediately with lifetime access to all investment course materials and updates.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(3)} delay={300}>
              <FeatureCard>
                <ShieldIcon />
                <FeatureTitle>Certified Quality</FeatureTitle>
                <FeatureDescription>
                  Industry-recognized certificates and rigorous investment curriculum ensure professional standards.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(4)} delay={400}>
              <FeatureCard>
                <GlobeIcon />
                <FeatureTitle>Global Community</FeatureTitle>
                <FeatureDescription>
                  Join hundreds of investment enthusiasts worldwide with 24/7 support and community access.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(5)} delay={500}>
              <FeatureCard>
                <TargetIcon />
                <FeatureTitle>Practical Application</FeatureTitle>
                <FeatureDescription>
                  Real-world investment projects and case studies that you can apply immediately in your portfolio.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(6)} delay={600}>
              <FeatureCard>
                <DiamondIcon />
                <FeatureTitle>Premium Content</FeatureTitle>
                <FeatureDescription>
                  Cutting-edge investment curriculum updated regularly with the latest market developments and trends.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* Новая независимая видео секция */}
      <VideoSection ref={videoSectionRef}>
        {isVideoSectionVisible && (
          <VideoSectionVideo 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
          >
            <source src="/videos/videoAI_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </VideoSectionVideo>
        )}
        <VideoSectionContent>
          <VideoSectionTitle>Investing in Action</VideoSectionTitle>
          <VideoSectionSubtitle>
            Experience the future of investment education through engaging lessons and real-world portfolio applications
          </VideoSectionSubtitle>
        </VideoSectionContent>
      </VideoSection>

      <ProductsSection>
        <Container>
          <ScrollReveal ref={setScrollRevealRef(7)}>
            {/* Карусель Featured Solutions */}
            <CarouselContainer
              onTouchStart={onFeaturedTouchStart}
              onTouchMove={onFeaturedTouchMove}
              onTouchEnd={onFeaturedTouchEnd}
            >
              <CarouselTrack currentSlide={currentFeaturedSlide}>
                {featuredSlides.map((slide, index) => (
                  <CarouselSlide key={index}>
                    <CarouselContent>
                      <CarouselTitle>{slide.title}</CarouselTitle>
                      <CarouselSubtitle>{slide.subtitle}</CarouselSubtitle>
                    </CarouselContent>
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselContainer>
            
            {/* Навигационные точки для Featured Solutions */}
            <CarouselDots>
              {Array.from({ length: totalFeaturedSlides }).map((_, index) => (
                <CarouselDot
                  key={index}
                  active={currentFeaturedSlide === index}
                  onClick={() => goToFeaturedSlide(index)}
                />
              ))}
            </CarouselDots>
          </ScrollReveal>
          
          <ProductsGrid>
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} ref={setScrollRevealRef(8 + index)} delay={index * 100}>
                <ProductCard $isActive={activeProductCard === index}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductInfo style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%',
                    padding: '20px' 
                  }}>
                    <ProductContent style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}>
                      <ProductTitle style={{ 
                        marginBottom: '12px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {product.name}
                      </ProductTitle>
                      
                      <ProductDescription style={{
                        height: '70px',
                        overflow: 'hidden',
                        marginBottom: '8px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.4'
                      }}>
                        {product.description.length > 100 
                          ? product.description.substring(0, 100) + '...'
                          : product.description
                        }
                      </ProductDescription>
                      
                      <div style={{
                        marginTop: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '5px'
                      }}>
                        <ProductButton 
                          as={Link} 
                          to={`/product/${product.id}`}
                          style={{
                            padding: '8px 16px',
                            minWidth: '110px',
                            textAlign: 'center',
                            fontSize: '0.85rem',
                            fontWeight: '500'
                          }}
                        >
                          Start Learning
                        </ProductButton>
                      </div>
                    </ProductContent>
                  </ProductInfo>
                </ProductCard>
              </ScrollReveal>
            ))}
          </ProductsGrid>
          
          <ScrollReveal ref={setScrollRevealRef(14)}>
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <PremiumButton as={Link} to="/products">
                <span>
                  💰 View All Courses
                </span>
              </PremiumButton>
            </div>
          </ScrollReveal>
        </Container>
      </ProductsSection>

      {/* Photo Gallery Section */}
      <PhotoGallerySection ref={galleryRef}>
        {isVisible && (
          <PhotoStrip>
            {/* Первый набор изображений */}
            {galleryImages.map((image) => (
              <PhotoItem key={`first-${image.id}`} className={`photo-${image.type}`}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
            {/* Дублированный набор для бесконечной прокрутки */}
            {galleryImages.map((image) => (
              <PhotoItem key={`second-${image.id}`} className={`photo-${image.type}`}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
            {/* Третий набор для полной бесконечности */}
            {galleryImages.map((image) => (
              <PhotoItem key={`third-${image.id}`} className={`photo-${image.type}`}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
          </PhotoStrip>
        )}
        
        <ScrollingTextBanner>
          <ScrollingText>
            {scrollingTexts.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </ScrollingText>
        </ScrollingTextBanner>
      </PhotoGallerySection>

      {/* Information Section */}
      <InfoSection>
        <InfoGrid>
          <InfoBlock>
            <InfoTitle>Master Investing</InfoTitle>
            <InfoDescription>
              Transform your financial future with comprehensive investment training. 
              Learn portfolio management, risk assessment, and advanced investment strategies 
              that professionals use to build sustainable wealth and financial freedom.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Professional Investment Development</InfoSubtitle>
              <InfoText>
                Master <InfoHighlight>advanced investment techniques </InfoHighlight> 
                 that deliver consistent, high-impact portfolio returns and wealth growth. From basic asset allocation to 
                complex trading strategies, learn to create industry-standard portfolios.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Real-World Applications</InfoTitle>
            <InfoDescription>
              Apply investment knowledge immediately with practical projects and case studies. 
              Our courses focus on real market scenarios and measurable performance improvement in portfolio management.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Industry-Proven Methods</InfoSubtitle>
              <InfoText>
                Learn <InfoHighlight>battle-tested investment strategies</InfoHighlight> used by 
                top traders and portfolio managers. From market analysis to execution, 
                master techniques that deliver measurable returns.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Lifetime Learning Access</InfoTitle>
            <InfoDescription>
              Enjoy unlimited access to all course materials, updates, and new content. 
              Stay ahead of the rapidly evolving financial markets with continuous learning.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Always Up-to-Date Content</InfoSubtitle>
              <InfoText>
                Access <InfoHighlight>regularly updated curriculum</InfoHighlight> that 
                evolves with market trends. New strategies, tools, and methods are 
                added monthly to keep your investment skills current.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Expert Community Support</InfoTitle>
            <InfoDescription>
              Join a thriving community of investment professionals and receive personalized guidance. 
              Get answers to your questions and accelerate your wealth building journey.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>24/7 Community Access</InfoSubtitle>
              <InfoText>
                Connect with <InfoHighlight>hundreds of investment learners worldwide </InfoHighlight> 
                through our exclusive community platform. Share strategies, get feedback, 
                and collaborate on investment projects.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>
        </InfoGrid>
      </InfoSection>
    </>
  );
};

export default Home;
