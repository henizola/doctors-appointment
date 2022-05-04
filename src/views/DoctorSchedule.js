import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  FormSelect,
  CardHeader,
  Button,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";

const DoctorSchedule = () => {
  const [filter, setFilter] = useState("Monday");
  return (
    <Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Timing Duration"
          subtitle="Doctors"
          className="text-sm-left"
        />
      </Row>

      <Row>
        {/* Editor */}
        <Col lg="12" md="12">
          <Card small className="mb-3 " p={30}>
            <CardBody>
              <CardHeader className="border-bottom">
                <Row lg="12">
                  <Col lg="3">
                    <h5>Timing slot duration</h5>
                  </Col>
                  <Col md="3" className="form-group">
                    <FormSelect id="feInputState">
                      <option>20 Min</option>
                      <option>10 Min</option>
                      <option>30 Min</option>
                      <option>40 Min</option>
                    </FormSelect>
                  </Col>
                </Row>
              </CardHeader>
              <Card small className="mb-3 mt-4 ">
                <Row
                  style={{
                    padding: "30px 50px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                    gridGap: "20px",
                    height: "85px",
                    paddingBottom: "0",
                  }}
                >
                  <Button
                    theme="primary"
                    className="mb-2 mr-1 w100"
                    outline={filter === "Monday"}
                    onClick={() => setFilter("Monday")}
                  >
                    Monday
                  </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                    outline={filter === "Tusday"}
                    onClick={() => setFilter("Tusday")}
                  >
                    Tusday
                  </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                    outline={filter === "Wedensday"}
                    onClick={() => setFilter("Wedensday")}
                  >
                    Wedensday
                  </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                    outline={filter === "Thursday"}
                    onClick={() => setFilter("Thursday")}
                  >
                    Thursday
                  </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                    outline={filter === "  Sararday"}
                    onClick={() => setFilter("  Sararday")}
                  >
                    Sararday
                  </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                    outline={filter === "  Sunday"}
                    onClick={() => setFilter("  Sunday")}
                  >
                    Sunday
                  </Button>
                </Row>
                <hr />
                <Row
                  style={{
                    padding: "10px 30px",
                  }}
                >
                  <Col>
                    <h4>Time Slots</h4>
                  </Col>
                  <Col align="right">
                    <Button theme="warning" outline>
                      <i class="material-icons credit_card">&#xe870;</i> Edit
                    </Button>
                  </Col>
                </Row>
              </Card>
            </CardBody>
          </Card>
        </Col>

        {/* Sidebar Widgets */}
      </Row>
    </Container>
  );
};

export default DoctorSchedule;
