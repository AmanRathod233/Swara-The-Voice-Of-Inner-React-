import React from "react";
import { Link } from "react-router-dom";

// Reusable Blog Card Component
function BlogCard({ image, title, link, content }) {
  
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 blog_section_spacing">
        <div className="blog_box resource_blog_box">
          <a href={link}>
            <img src={image} alt="blog_img" className="w-100" />
          </a>
          <h4 className="blog_heading">
            <a href={link}>{title}</a>
          </h4>
          <p className="blog_content m-0">
            {content.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <a href={link} className="blog_btn">READ MORE</a>
        </div>
      </div>
    );
  }

  export default BlogCard;