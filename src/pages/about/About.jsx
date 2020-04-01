import React, { Component } from "react";
import "./About.css";
import {
  Container,
  TabContainer,
  Row,
  Col,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "react-bootstrap";
import { Nav } from "react-bootstrap";
import tab1_img from "../../media/office.jpg";
import tab2_img from "../../media/team.jpg";
import tab3_img from "../../media/capabilities.jpg";
import tab4_img1 from "../../media/car1.jpg";
import tab4_img2 from "../../media/car2.jpg";
import tab4_img3 from "../../media/car3.jpg";
import tab4_img4 from "../../media/car4.jpg";
import tab4_img5 from "../../media/car5.jpg";
import tab4_img6 from "../../media/car6.jpg";
import tab4_img7 from "../../media/car7.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <TabContainer id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mt-2">
                  <NavItem>
                    <NavLink eventKey="first">Оффис</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="second">Команда</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="third">Возможности</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="fourth">Галерея</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={9}>
                <TabContent className="mt-3">
                  <TabPane eventKey="first">
                    <img src={tab1_img} alt="office" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Est impedit sit dignissimos! Porro, officia! Nemo
                      perspiciatis omnis, eveniet vero recusandae vel
                      accusantium culpa quidem, nisi assumenda sequi! Enim,
                      perspiciatis error.
                    </p>
                  </TabPane>
                  <TabPane eventKey="second">
                    <img src={tab2_img} alt="team" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nemo doloribus, non obcaecati, facilis aliquid esse iure
                      inventore asperiores eum distinctio eius omnis vero
                      consequatur dolores.
                    </p>
                  </TabPane>
                  <TabPane eventKey="third">
                    <img src={tab3_img} alt="capabilities" />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eius, aliquid repudiandae? Itaque nihil neque tenetur
                      optio sequi accusantium, sunt odit non? Delectus eum
                      consequatur voluptas quibusdam architecto perspiciatis.
                    </p>
                  </TabPane>
                  <TabPane eventKey="fourth">
                    <img className="mb-2" src={tab4_img1} alt="gallery1" />
                    <img className="mb-2" src={tab4_img2} alt="gallery2" />
                    <img className="mb-2" src={tab4_img3} alt="gallery3" />
                    <img className="mb-2" src={tab4_img4} alt="gallery4" />
                    <img className="mb-2" src={tab4_img5} alt="gallery5" />
                    <img className="mb-2" src={tab4_img6} alt="gallery6" />
                    <img className="mb-2" src={tab4_img7} alt="gallery7" />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vel debitis error quisquam inventore, omnis consequuntur!
                    </p>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </div>
    );
  }
}

export default About;
