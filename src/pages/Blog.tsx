import React, { useState, useEffect } from 'react';
import { Container } from '../styles/GlobalStyles';
import {
  BlogWrapper,
  BlogHeader,
  BlogTitle,
  BlogSubtitle,
  BlogContent,
  FeaturedPost,
  FeaturedImage,
  FeaturedContent,
  FeaturedTitle,
  FeaturedExcerpt,
  FeaturedMeta,
  PostsGrid,
  BlogPost,
  PostImage,
  PostContent,
  PostTitle,
  PostExcerpt,
  PostMeta,
  AuthorInfo,
  AuthorAvatar,
  AuthorDetails,
  AuthorName,
  PostDate,
  CategoryTag,
  SearchSection,
  SearchInput,
  FilterButtons,
  FilterButton,
  LoadMoreButton,
  SidebarSection,
  SidebarTitle,
  PopularPosts,
  PopularPost,
  PopularPostTitle,
  NewsletterSignup,
  NewsletterTitle,
  NewsletterInput,
  NewsletterButton,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalImage,
  ModalBody,
  ModalTitle,
  ModalMeta,
  ModalAuthor,
  ModalAuthorAvatar,
  ModalAuthorInfo,
  ModalAuthorName,
  ModalPostDate,
  ModalCategoryTag,
  ModalContent_Text,
  ClickablePost,
  ClickableFeaturedPost
} from '../styles/pages/BlogStyles';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  comingSoon?: boolean;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPostData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate dynamic dates for blog posts
  const generatePostDate = (daysAgo: number): string => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const categories = ['All', 'Investment Basics', 'Financial Analysis', 'Stock Valuation', 'Course Updates', 'Career Tips', 'Investment Tutorials'];

  const blogPosts: BlogPostData[] = [
    {
      id: 1,
      title: "Stock Market Investing for Beginners: Your Complete Learning Roadmap 2025",
      excerpt: "Start your investing journey with confidence. This comprehensive guide covers everything from basic fundamental analysis to advanced valuation techniques, with hands-on projects and career advice.",
      content: "Stock market investing has become one of the most sought-after skills in finance and wealth building, and for good reason. In this comprehensive guide, we'll walk you through everything you need to know to master professional investing...",
      image: "/images/img_1.jpg",
      author: "Investment Team",
      date: generatePostDate(5),
      category: "Investment Basics",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Growth vs Value: Choosing the Right Investment Approach",
      excerpt: "Confused about which investment style to use? We break down the differences between growth and value investing to help you make the right choice for your portfolio.",
      content: "Choosing the right investment approach is crucial for your wealth building success. This comprehensive comparison will help you understand when to use growth vs value investing strategies...",
      image: "/images/img_2.jpg",
      author: "Investment Team",
      date: generatePostDate(8),
      category: "Investment Basics",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "New Course Launch: Advanced Financial Analysis & Valuation Mastery",
      excerpt: "We're excited to announce our latest advanced course covering cash flow analysis, balance sheet evaluation, valuation frameworks, and professional investment portfolio development.",
      content: "Our newest course takes you deep into the art of fundamental analysis, covering everything from basic financial statements to advanced valuation techniques...",
      image: "/images/img_3.jpg",
      author: "InvestingEcourses Team",
      date: generatePostDate(10),
      category: "Course Updates",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Top 10 Investment Analysis Techniques Every Investor Should Know in 2025",
      excerpt: "Stay ahead with the most essential investment analysis techniques of 2025. From PE ratios to cash flow analysis, discover the methods driving modern investing success.",
      content: "The investment ecosystem is constantly evolving in 2025. Here are the ten most important financial analysis techniques that every professional should master...",
      image: "/images/img_4.jpg",
      author: "Investment Team",
      date: generatePostDate(11),
      category: "Investment Basics",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Student Success Story: From Novice to Professional Investor in 4 Months",
      excerpt: "Meet Sarah Johnson, who transformed her career from avoiding stocks to becoming a confident professional investor through our comprehensive course program. Learn about her inspiring journey.",
      content: "Sarah's story proves that with dedication and the right education, anyone can master professional investing. Here's how she made the transformation...",
      image: "/images/img_5.jpg",
      author: "Investment Team",
      date: generatePostDate(13),
      category: "Career Tips",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Creating Your First Investment Portfolio: Complete Tutorial",
      excerpt: "Ready to build your first professional investment portfolio? This step-by-step tutorial walks you through creating a complete portfolio from stock selection to diversification.",
      content: "Nothing beats learning by doing. In this practical tutorial, we'll build a complete investment portfolio together, covering every step from initial analysis to final allocation...",
      image: "/images/img_6.jpg",
      author: "Investment Team",
      date: generatePostDate(14),
      category: "Investment Tutorials",
      readTime: "15 min read"
    },
    {
      id: 7,
      title: "Investment Best Practices: Creating Professional and Effective Analysis",
      excerpt: "Learn the essential principles of creating clear, professional, and impactful investment analysis. Master industry standards, valuation optimization, and professional investing practices.",
      content: "Creating professional investment analysis is an art form itself. As your investment projects grow, following best practices becomes crucial for returns and career development...",
      image: "/images/img_7.jpg",
      author: "Investment Team",
      date: generatePostDate(15),
      category: "Investment Basics",
      readTime: "9 min read"
    },
    {
      id: 8,
      title: "Stock Valuation Fundamentals: From Financial Statements to Fair Value",
      excerpt: "Dive into the powerful world of stock valuation. Master income statements, balance sheets, and valuation models in this comprehensive guide to fundamental analysis.",
      content: "Financial statement analysis is the foundation of modern investing. Learn how to transform data into compelling valuations that drive investment decisions and build wealth...",
      image: "/images/img_8.jpg",
      author: "Investment Team",
      date: generatePostDate(16),
      category: "Stock Valuation",
      readTime: "11 min read"
    },
    {
      id: 9,
      title: "Investment Workflow: Streamline Your Analysis Process",
      excerpt: "Discover how optimized investment workflows can transform your analysis productivity. Learn professional techniques for research, analysis, and portfolio optimization.",
      content: "Investment workflow optimization can transform your analysis output. From efficient research techniques to advanced valuation strategies, professional workflows elevate your investing...",
      image: "/images/img_1.jpg",
      author: "Investment Team",
      date: generatePostDate(16),
      category: "Investment Tutorials",
      readTime: "13 min read"
    },
    {
      id: 10,
      title: "🚀 Coming Soon: Advanced Persuasion & Influence Strategies",
      excerpt: "We're preparing an exclusive deep-dive into advanced persuasion techniques, influence strategies, emotional engagement tactics, and professional storytelling for sales. Stay tuned for expert insights on professional communication mastery.",
      content: "This exciting new article is currently in development and will be published soon...",
      image: "/images/img_2.jpg",
      author: "Storytelling Team",
      date: "Coming Soon",
      category: "Persuasion",
      readTime: "Coming Soon",
      comingSoon: true
    }
  ];

  const popularPosts = [
    { id: 1, title: "Storytelling for Beginners: Complete Roadmap", readTime: "8 min" },
    { id: 2, title: "Stories vs Facts: Comparison Guide", readTime: "12 min" },
    { id: 3, title: "Storytelling Career Transition Guide", readTime: "7 min" },
    { id: 4, title: "🚀 Advanced Persuasion Strategies", readTime: "Coming Soon", comingSoon: true }
  ];

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle newsletter subscription
  const handleSubscribe = async () => {
    setEmailError('');
    
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success alert
      alert(`🎉 Success! Welcome to StorytellingEcourses newsletter!\n\nEmail: ${email}\n\nYou'll receive the latest storytelling tutorials and course updates directly in your inbox.`);
      
      setEmail('');
    } catch (error) {
      alert('❌ Subscription failed. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  // Modal functions
  const openModal = (post: BlogPostData) => {
    if (post.comingSoon) return; // Don't open modal for coming soon posts
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [isModalOpen]);

  // Handle click outside modal
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured).slice(0, visiblePosts);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <BlogWrapper>
      <Container>
        <BlogHeader>
          <BlogTitle>Storytelling E-courses Blog</BlogTitle>
          <BlogSubtitle>
            Tutorials, insights, and updates from the world of professional storytelling education
          </BlogSubtitle>
        </BlogHeader>

        <SearchSection>
          <SearchInput
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
          <FilterButtons>
            {categories.map(category => (
              <FilterButton
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterButtons>
        </SearchSection>

        <BlogContent>
          <div style={{ flex: 1 }}>
            {featuredPost && selectedCategory === 'All' && !searchTerm && (
              <ClickableFeaturedPost onClick={() => openModal(featuredPost)}>
                <FeaturedPost>
                  <FeaturedImage src={featuredPost.image} alt={featuredPost.title} />
                  <FeaturedContent>
                    <CategoryTag>{featuredPost.category}</CategoryTag>
                    <FeaturedTitle>{featuredPost.title}</FeaturedTitle>
                    <FeaturedExcerpt>{featuredPost.excerpt}</FeaturedExcerpt>
                    <FeaturedMeta>
                      <AuthorInfo>
                        <AuthorAvatar src="/images/img_3.jpg" alt={featuredPost.author} />
                        <AuthorDetails>
                          <AuthorName>{featuredPost.author}</AuthorName>
                          <PostDate>{featuredPost.date} • {featuredPost.readTime}</PostDate>
                        </AuthorDetails>
                      </AuthorInfo>
                    </FeaturedMeta>
                  </FeaturedContent>
                </FeaturedPost>
              </ClickableFeaturedPost>
            )}

            <PostsGrid>
              {regularPosts.map(post => (
                <ClickablePost key={post.id} onClick={() => openModal(post)}>
                  <BlogPost 
                    style={{
                      opacity: post.comingSoon ? 0.85 : 1,
                      border: post.comingSoon ? '2px dashed #667eea' : 'none',
                      background: post.comingSoon ? 'linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)' : 'white',
                      animation: post.comingSoon ? 'glow 3s infinite' : 'none'
                    }}
                  >
                  <div style={{ position: 'relative' }}>
                    <PostImage 
                      src={post.image} 
                      alt={post.title}
                      style={{
                        filter: post.comingSoon ? 'grayscale(50%) blur(1px)' : 'none'
                      }}
                    />
                    {post.comingSoon && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'rgba(102, 126, 234, 0.95)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                        backdropFilter: 'blur(4px)'
                      }}>
                        🚀 Coming Soon
                      </div>
                    )}
                  </div>
                  <PostContent>
                    <CategoryTag style={{
                      background: post.comingSoon ? 
                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      opacity: post.comingSoon ? 0.8 : 1,
                      animation: post.comingSoon ? 'pulse 2s infinite' : 'none'
                    }}>
                      {post.comingSoon ? '📅 ' + post.category : post.category}
                    </CategoryTag>
                    <PostTitle style={{
                      color: post.comingSoon ? '#667eea' : '#2d3748'
                    }}>
                      {post.title}
                    </PostTitle>
                    <PostExcerpt style={{
                      fontStyle: post.comingSoon ? 'italic' : 'normal',
                      color: post.comingSoon ? '#5a67d8' : '#666'
                    }}>
                      {post.excerpt}
                    </PostExcerpt>
                    <PostMeta>
                      <AuthorInfo>
                        <AuthorAvatar 
                          src="/images/img_4.jpg" 
                          alt={post.author}
                          style={{
                            filter: post.comingSoon ? 'grayscale(30%)' : 'none'
                          }}
                        />
                        <AuthorDetails>
                          <AuthorName style={{
                            color: post.comingSoon ? '#667eea' : '#2d3748'
                          }}>
                            {post.author}
                          </AuthorName>
                          <PostDate style={{
                            color: post.comingSoon ? '#667eea' : '#999',
                            fontWeight: post.comingSoon ? '600' : 'normal'
                          }}>
                            {post.comingSoon ? (
                              <span>
                                🕐 {post.date} • {post.readTime}
                              </span>
                            ) : (
                              `${post.date} • ${post.readTime}`
                            )}
                          </PostDate>
                        </AuthorDetails>
                      </AuthorInfo>
                    </PostMeta>
                    {post.comingSoon && (
                      <div style={{
                        marginTop: '15px',
                        padding: '10px',
                        background: 'rgba(102, 126, 234, 0.1)',
                        borderRadius: '8px',
                        textAlign: 'center',
                        fontSize: '0.85rem',
                        color: '#667eea',
                        fontWeight: '500'
                      }}>
                        💡 Subscribe to our newsletter to be notified when this article is published!
                      </div>
                    )}
                  </PostContent>
                </BlogPost>
                </ClickablePost>
              ))}
            </PostsGrid>

            {regularPosts.length < filteredPosts.filter(post => !post.featured).length && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <LoadMoreButton onClick={handleLoadMore}>
                  Load More Articles
                </LoadMoreButton>
              </div>
            )}
          </div>

          <SidebarSection>
            <div>
              <SidebarTitle>Popular Articles</SidebarTitle>
              <PopularPosts>
                {popularPosts.map((post: any) => (
                  <PopularPost 
                    key={post.id}
                    style={{
                      background: post.comingSoon ? 'linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)' : 'transparent',
                      border: post.comingSoon ? '1px dashed #667eea' : 'none',
                      borderRadius: post.comingSoon ? '8px' : '0',
                      padding: post.comingSoon ? '12px' : '15px 0'
                    }}
                  >
                    <PopularPostTitle style={{
                      color: post.comingSoon ? '#667eea' : '#2d3748',
                      fontStyle: post.comingSoon ? 'italic' : 'normal'
                    }}>
                      {post.title}
                    </PopularPostTitle>
                    <PostDate style={{
                      color: post.comingSoon ? '#667eea' : '#999',
                      fontWeight: post.comingSoon ? '600' : 'normal'
                    }}>
                      {post.comingSoon ? '🕐 ' + post.readTime : post.readTime}
                    </PostDate>
                  </PopularPost>
                ))}
              </PopularPosts>
            </div>

            <NewsletterSignup>
              <NewsletterTitle>Stay Updated</NewsletterTitle>
              <p>Get the latest storytelling tutorials delivered to your inbox</p>
              <div style={{ position: 'relative' }}>
                <NewsletterInput
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  style={{
                    borderColor: emailError ? '#e53e3e' : undefined,
                    marginBottom: emailError ? '5px' : '15px'
                  }}
                />
                {emailError && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '0.8rem',
                    marginBottom: '10px',
                    textAlign: 'left'
                  }}>
                    {emailError}
                  </div>
                )}
              </div>
              <NewsletterButton 
                onClick={handleSubscribe}
                disabled={isSubscribing}
                style={{
                  opacity: isSubscribing ? 0.7 : 1,
                  cursor: isSubscribing ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubscribing ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid #667eea',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></span>
                    Subscribing...
                  </span>
                ) : (
                  'Subscribe'
                )}
              </NewsletterButton>
              <style>
                {`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                  
                  @keyframes pulse {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 1; }
                  }
                  
                  @keyframes glow {
                    0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.3); }
                    50% { box-shadow: 0 0 15px rgba(102, 126, 234, 0.6); }
                  }
                `}
              </style>
            </NewsletterSignup>
          </SidebarSection>
        </BlogContent>
      </Container>
      
      {/* Modal */}
      {isModalOpen && selectedPost && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeModal}>
              ✕
            </ModalCloseButton>
            
            <ModalHeader>
              <ModalImage src={selectedPost.image} alt={selectedPost.title} />
            </ModalHeader>
            
            <ModalBody>
              <ModalTitle>{selectedPost.title}</ModalTitle>
              
              <ModalMeta>
                <ModalCategoryTag>{selectedPost.category}</ModalCategoryTag>
                <ModalAuthor>
                  <ModalAuthorAvatar src="/images/img_6.jpg" alt={selectedPost.author} />
                  <ModalAuthorInfo>
                    <ModalAuthorName>{selectedPost.author}</ModalAuthorName>
                    <ModalPostDate>{selectedPost.date} • {selectedPost.readTime}</ModalPostDate>
                  </ModalAuthorInfo>
                </ModalAuthor>
              </ModalMeta>
              
              <ModalContent_Text>
                {selectedPost.content}
                
                <h3>Key Takeaways</h3>
                <ul>
                  <li>Storytelling is transforming communication through innovative narrative techniques</li>
                  <li>Modern storytelling methods provide unlimited creative possibilities and professional workflows</li>
                  <li>Narrative principles can bring ideas and messages to life through compelling stories</li>
                  <li>The future of communication combines traditional storytelling with cutting-edge influence techniques</li>
                </ul>
                
                <blockquote>
                  "Professional storytelling opens endless possibilities for career success, from sales presentations to leadership communication and narratives that inspire action worldwide."
                </blockquote>
                
                <h3>What's Next?</h3>
                <p>As we continue to explore the potential of storytelling, we're seeing unprecedented opportunities for communication, influence, and career success. The key is mastering the fundamentals while staying current with modern storytelling tools and techniques.</p>
                
                <p>Ready to dive deeper into professional storytelling? Explore our comprehensive courses and join thousands of communicators who are already creating incredible narratives with professional storytelling techniques.</p>
              </ModalContent_Text>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </BlogWrapper>
  );
};

export default Blog;