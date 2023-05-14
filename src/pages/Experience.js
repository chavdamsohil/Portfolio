import React from "react";
import "../styles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <h2>My Educational and Professional Experience</h2>
      <VerticalTimeline lineColor="#222831">
        <VerticalTimelineElement
          className="vertical-timeliine-element--education"
          iconStyle={{ background: "#222831", color: "#EEEEEE" }}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <h3 className="vertical-timeline-element-title">
            M H Shroff college of commerce-Mumbai
          </h3>
          <p className="vertical-timeline-element-subtitle">
            Bachelor of Commerce
          </p>
          <p> 2014-2015</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeliine-element--work"
          iconStyle={{ background: "#222831", color: "#EEEEEE" }}
          icon={<WorkIcon></WorkIcon>}
        >
          <h3 className="vertical-timeline-element-title">Pooja Sanitation</h3>
          <p>Project Manager </p>
          <p>2015-2023</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeliine-element--education"
          iconStyle={{ background: "#222831", color: "#EEEEEE" }}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <h3 className="vertical-timeline-element-title">
            Web development (self -study)
          </h3>
          <p className="vertical-timeline-element-subtitle">
            Udemy,Youtube, etc
          </p>
          <p> 2022-2023</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
