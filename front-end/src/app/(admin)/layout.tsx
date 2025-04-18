export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div>SIDEBAR</div>
      <div>{children}</div>
    </div>
  );
}
