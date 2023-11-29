import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    margin: 0 auto;
  }
  .slick-slide div {
    cursor: pointer;
  }
  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }
  .slick-track {
    overflow-x: hidden;
  }
`;
