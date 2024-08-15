import AdminDashboard from "../components/admindashboard";
const UserManagement = () => {
  return (
    <div className="container mx-auto p-4">
<AdminDashboard />
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <p>Here you can manage voter and candidate accounts, edit details, and respond to feedback.</p>
      {/* Add user management functionality here */}
    </div>
  );
};

export default UserManagement;