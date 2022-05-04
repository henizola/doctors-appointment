/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from "shards-react";
import PageTitle from "../components/common/PageTitle";

const DocAppointments = () => {
  const [filter, setFilter] = useState(false);
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Appointments"
          subtitle="Doctors"
          className="text-sm-left"
        />
      </Row>
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <Button
                outline={!filter}
                size="sm"
                theme="primary"
                className="mb-2 mr-1"
                onClick={() => setFilter(true)}
              >
                Upcoming
              </Button>
              <Button
                size="sm"
                outline={filter}
                theme="primary"
                className="mb-2 mr-1"
                onClick={() => setFilter(false)}
              >
                Today
              </Button>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      First Name
                    </th>
                    <th scope="col" className="border-0">
                      Last Name
                    </th>
                    <th scope="col" className="border-0">
                      Gender
                    </th>
                    <th scope="col" className="border-0">
                      Pourpose
                    </th>
                    <th scope="col" className="border-0">
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ali</td>
                    <td>Kerry</td>
                    <td>Male</td>
                    <td>General</td>
                    <td>+251-916154635</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Clark</td>
                    <td>Angela</td>
                    <td>Female</td>
                    <td>General</td>
                    <td>+251 964527532</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jerry</td>
                    <td>Nathan</td>
                    <td>Male</td>
                    <td>General</td>
                    <td>+251 964527532</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Colt</td>
                    <td>Angela</td>
                    <td>Male</td>
                    <td>General</td>
                    <td>+251 964527532</td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DocAppointments;
