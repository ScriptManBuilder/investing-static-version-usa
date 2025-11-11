// Contact Information Constants
export const CONTACT_INFO = {
  email: process.env.REACT_APP_SUPPORT_EMAIL || 'support@copywriting-ecourses.com',
  phone: process.env.REACT_APP_SUPPORT_PHONE || '+18144822083',
  phoneFormatted: process.env.REACT_APP_SUPPORT_PHONE_FORMATTED || '+1 (814) 482-2083',
} as const;

// Company Information Constants
export const COMPANY_INFO = {
  name: process.env.REACT_APP_COMPANY_NAME || 'Ecomformationusa Inc',
  websiteUrl: process.env.REACT_APP_WEBSITE_URL || 'visual-ecourses.com',
  address: process.env.REACT_APP_COMPANY_ADDRESS || '126 LAKE MARIAM WAY, WINTER HAVEN, FL 33884',
  owner: process.env.REACT_APP_COMPANY_OWNER || 'Renita Godbold',
} as const;

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3007',
} as const;

// App Configuration
export const APP_CONFIG = {
  name: process.env.REACT_APP_APP_NAME || 'ExelVisualEcourses',
  version: process.env.REACT_APP_VERSION || '1.0.0',
} as const;