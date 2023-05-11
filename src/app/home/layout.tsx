import Navbar from "@/components/ui/Navbar/Navbar";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen">
      <Navbar />
      <div className="pl-12 h-full">{children}</div>
    </div>
  );
}
