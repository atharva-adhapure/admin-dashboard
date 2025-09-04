# Admin Dashboard - Database Integration Guide

## 🗄️ **MongoDB Setup & Integration**

This guide will help you connect your React Admin Dashboard to MongoDB for dynamic data management.

## 📋 **Prerequisites**
- MongoDB installed locally or MongoDB Atlas account
- Node.js backend server (Express.js recommended)
- Environment variables configured

## 🏗️ **Database Structure**

### **Collections:**

#### **1. Users Collection**
```javascript
{
  _id: ObjectId,
  id: Number,
  name: String,
  email: String,
  phone: String,
  address: String,
  occupation: String,
  pancardNumber: String,
  annualIncome: String,
  creditScore: Number,
  joinDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### **2. Applications Collection**
```javascript
{
  _id: ObjectId,
  id: Number,
  userId: ObjectId, // Reference to Users collection
  name: String,
  creditScore: Number,
  loanType: String, // "Home Loan", "Car Loan", etc.
  requiredScore: Number,
  status: String, // "Under Scrutiny", "Approved", "Rejected"
  appliedDate: Date,
  amount: String,
  reviewedBy: ObjectId,
  reviewedAt: Date,
  rejectionReason: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 **Backend API Setup**

### **Required Endpoints:**

#### **User Endpoints:**
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

#### **Application Endpoints:**
- `GET /api/applications` - Get all applications
- `GET /api/applications/:id` - Get application by ID
- `POST /api/applications` - Create new application
- `PATCH /api/applications/:id/status` - Update application status
- `GET /api/users/:id/applications` - Get user's applications

#### **Analytics Endpoints:**
- `GET /api/analytics/dashboard` - Get dashboard statistics
- `GET /api/analytics/credit-scores` - Get credit score distribution
- `GET /api/analytics/loan-types` - Get loan type breakdown

## ⚙️ **Environment Configuration**

Create a `.env` file in your project root:

```env
# Frontend Environment Variables
VITE_API_URL=http://localhost:3001/api

# Backend Environment Variables (for your API server)
MONGODB_URI=mongodb://localhost:27017/admin-dashboard
JWT_SECRET=your-secret-key-here
PORT=3001
NODE_ENV=development
```

## 🚀 **Integration Steps**

### **Step 1: Update API Services**
The dashboard already includes service files ready for integration:
- `/src/services/userService.js`
- `/src/services/applicationService.js` 
- `/src/services/analyticsService.js`

### **Step 2: Replace Mock Data**
1. Start your MongoDB database
2. Start your backend API server
3. Update `VITE_API_URL` in `.env`
4. The dashboard will automatically try API first, fallback to mock data

### **Step 3: Remove Mock Data Fallback**
Once your API is working:
1. Remove fallback functions from service files
2. Remove mock data imports
3. Handle errors appropriately

## 📊 **Data Flow**

### **Current Implementation:**
```
Frontend → API Request → Mock Data Fallback → Display
```

### **After MongoDB Integration:**
```
Frontend → API Request → MongoDB → Backend → Response → Display
```

## 🔄 **Real-time Features**

The dashboard includes:
- **Loading States**: Spinners while fetching data
- **Error Handling**: User-friendly error messages
- **Refresh Buttons**: Manual data refresh
- **Optimistic Updates**: Immediate UI updates

## 🎯 **Key Benefits**

✅ **Dynamic Data**: Real-time updates from database
✅ **Scalable**: Handles growing datasets
✅ **Secure**: Proper authentication integration ready
✅ **Fast**: Optimistic updates and caching
✅ **Reliable**: Fallback mechanisms during development

## 🛠️ **Development vs Production**

### **Development Mode:**
- Uses mock data if API unavailable
- Console warnings for missing endpoints
- Graceful degradation

### **Production Mode:**
- Direct API integration only
- Error reporting
- Performance monitoring

## 📝 **Sample API Response Formats**

### **GET /api/users/:id**
```json
{
  "id": 1,
  "name": "Alice Williams",
  "email": "alice.williams@email.com",
  "phone": "+1 (555) 123-4567",
  "address": "123 Main St, Anytown, ST 12345",
  "occupation": "Software Engineer",
  "pancardNumber": "BXER4568VD",
  "annualIncome": "$95,000",
  "creditScore": 720,
  "joinDate": "2023-01-15T00:00:00.000Z"
}
```

### **GET /api/applications**
```json
[
  {
    "id": 1,
    "userId": 1,
    "name": "Alice Williams",
    "creditScore": 720,
    "loanType": "Home Loan",
    "requiredScore": 700,
    "status": "Approved",
    "appliedDate": "2024-09-01T00:00:00.000Z",
    "amount": "$450,000"
  }
]
```

### **PATCH /api/applications/:id/status**
```json
{
  "status": "Approved"
}
```

## 🔐 **Security Considerations**

- Add authentication middleware to API endpoints
- Validate user permissions for data access
- Sanitize user inputs
- Use HTTPS in production
- Implement rate limiting

## 🚨 **Error Handling**

The dashboard handles:
- Network errors
- API timeouts
- Invalid data formats
- Server errors
- Authentication failures

## 🎉 **Ready for Integration!**

Your dashboard is now fully prepared for MongoDB integration. Simply:
1. Set up your backend API with the specified endpoints
2. Configure environment variables
3. Start your servers
4. The dashboard will automatically use live data!

---

**Need Help?** Check the service files for detailed API integration examples!
