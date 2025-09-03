import React from 'react';
import DashboardCard from '../components/DashboardCard';
import AnalyticsCharts from '../components/AnalyticsCharts';
import { users, creditScoreDistribution, loanTypeBreakdown } from '../data/users';
import { applications } from '../data/applications';

const Analytics = () => {
  // Calculate analytics data
  const totalUsers = users.length;
  const totalApplications = applications.length;
  
  // Calculate average credit score
  const avgCreditScore = Math.round(
    users.reduce((sum, user) => sum + user.creditScore, 0) / users.length
  );
  
  // Calculate approval rate
  const approvedApplications = applications.filter(app => app.status === 'Approved').length;
  const approvalRate = Math.round((approvedApplications / totalApplications) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {/* Page Header */}
          <div className="mb-10 text-center">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Analytics Dashboard</h1>
              <p className="mt-2 text-gray-600 text-lg">
                Comprehensive insights into loan applications and credit performance
              </p>
            </div>
            <div className="h-1 w-24 rounded-full mx-auto" style={{ backgroundColor: '#198ae6' }}></div>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <DashboardCard
              title="Total Users"
              value={totalUsers.toLocaleString()}
              subtitle="registered users"
              trend={{ type: 'up', value: '+12%' }}
            />
            <DashboardCard
              title="Average Credit Score"
              value={avgCreditScore}
              subtitle="across all users"
              color="#22c55e"
              trend={{ type: 'up', value: '+2.3%' }}
            />
            <DashboardCard
              title="Total Applications"
              value={totalApplications.toLocaleString()}
              subtitle={`${applications.filter(app => app.status === 'Pending').length} pending review`}
              color="#8b5cf6"
              trend={{ type: 'up', value: '+8.1%' }}
            />
            <DashboardCard
              title="Approval Rate"
              value={`${approvalRate}%`}
              subtitle={`${approvedApplications} approved applications`}
              color="#16a34a"
              trend={{ type: 'up', value: '+5.2%' }}
            />
          </div>

          {/* Analytics Charts */}
          <AnalyticsCharts 
            creditScoreData={creditScoreDistribution}
            loanTypeData={loanTypeBreakdown}
          />
        </div>
      </main>
    </div>
  );
};

export default Analytics;
