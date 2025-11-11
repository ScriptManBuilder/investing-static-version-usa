// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов копирайтинга
  return `/images/img_1.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем copywriting изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview (10-second previews for catalog)
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/vid10sec/1 Stock Market Investing Fundamental Analysis and Financial Statem_10sec.mp4";
  }
  if (productId === 2) {
    return "/videos/vid10sec/2 Stock Market Investing Fundamental Analysis and Financial Statem_10sec.mp4";
  }
  if (productId === 3) {
    return "/videos/vid10sec/3 Stock Market Investing Fundamental Analysis and Financial Statem_10sec.mp4";
  }
  if (productId === 4) {
    return "/videos/vid10sec/4 Stock Market Investing Fundamental Analysis and Financial Statem_10sec.mp4";
  }
  if (productId === 5) {
    return "/videos/vid10sec/5 Stock Market Investing Fundamental Analysis and Financial Statem_10sec.mp4";
  }
  if (productId === 6) {
    return "/videos/vid10sec/6 Stock Market Investing Fundamental Analysis and Financial Statem_10sec.mp4";
  }
  if (productId === 7) {
    return "/videos/vid10sec/7 Stock Market Investing Fundamental Analysis and Financial Statem (1)_10sec.mp4";
  }
  if (productId === 8) {
    return "/videos/vid10sec/8 Stock Market Investing Fundamental Analysis and Financial Statem_10sec.mp4";
  }
  if (productId === 9) {
    return "/videos/vid10sec/9 Stock Market Investing Fundamental Analysis and Financial Statem_10sec.mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 1-4: 1 video each (basic courses get 5-minute versions for account access)
  if (productId === 1) {
    return ["/videos/vid5min/1 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"];
  }
  if (productId === 2) {
    return ["/videos/vid5min/2 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"];
  }
  if (productId === 3) {
    return ["/videos/vid5min/3 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"];
  }
  if (productId === 4) {
    return ["/videos/vid5min/4 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"];
  }
  
  // Courses 5-7: 3 videos each
  if (productId === 5) {
    return [
      "/videos/vid5min/5 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/6 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/7 Stock Market Investing Fundamental Analysis and Financial Statem (1)_5min.mp4"
    ];
  }
  if (productId === 6) {
    return [
      "/videos/vid5min/8 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/9 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/1 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/vid5min/2 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/3 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/4 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"
    ];
  }
  
  // Courses 8-10: 5 videos each
  if (productId === 8) {
    return [
      "/videos/vid5min/5 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/6 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/7 Stock Market Investing Fundamental Analysis and Financial Statem (1)_5min.mp4",
      "/videos/vid5min/8 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/9 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/vid5min/1 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/2 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/3 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/4 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/5 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/vid5min/6 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/7 Stock Market Investing Fundamental Analysis and Financial Statem (1)_5min.mp4",
      "/videos/vid5min/8 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/9 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/1 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"
    ];
  }
  
  // Course 11: 7 videos (premium)
  if (productId === 11) {
    return [
      "/videos/vid5min/2 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/3 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/4 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/5 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/6 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4",
      "/videos/vid5min/7 Stock Market Investing Fundamental Analysis and Financial Statem (1)_5min.mp4",
      "/videos/vid5min/8 Stock Market Investing Fundamental Analysis and Financial Statem_5min.mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Introduction to Stock Market Investing",
    price: 6.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    videos: getProductVideos(1),
    description: "Discover why fundamental analysis gives you an edge in investing. Learn how analyzing financial statements helps you make smarter investment decisions.",
    detailedDescription: "Welcome to stock market investing! Learn why mastering fundamental analysis is crucial in today's market. Discover how to analyze financial statements to determine a company's true value and make informed investment decisions. This introduction sets the foundation for becoming a confident investor who can identify profitable opportunities.",
    category: "Course Introduction",
    features: [
      "Understanding fundamental analysis",
      "Financial statement basics",
      "Investment decision-making",
      "Stock valuation fundamentals",
      "Foundation for successful investing"
    ],
    specifications: {
      "Duration": "2 minutes 12 seconds",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Investment Introduction",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "What Makes a Good Investment",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    videos: getProductVideos(2),
    description: "Learn the three essential financial statements every investor must analyze: Income Statement, Balance Sheet, and Cash Flow Statement.",
    detailedDescription: "Master the fundamental components of financial analysis. Learn how to read and interpret the three essential financial statements that reveal a company's true financial health. Discover why understanding income statements, balance sheets, and cash flow is crucial for making profitable investment decisions.",
    category: "Investment Fundamentals",
    features: [
      "Income statement analysis",
      "Balance sheet interpretation",
      "Cash flow understanding",
      "Financial health assessment",
      "Investment evaluation methods"
    ],
    specifications: {
      "Duration": "3 minutes 1 second",
      "Level": "Beginner",
      "Focus": "Financial Statements",
      "Topics": "Income, balance, cash flow fundamentals",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Mastering Income Statements",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    videos: getProductVideos(3),
    description: "Learn how to analyze income statements by understanding revenue, gross profit, operating income, and net income to evaluate company profitability.",
    detailedDescription: "Master income statement analysis through powerful techniques. Learn to evaluate total revenue, cost of revenue, operating expenses, and net income. Discover how to identify profitable companies and make sound investment decisions based on earnings performance.",
    category: "Income Analysis",
    features: [
      "Revenue analysis mastery",
      "Profit margin calculations",
      "Operating income evaluation",
      "Net income interpretation",
      "Profitability assessment frameworks"
    ],
    specifications: {
      "Duration": "4 minutes 41 seconds",
      "Level": "Beginner",
      "Focus": "Income Statement Analysis",
      "Tools": "Revenue, expenses, profit margins",
      "Access": "10 months",
      "Bonus": "Income statement templates"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Mastering Balance Sheets & Assets",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    videos: getProductVideos(4),
    description: "Discover how to analyze balance sheets through understanding assets, liabilities, and shareholder equity to assess company financial health.",
    detailedDescription: "Learn the essential techniques for analyzing balance sheets. Master the art of evaluating current and non-current assets, understanding liabilities and debt, and calculating key ratios like current ratio and book value. Understand why balance sheet analysis is crucial for identifying financially healthy companies.",
    category: "Balance Sheet Mastery",
    features: [
      "Asset evaluation strategies",
      "Liability assessment",
      "Current ratio calculation",
      "Debt analysis methods",
      "Financial health indicators"
    ],
    specifications: {
      "Duration": "3 minutes 34 seconds",
      "Level": "Intermediate",
      "Focus": "Balance sheet analysis, ratios, valuation",
      "Techniques": "Assets, liabilities, equity analysis",
      "Access": "8 months",
      "Bonus": "Balance sheet framework"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Cash Flow Analysis & Free Cash Flow",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master cash flow statement analysis through understanding operating, investing, and financing activities to evaluate company liquidity.",
    detailedDescription: "Master the powerful cash flow analysis techniques. This course includes 3 detailed modules covering operating cash flow, investing activities, and financing activities. Learn how to calculate free cash flow and assess a company's ability to generate cash and pay debts.",
    category: "Cash Flow Mastery",
    features: [
      "3 comprehensive cash flow modules",
      "Operating activity analysis",
      "Investment evaluation techniques",
      "Financing activity assessment",
      "Free cash flow calculation",
      "Liquidity analysis skills"
    ],
    specifications: {
      "Duration": "8 minutes 15 seconds",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Cash flow, liquidity, debt analysis",
      "Projects": "Cash flow practice exercises",
      "Access": "10 months",
      "Bonus": "Cash flow analysis templates"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Financial Ratios & Valuation Metrics",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn how to calculate and interpret key financial ratios including PE ratio, current ratio, and profit margins to value stocks effectively.",
    detailedDescription: "Master financial ratio analysis with comprehensive training. This course includes 2 detailed modules covering valuation ratios and profitability metrics. Learn how PE ratios work, how to calculate profit margins, and use these metrics to identify undervalued stocks. Discover proven methods for stock valuation.",
    category: "Ratio Analysis",
    features: [
      "2 detailed ratio modules",
      "PE ratio calculation",
      "Profit margin analysis",
      "Current ratio principles",
      "Valuation methodology",
      "Stock comparison techniques"
    ],
    specifications: {
      "Duration": "8 minutes 33 seconds",
      "Videos": "2 detailed modules",
      "Level": "Intermediate",
      "Focus": "Ratios, valuation, stock analysis",
      "Applications": "PE ratio, margins, liquidity ratios",
      "Access": "12 months",
      "Support": "Ratio calculation library"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Company Analysis & Investment Strategy",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master comprehensive company analysis using financial statements to build profitable investment strategies and identify growth opportunities.",
    detailedDescription: "Master investment strategy with comprehensive training on company evaluation. This course includes 3 detailed modules covering how to analyze company performance, identify growth vs value stocks, and create winning investment strategies. Learn techniques used by professional investors to build wealth through smart stock selection.",
    category: "Investment Strategy",
    features: [
      "3 comprehensive strategy modules",
      "Company evaluation framework",
      "Growth stock identification",
      "Value investing techniques",
      "Portfolio building methods",
      "Risk assessment mastery"
    ],
    specifications: {
      "Duration": "7 minutes 9 seconds",
      "Videos": "3 detailed modules",
      "Level": "Intermediate",
      "Focus": "Strategy, analysis, stock selection",
      "Applications": "Growth investing, value investing",
      "Access": "12 months",
      "Bonus": "Investment framework library"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Advanced Financial Statement Analysis",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master advanced analysis techniques: revenue trends, expense management, debt evaluation, and red flags to identify exceptional investment opportunities.",
    detailedDescription: "Master advanced financial analysis with comprehensive training. This course includes 5 detailed modules covering revenue trend analysis, expense evaluation, debt assessment strategies, and how to spot financial red flags. Learn to identify undervalued companies and avoid costly investment mistakes.",
    category: "Advanced Analysis",
    features: [
      "5 detailed analysis modules",
      "Revenue trend evaluation",
      "Expense analysis methods",
      "Debt assessment strategies",
      "Red flag identification",
      "Risk mitigation techniques"
    ],
    specifications: {
      "Duration": "13 minutes 56 seconds",
      "Videos": "5 detailed modules",
      "Level": "Advanced",
      "Focus": "Trends, risks, deep analysis",
      "Techniques": "4 analysis types, warning signs",
      "Access": "12 months",
      "Bonus": "Analysis template library"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Portfolio Management & Stock Selection",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Learn to build profitable portfolios by understanding diversification, risk management, and stock selection strategies for long-term wealth.",
    detailedDescription: "Master portfolio management with comprehensive advanced training. This premium course includes 5 comprehensive modules covering diversification strategies, risk assessment, position sizing, and stock selection criteria. Learn techniques that help you build and manage portfolios for consistent long-term returns.",
    category: "Portfolio Management",
    features: [
      "5 comprehensive portfolio modules",
      "Diversification strategies",
      "Risk management mastery",
      "Position sizing techniques",
      "Stock selection criteria",
      "Wealth building methods"
    ],
    specifications: {
      "Duration": "18 minutes 43 seconds",
      "Videos": "5 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Portfolios, diversification, wealth building",
      "Techniques": "Asset allocation, risk control",
      "Access": "15 months",
      "Bonus": "Portfolio management templates"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Real-World Investing & Market Analysis",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master real-world investment strategies: market cycles, economic indicators, and practical techniques to generate consistent returns.",
    detailedDescription: "Master practical investing with extensive professional training. This elite course includes 5 extensive modules covering market cycle analysis, economic indicators interpretation, sector rotation strategies, and proven techniques for consistent profitability. Learn how to apply fundamental analysis in real market conditions.",
    category: "Market Analysis",
    features: [
      "5 extensive professional modules",
      "Market cycle strategies",
      "Economic indicator analysis",
      "Sector rotation techniques",
      "Timing strategies",
      "Consistent returns mastery"
    ],
    specifications: {
      "Duration": "16 minutes 57 seconds",
      "Videos": "5 extensive modules",
      "Level": "Professional",
      "Focus": "Market analysis, cycles, profitability",
      "Techniques": "3 strategy types, market timing",
      "Access": "15 months",
      "Bonus": "Market analysis frameworks"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Complete Investment Mastery: Advanced Financial Analysis & Wealth Building",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master all advanced investment techniques including deep financial analysis, valuation methods, risk assessment, and complete wealth building transformation.",
    detailedDescription: "Achieve complete investment mastery with comprehensive training covering all advanced techniques. This premium course includes 8 comprehensive modules covering advanced financial statement analysis, multiple valuation methods, sophisticated risk management, sector analysis, company research techniques, and mastering every investment strategy used by professional investors worldwide.",
    category: "Complete Mastery",
    features: [
      "8 comprehensive masterclass modules",
      "Complete advanced investment mastery",
      "All analysis techniques covered",
      "Multiple valuation frameworks",
      "Advanced risk management",
      "Professional research methods",
      "Sector analysis integration",
      "Professional investor expertise"
    ],
    specifications: {
      "Duration": "9 minutes 51 seconds",
      "Videos": "8 comprehensive modules",
      "Level": "Expert",
      "Coverage": "All advanced investment techniques",
      "Skills": "Complete financial mastery & wealth building expertise",
      "Access": "18 months",
      "Bonus": "Complete investment framework library & templates"
    },
    inStock: true
  }
];
