import React from "react";
import "../../src/assets/css/style.css";
import Header from "../component/header";
import Footer from "../component/footer";
import BlogCard from "../component/BlogCard";



// Mock blog post data
const blogPosts = [
  {
    image: "public/assets/images/blog1.webp",
    title: "Can Anxiety Disorders be Cured Permanently?",
    link: "/SingleBlog1",
    content: `Anxiety is a common mental health conditions that affect millions of people globally. The feeling of anxiety interferes with almost everything you do. People often wonder if can anxiety be cured permanently. With the right treatment and care.`,
},
{
    image: "public/assets/Images/blog2.webp",
    title: "What is OCD & What are the 7 Types of OCD?",
    link: "/SingleBlog2",
    content: `OCD is often associated with being obsessed with cleanliness. There are many false interpretations of OCD or Obsessive Compulsive Disorder floating on social media, which are far from the truth. So, what is OCD? What is OCD full form?`,
},
{
    image: "public/assets/Images/blog3.webp",
    title: "What are the Causes of Overthinking? How to Stop Overthinking?",
    link: "/SingleBlog3",
    content: `Do you find yourself thinking about things you could say? Overanalysing every decision? Replaying situations? And about all the ifs and buts? Overthinking is a trap that just pulls you into a vicious loop of negativity, stress and anxiety.`,
},

];

function Resource() {
  return (
    <>
      <Header />

      <section className="common_hero_section resource_hero_section" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_hero_section_heading">
                <h1>resource</h1>
                <p className="common_hero_section_subheading">
                  <a href="index.html">Home</a>{" "}
                  <span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </span>{" "}
                  Resource
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_section resource_blog_section">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                title={post.title}
                link={post.link}
                content={post.content}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Resource;
