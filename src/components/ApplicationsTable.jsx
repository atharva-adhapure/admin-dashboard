import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ApplicationsTable = ({ applications }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getCreditScoreColor = (score, requiredScore) => {
    if (score >= requiredScore) {
      return 'text-green-600 font-semibold';
    } else if (score >= requiredScore - 50) {
      return 'text-yellow-600 font-semibold';
    } else {
      return 'text-red-600 font-semibold';
    }
  };

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50">
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#198ae6' }}></div>
            <div>
              <CardTitle className="text-xl font-bold text-gray-900">Loan Applications</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Recent applications sorted by submission date (newest first)
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-100">
                <TableHead className="text-gray-700 font-semibold text-xs uppercase tracking-wider">ID</TableHead>
                <TableHead className="text-gray-700 font-semibold text-xs uppercase tracking-wider">Applicant</TableHead>
                <TableHead className="text-gray-700 font-semibold text-xs uppercase tracking-wider">Credit Score</TableHead>
                <TableHead className="text-gray-700 font-semibold text-xs uppercase tracking-wider">Loan Type</TableHead>
                <TableHead className="text-gray-700 font-semibold text-xs uppercase tracking-wider">Required</TableHead>
                <TableHead className="text-gray-700 font-semibold text-xs uppercase tracking-wider">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application, index) => (
                <TableRow 
                  key={application.id} 
                  className="hover:bg-blue-50/50 transition-colors border-gray-50 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell className="font-mono text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-2">
                      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-700">
                        #{application.id.toString().padStart(2, '0')}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {application.name}
                        </div>
                        <div className="text-xs text-gray-500">ID: {application.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className={`text-lg font-bold ${getCreditScoreColor(application.creditScore, application.requiredScore)}`}>
                        {application.creditScore}
                      </span>
                      <div className="flex flex-col">
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              application.creditScore >= application.requiredScore ? 'bg-green-500' :
                              application.creditScore >= application.requiredScore - 50 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${Math.min((application.creditScore / 900) * 100, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-0.5">out of 900</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 rounded-full text-xs font-medium border border-blue-200">
                      {application.loanType}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="text-gray-700 font-medium">
                      <span className="text-sm">{application.requiredScore}</span>
                      <div className="text-xs text-gray-500">minimum</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(application.status)} font-medium px-3 py-1.5 text-xs`}>
                      <div className="flex items-center space-x-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          application.status === 'Approved' ? 'bg-green-600' :
                          application.status === 'Rejected' ? 'bg-red-600' : 'bg-yellow-600'
                        }`}></div>
                        <span>{application.status}</span>
                      </div>
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {applications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
            <p className="text-gray-500 text-lg font-medium">No applications found</p>
            <p className="text-gray-400 text-sm mt-1">Applications will appear here when users submit them</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ApplicationsTable;
