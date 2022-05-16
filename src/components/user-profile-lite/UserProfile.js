import PropTypes from "prop-types";
import React from "react";
import { Card, CardHeader, ListGroup, ListGroupItem } from "shards-react";
import CustomFileUpload from "../components-overview/CustomFileUpload";

const UserProfile = ({ userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={require(`./../../images/avatars/${userDetails.avatar}`)}
          alt={userDetails.name}
          width="110"
        />
      </div>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">Choose Avatar Photo</strong>
        <CustomFileUpload />
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserProfile.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object,
};

UserProfile.defaultProps = {
  userDetails: {
    name: "Dr. Jone Doe",
    avatar: "3.jpg",
    jobTitle: "Cardiologist",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
  },
};

export default UserProfile;
