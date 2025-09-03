import React, { useState } from 'react';
import ApplicationsTable from '../components/ApplicationsTable';
import DashboardCard from '../components/DashboardCard';
import { applications } from '../data/applications';

const Applications = () => {
  const [applicationsList, setApplicationsList] = useState(applications);

  // Handle status change
  const handleStatusChange = async (applicationId, newStatus) => {
    // Update local state immediately for better UX
    setApplicationsList(prevApps => 
      prevApps.map(app => 
        app.id === applicationId 
          ? { ...app, status: newStatus }
          : app
      )
    );

    // Here you would typically make an API call to update the database
    // Example: await updateApplicationStatus(applicationId, newStatus);
    console.log(`Updated application ${applicationId} to status: ${newStatus}`);
  };

  // Calculate statistics
  const totalApplications = applicationsList.length;
  const approvedCount = applicationsList.filter(app => app.status === 'Approved').length;
  const pendingCount = applicationsList.filter(app => app.status === 'Pending').length;
  const rejectedCount = applicationsList.filter(app => app.status === 'Rejected').length;
  
  const approvalRate = totalApplications > 0 ? Math.round((approvedCount / totalApplications) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {/* Page Header */}
          <div className="mb-10 text-center">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Loan Applications</h1>
              <p className="mt-2 text-gray-600 text-lg">
                Monitor and manage loan applications with real-time status updates
              </p>
            </div>
            <div className="h-1 w-24 rounded-full mx-auto" style={{ backgroundColor: '#8b5cf6' }}></div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <DashboardCard
              title="Total Applications"
              value={totalApplications.toLocaleString()}
              subtitle="lifetime applications"
              color="#198ae6"
              trend={{ type: 'up', value: '+15.3%' }}
            />
            <DashboardCard
              title="Approved"
              value={approvedCount.toLocaleString()}
              subtitle={`${approvalRate}% approval rate`}
              color="#22c55e"
              trend={{ type: 'up', value: '+8.7%' }}
            />
            <DashboardCard
              title="Pending Review"
              value={pendingCount.toLocaleString()}
              subtitle="awaiting decision"
              color="#f59e0b"
              trend={{ type: 'neutral', value: 'stable' }}
            />
            <DashboardCard
              title="Rejected"
              value={rejectedCount.toLocaleString()}
              subtitle="applications declined"
              color="#ef4444"
              trend={{ type: 'down', value: '-3.2%' }}
            />
          </div>

          {/* Applications Table */}
          <ApplicationsTable 
            applications={applicationsList} 
            onStatusChange={handleStatusChange}
          />
        </div>
      </main>
    </div>
  );
};

export default Applications;
