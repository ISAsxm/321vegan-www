import Navbar from "@/app/ui/components/Navbar";
import Footer from "@/app/ui/components/Footer";
import ScrollToTop from "@/app/ui/components/ScrollToTop";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
