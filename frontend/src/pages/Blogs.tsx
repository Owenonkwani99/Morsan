import Navbar from "../components/Layout/Navbar";
import BlogsContent from "../components/Blogs/Blogs";
import Footer from "../components/Layout/Footer";


const Blogs = () => {
  return (
    <>
      <Navbar />

      <main>
        <BlogsContent />
      </main>

      <Footer />
    </>
  );
};

export default Blogs;