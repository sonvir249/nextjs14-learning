export default function ComplexDashboardLayout({
  children,
  user,
  notification,
  revenue,
}: {
  children: React.ReactNode,
  user: React.ReactNode,
  notification: React.ReactNode,
  revenue: React.ReactNode,
}) {
  return (
    <div>
      <h2>Complex dashboard layout</h2>
      {children}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div style={{display: "flex", flex: 1}}>
          {notification}
        </div>
      </div>
    </div>
  );
}
