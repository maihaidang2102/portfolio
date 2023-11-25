import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moviePrj from "../../Assets/Projects/moviePrj.png";
import cameraDb from "../../Assets/Projects/cameraDb.png";
import smartCM from "../../Assets/Projects/smartCM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Service </strong>
        </h1>
        <p style={{ color: "white" }}>
        Proficient in ReactJS, Java, Flutter, and Kotlin, I bring a versatile skill set to the realm of application and website development. With a solid foundation and extensive tech knowledge, I am committed to delivering high-quality products, spanning from dynamic websites to highly interactive mobile applications and even Windows platform apps.
        <br /> In each project, my focus extends beyond crafting visually appealing interfaces, I prioritize seamless user experiences and stable performance. My mission goes beyond just creating aesthetically pleasing products, it's about ensuring their efficiency and scalability for the future.
        <br />With practical experience and excellent communication skills, I'm ready to support you from ideation to implementation, from requirements analysis to product optimization. My adaptability to new technologies allows me to continually enhance service quality, providing you with the best-fit solutions aligned with your business goals.
        <br />Let my team and I turn your innovative concepts into vibrant reality. We're here to accompany you on the journey of successful development and growth. Together, we'll create impressive products that truly add value for end-users.
        <br /><span className="purple">"Let's collaborate to make impactful products and deliver genuine user value. Reach out, and let's start building something extraordinary together!"</span>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://ebo.vn/static/uploads/editor/thiet-ke-web-tron-goi.jpeg'}
              isBlog={false}
              title=" Expert Website Design"
              description="Our website design service is tailored to elevate your online presence. We specialize in creating stunning, responsive, and user-centric websites that not only capture attention but also drive engagement. With a keen focus on intuitive navigation and aesthetic appeal, we craft websites that reflect your brand identity and resonate with your audience. Our expertise in technologies like ReactJS, Java, Flutter, and Kotlin ensures that your website is not just visually appealing but also technically robust and adaptable. Let us bring your vision to life in the digital realm, creating a platform that stands out amidst the digital landscape."
              // ghLink="https://github.com/Longchuck/MovieReviewApp_Frontend"
              // demoLink="https://movie-review-app-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://bytesoft.vn/uploads/12/cong-ty-lap-trinh-ung-dung-mobile-app-android-va-ios-uy-tin-bytesoft.gif'}
              isBlog={false}
              title="Mobile App Design Services"
              description="At our core, we specialize in delivering top-tier mobile app design services aimed at providing users with seamless and exceptional experiences. With a meticulous focus on user-friendly interfaces, high interactivity, and adaptable cross-platform compatibility, we are committed to creating reliable and efficient mobile applications.

              Our team boasts extensive knowledge and expertise in utilizing leading-edge technologies such as React Native, Flutter, and Kotlin to craft mobile apps. We prioritize not only aesthetically pleasing designs but also ensure mobility, excellent interactivity, and stable performance.
              
              Let us transform your concepts into vibrant mobile realities, creating sophisticated mobile experiences that captivate users across devices."
              // ghLink="https://github.com/Longchuck/CameraDashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://www.bravo.com.vn/wp-content/uploads/2022/11/windows-11-co-gi-khac-biet-voi-windows-10-2.webp.webp'}
              isBlog={false}
              title="Windows App Design Services"
              description="We specialize in crafting dynamic and innovative Windows applications tailored to meet your specific needs. Our Windows app design services are centered around creating intuitive user interfaces, seamless functionalities, and robust performance.

              Utilizing our expertise in technologies like UWP (Universal Windows Platform), C#, and .NET framework, we ensure that our Windows applications not only resonate with your brand but also offer a seamless user experience across different Windows devices.
              
              Let us bring your vision to life on the Windows platform, providing effective and engaging solutions that cater to your audience."
              // ghLink="https://github.com/Longchuck/SmartContactManager"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
