import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

import { useSelector } from "react-redux";
import UserProfile from "../components/user-profile-lite/UserProfile";
import UserAccountForm from "../components/user-profile-lite/UserAccountForm";

const CreateProfile = () => {
  const user = useSelector((state) => state.user[0]);

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Create Profile"
          subtitle="Admin"
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
      <Row>
        <Col lg="4">
          <UserProfile userDetails={user} />
        </Col>
        <Col lg="8">
          <UserAccountForm />
        </Col>
      </Row>
    </Container>
  );
};
export default CreateProfile;
