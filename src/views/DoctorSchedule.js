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
          <Card small className="mb-3 mt-4 ">
            <Row
              style={{
                padding: "30px 50px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                gridGap: "20px",
                height: "85px",
                paddingBottom: "0",
              }}
              className="desktop"
            >
              <Button
                theme="primary"
                className="mb-2 mr-1  w100"
                outline={filter !== "Monday"}
                onClick={() => setFilter("Monday")}
              >
                Monday
              </Button>
              <Button
                theme="primary"
                className="mb-2 mr-1 "
                outline={filter !== "Tusday"}
                onClick={() => setFilter("Tusday")}
              >
                Tusday
              </Button>
              <Button
                theme="primary"
                className="mb-2 mr-1 "
                outline={filter !== "Wedensday"}
                onClick={() => setFilter("Wedensday")}
              >
                Wedensday
              </Button>
              <Button
                theme="primary"
                className="mb-2 mr-1 "
                outline={filter !== "Thursday"}
                onClick={() => setFilter("Thursday")}
              >
                Thursday
              </Button>
              <Button
                theme="primary"
                className="mb-2 mr-1 "
                outline={filter !== "Friday"}
                onClick={() => setFilter("Friday")}
              >
                Friday
              </Button>
              <Button
                theme="primary"
                className="mb-2 mr-1 "
                outline={filter !== "  Sararday"}
                onClick={() => setFilter("  Sararday")}
              >
                Sarurday
              </Button>
              <Button
                theme="primary"
                className="mb-2 mr-1 "
                outline={filter !== "  Sunday"}
                onClick={() => setFilter("  Sunday")}
              >
                Sunday
              </Button>
            </Row>
            <Row
              style={{
                padding: "30px 30px",

                gridGap: "20px",
                height: "85px",
                marginBottom: "30px",
              }}
              className="mobile"
            >
              <Row lg="12">
                <Col lg="4" sm="3">
                  <h5>Day</h5>
                </Col>
                <Col md="8" sm="9" className="form-group">
                  <FormSelect id="Days">
                    <option>Monday</option>
                    <option>Tusday</option>
                    <option>Wedensday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Sarurday</option>
                    <option>Sunday</option>
                  </FormSelect>
                </Col>
              </Row>
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
            </Row>
            <Row className="time-slot-container">
              <Button theme="primary" className="mb-2 mr-1  time-slots">
                8:00 - 10:30
              </Button>
              <Button theme="primary" className="mb-2 mr-1 time-slots">
                11:00 - 12:30
              </Button>
              <Button theme="primary" className="mb-2 mr-1 time-slots">
                2:00 - 4:30
              </Button>
              <Button theme="primary" className="mb-2 mr-1 time-slots">
                5:00 - 6:30
              </Button>
              <Button theme="primary" className="mb-2 mr-1 time-slots">
                8:00 - 10:30
              </Button>
              <Button theme="primary" className="mb-2 mr-1 time-slots">
                11:00 - 12:30
              </Button>
              <Button theme="primary" className="mb-2 mr-1 time-slots">
                2:00 - 4:30
              </Button>
              <Button theme="primary" className="mb-2 mr-1 time-slots">
                5:00 - 6:30
              </Button>
            </Row>
          </Card>
        </Col>

        {/* Sidebar Widgets */}
      </Row>
    </Container>
  );
};

export default DoctorSchedule;
