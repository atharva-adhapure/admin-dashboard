# CIBILVIEW Admin Dashboard - Modular Integration Guide

## 🚀 Overview
This admin dashboard has been designed as a modular component that can be easily integrated into any React application.

## 📦 What's Included
- **AdminDashboard Component**: Main dashboard component for integration
- **Individual Components**: All dashboard components available separately
- **Pages**: Analytics and Applications pages
- **UI Components**: ShadCN-based components
- **Sample Data**: Mock data for development/testing

## 🔧 Integration Options

### Option 1: Full Dashboard Integration
```jsx
// In your main app
import { AdminDashboard } from './path-to-dashboard/src';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<YourLandingPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Option 2: Individual Components
```jsx
// Import specific components
import { 
  DashboardCard, 
  AnalyticsCharts, 
  ApplicationsTable 
} from './path-to-dashboard/src';

function YourPage() {
  return (
    <div>
      <DashboardCard title="Users" value="1,234" />
      <AnalyticsCharts />
    </div>
  );
}
```

### Option 3: Custom Navbar
```jsx
// Use dashboard with custom navigation
import { AdminDashboard, Navbar } from './path-to-dashboard/src';

const customNavItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/reports', label: 'Reports' }
];

function App() {
  return (
    <AdminDashboard 
      navItems={customNavItems}
      brandName="YourBrand"
      logoColor="#your-color"
    />
  );
}
```

## 📋 Required Dependencies
Your main project needs these dependencies:
```json
{
  "react-router-dom": "^7.8.2",
  "recharts": "^3.1.2",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1",
  "@radix-ui/react-avatar": "^1.1.10",
  "@radix-ui/react-slot": "^1.2.3"
}
```

## 🎨 Styling
- **Primary Color**: `#198ae6` (customizable)
- **Framework**: TailwindCSS
- **Components**: ShadCN UI
- **No Style Conflicts**: Dashboard styles are scoped

## 📁 Files to Copy
Copy these folders to your project:
```
/src/
  ├── components/
  │   ├── ui/              # ShadCN components
  │   ├── Navbar.jsx
  │   ├── DashboardCard.jsx
  │   ├── AnalyticsCharts.jsx
  │   └── ApplicationsTable.jsx
  ├── pages/
  │   ├── Analytics.jsx
  │   └── Applications.jsx
  ├── data/
  │   ├── users.js
  │   └── applications.js
  ├── App.jsx              # Contains AdminDashboard component
  └── index.js             # Export file
```

## 🔗 Routing Integration
The dashboard uses React Router. Make sure your main app:
1. Has React Router installed
2. Provides a route for the dashboard
3. Uses proper path matching for nested routes

## 🛠 Customization
- **Colors**: Pass `logoColor` prop to Navbar
- **Brand**: Pass `brandName` prop to Navbar  
- **Navigation**: Pass custom `navItems` array
- **Styling**: Override CSS classes or add custom styles

## ✅ Integration Checklist
- [ ] Install required dependencies
- [ ] Copy dashboard files to your project
- [ ] Set up routing in your main app
- [ ] Import and use AdminDashboard component
- [ ] Test navigation between your app and dashboard
- [ ] Customize colors/branding if needed

## 🔍 Example Integration
See the `/examples` folder for complete integration examples with different React applications.

## 💡 Tips
- Dashboard works standalone or as part of larger app
- All components are self-contained
- No global state dependencies
- Responsive design included
- TypeScript-free (pure JavaScript)
