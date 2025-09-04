// MongoDB Schema Examples for the Admin Dashboard
// Use these schemas when setting up your MongoDB database

// User Schema
const UserSchema = {
  _id: "ObjectId",
  id: "Number", // Unique identifier
  name: "String", // Full name
  email: "String", // Email address (unique)
  phone: "String", // Phone number
  address: "String", // Full address
  occupation: "String", // Job title/profession
  pancardNumber: "String", // PAN card number
  annualIncome: "String", // Annual income (formatted with $)
  creditScore: "Number", // Credit score (0-900)
  joinDate: "Date", // Registration date
  createdAt: "Date",
  updatedAt: "Date"
};

// Application Schema
const ApplicationSchema = {
  _id: "ObjectId",
  id: "Number", // Unique identifier
  userId: "ObjectId", // Reference to User
  name: "String", // Applicant name (denormalized for quick access)
  creditScore: "Number", // Credit score at time of application
  loanType: "String", // Type of loan (Home, Car, Personal, Education, Business)
  requiredScore: "Number", // Minimum required credit score for this loan type
  status: "String", // Application status (Under Scrutiny, Approved, Rejected)
  appliedDate: "Date", // Application submission date
  amount: "String", // Loan amount (formatted with $)
  reviewedBy: "ObjectId", // Reference to admin who reviewed (optional)
  reviewedAt: "Date", // Date of review (optional)
  rejectionReason: "String", // Reason for rejection (optional)
  createdAt: "Date",
  updatedAt: "Date"
};

// Analytics Schema (for caching calculated values)
const AnalyticsSchema = {
  _id: "ObjectId",
  date: "Date", // Date for this analytics snapshot
  totalUsers: "Number",
  totalApplications: "Number",
  avgCreditScore: "Number",
  approvalRate: "Number",
  creditScoreDistribution: [
    {
      range: "String", // e.g., "Fair (550-649)"
      count: "Number",
      color: "String" // Hex color code
    }
  ],
  loanTypeBreakdown: [
    {
      name: "String", // e.g., "Home Loan"
      value: "Number", // Percentage
      color: "String" // Hex color code
    }
  ],
  createdAt: "Date",
  updatedAt: "Date"
};

// Example API Endpoints Structure
const ApiEndpoints = {
  // User endpoints
  "GET /api/users": "Get all users",
  "GET /api/users/:id": "Get user by ID",
  "POST /api/users": "Create new user",
  "PUT /api/users/:id": "Update user",
  "DELETE /api/users/:id": "Delete user",
  
  // Application endpoints
  "GET /api/applications": "Get all applications",
  "GET /api/applications/:id": "Get application by ID",
  "POST /api/applications": "Create new application",
  "PATCH /api/applications/:id/status": "Update application status",
  "GET /api/users/:id/applications": "Get applications for specific user",
  
  // Analytics endpoints
  "GET /api/analytics/dashboard": "Get dashboard analytics",
  "GET /api/analytics/credit-scores": "Get credit score distribution",
  "GET /api/analytics/loan-types": "Get loan type breakdown",
};

// Example Environment Variables (.env file)
const EnvironmentVariables = {
  VITE_API_URL: "http://localhost:3001/api", // Backend API URL
  MONGODB_URI: "mongodb://localhost:27017/admin-dashboard", // MongoDB connection string
  JWT_SECRET: "your-jwt-secret-key", // For authentication
  PORT: "3001" // Backend server port
};

export { UserSchema, ApplicationSchema, AnalyticsSchema, ApiEndpoints, EnvironmentVariables };
