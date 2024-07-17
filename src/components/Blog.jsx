import React from "react";

const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container mt-5 pt-5">
          <h3 className=" pt-5">Blogs</h3>
          <hr />
          <div className="row">
            <div className="col-md-6 col-12">
              <img
                src={require("../assets/img/blog/1.jpg")}
                className="img-fluid w-100"
                alt="1"
              />
              <h4 className="text-center p-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit Quos
                omnis tempora.
              </h4>
            </div>
            <div className="col-md-6 col-12">
              <img
                src={require("../assets/img/blog/2.jpg")}
                className="img-fluid w-100"
                alt="2"
              />
              <h4 className="text-center p-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit Quos
                omnis tempora.
              </h4>
            </div>
            <div className="col-md-6 col-12">
              <img
                src={require("../assets/img/blog/3.jpg")}
                className="img-fluid w-100"
                alt="3"
              />
              <h4 className="text-center p-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit Quos
                omnis tempora.
              </h4>
            </div>
            <div className="col-md-6 col-12">
              <img
                src={require("../assets/img/blog/4.jpg")}
                className="img-fluid w-100"
                alt="4"
              />
              <h4 className="text-center p-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit Quos
                omnis tempora.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
