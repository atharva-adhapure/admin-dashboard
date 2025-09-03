// Mock loan applications data with enhanced professional details
export const applications = [
  { id: 1, name: "Alice Williams", creditScore: 720, loanType: "Home Loan", requiredScore: 700, status: "Approved", appliedDate: "2024-09-01", amount: "$450,000" },
  { id: 2, name: "Liam Smith", creditScore: 640, loanType: "Car Loan", requiredScore: 650, status: "Rejected", appliedDate: "2024-09-02", amount: "$35,000" },
  { id: 3, name: "Emma Johnson", creditScore: 690, loanType: "Personal Loan", requiredScore: 680, status: "Approved", appliedDate: "2024-09-02", amount: "$25,000" },
  { id: 4, name: "Noah Brown", creditScore: 560, loanType: "Education Loan", requiredScore: 600, status: "Rejected", appliedDate: "2024-09-01", amount: "$75,000" },
  { id: 5, name: "Olivia Davis", creditScore: 780, loanType: "Home Loan", requiredScore: 700, status: "Approved", appliedDate: "2024-08-30", amount: "$620,000" },
  { id: 6, name: "William Wilson", creditScore: 620, loanType: "Personal Loan", requiredScore: 650, status: "Under Scrutiny", appliedDate: "2024-09-03", amount: "$18,000" },
  { id: 7, name: "Sophia Moore", creditScore: 740, loanType: "Car Loan", requiredScore: 700, status: "Approved", appliedDate: "2024-08-29", amount: "$42,000" },
  { id: 8, name: "James Taylor", creditScore: 580, loanType: "Education Loan", requiredScore: 600, status: "Under Scrutiny", appliedDate: "2024-08-28", amount: "$85,000" },
  { id: 9, name: "Isabella Anderson", creditScore: 710, loanType: "Home Loan", requiredScore: 700, status: "Approved", appliedDate: "2024-08-27", amount: "$380,000" },
  { id: 10, name: "Benjamin Thomas", creditScore: 820, loanType: "Business Loan", requiredScore: 750, status: "Under Scrutiny", appliedDate: "2024-08-26", amount: "$150,000" }
];

// Function to add new application (for future DB integration)
export const addApplication = (newApplication) => {
  const newId = Math.max(...applications.map(app => app.id)) + 1;
  const applicationWithId = { 
    ...newApplication, 
    id: newId, 
    appliedDate: new Date().toISOString().split('T')[0] 
  };
  applications.unshift(applicationWithId); // Add to top
  return applicationWithId;
};
