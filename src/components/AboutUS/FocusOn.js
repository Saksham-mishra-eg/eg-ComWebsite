// FocusOn.js

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./FocusOn.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function FocusOn() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
    // nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
    // arrows: true,
  };

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  return (
    <div className={styles.FocusOnBg}>
      <Container>
        <Row>
          <Slider {...settings}>
            <div>
            <Row>
                <Col>
                  <div className={styles.FocuOnd}>
                    <h6>Our core values</h6>
                    <h2>Focus on impact.</h2>
                    <p>Solve the most important problems and identify them through data.</p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.foncImg}>
                    <img src="focuson.png" alt="focuson" />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              
              <Row>
                <Col>
                  <div className={styles.FocuOnd}>
                    <h6>Our core values</h6>
                    <h2>Focus on impact.</h2>
                    <p>Solve the most important problems and identify them through data.</p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.foncImg}>
                    <img src="focuson.png" alt="focuson" />
                  </div>
                </Col>
              </Row>
            </div>

          </Slider>
        </Row>


      </Container>
    </div >
  );
}

export default FocusOn;
