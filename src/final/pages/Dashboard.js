const Dashboard = () => {
  const username = localStorage.getItem("username");
  return (
    <section className="section">
      <h4>Hello, {username}</h4>
    </section>
  );
};
export default Dashboard;
