import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="container mt-5 pt-5">
          <h3 className="pt-5">About </h3>
          <hr />
          <div className="row flex-column-reverse flex-lg-row mx-auto ">
            <div className="col-lg-6">
              <h4>
                This Website Create By{" "}
                <NavLink
                  className="website_link"
                  target="_blank"
                  href="https://webdev531.000webhostapp.com/"
                >
                  Yash Borda
                </NavLink>
              </h4>
              <p> Hello everyone!</p>
              <p>
                🎉 Exciting news! I've just released an of rymo shopping
                website, packed with new features and improvements. Here are
                some of the highlights:
              </p>
              <p>📱 Version - 1.0</p>
              <p>✨ What's new - Login with Google, Phone Number, Facebook</p>
              <p>
                💻 Technology & framework: Sass-less, Vue 3 JS, CSS3, Firebase
                (Authentication).
              </p>
              <p>
                📒 Note-taking feature: You can easily take purchase product
                functionality after that login or signing up.
              </p>
              <p>🔥 UI Credit: "Tech2 etc" (YouTube channel).</p>
              <p>
                ⚡ Performance improvements: The Website now loads faster, and
                there's less lag when switching between screens.
              </p>
              <p>
                I'm working to improve the web application and provide the best
                user experience possible. I hope you enjoy using these features
                and improvements as much as I've enjoyed developing them.
              </p>
              <p>
                I have Good understanding of HTML5 and CSS3. Good Knowledge with
                the JavaScript language and its modern ES6+ syntax and features.
                Experience with Vue.js framework and its core principles such as
                components, reactivity, and the virtual DOM. Familiarity with
                Vuex, Vue Router.
              </p>
              <p>
                I am highly skilled in HTML, CSS, and JavaScript as I have
                handsome experience in them. Still, I am always eager to learn
                new and make my skill sharper whenever I get any chance.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="developer_img pb-3">
                <NavLink
                  target="_blank"
                  href="https://www.linkedin.com/in/yash-borda-8abb9124b/"
                >
                  <img
                    className="img-fluid"
                    src={require("../assets/img/yash_borda.jpg")}
                    alt="yash borda"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
