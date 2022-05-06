import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  DatePicker,
  Row,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";

const DoctorAvailablity = () => {
  const [date, setDate] = useState(new Date());
  const handleStartDateChange = (value) => {
    setDate(new Date(value));
  };
  return (
    <Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Availability"
          subtitle="Doctors"
          className="text-sm-left"
        />
      </Row>

      <Row>
        {/* Editor */}
        <Col lg="12" md="12">
          <Card small className="mb-3 mt-4 ">
            <Row className="card-titles">
              <Row lg="12 " className="ml-5">
                <Col md="1.5" className="ml-3">
                  <h3 style={{ paddingTop: "7px" }}>Date</h3>
                </Col>
                <Col md="6" className="form-group">
                  <DatePicker
                    size="lg"
                    selected={date}
                    onChange={handleStartDateChange}
                    placeholderText=" Date"
                    dropdownMode="select"
                    className="text-center"
                    minDate={new Date()}
                  />
                </Col>
              </Row>
            </Row>
            <hr />
            <Row className="time-slot-container">
              <Button
                theme="primary"
                outline
                className="time-slots time-slots mt-3"
              >
                8:00 - 10:30
              </Button>
              <Button theme="primary" className="time-slots time-slots mt-3">
                11:00 - 12:30{" "}
                <i
                  class="material-icons check_circle_outline"
                  style={{ fontSize: "15px", marginLeft: "10px" }}
                >
                  &#xe92d;
                </i>
              </Button>
              <Button theme="primary" className="time-slots time-slots mt-3">
                2:00 - 4:30{" "}
                <i
                  class="material-icons check_circle_outline"
                  style={{ fontSize: "15px", marginLeft: "10px" }}
                >
                  &#xe92d;
                </i>
              </Button>
              <Button
                theme="primary"
                outline
                className="time-slots time-slots mt-3"
              >
                5:00 - 6:30
              </Button>
              <Button theme="primary" className="time-slots time-slots mt-3">
                8:00 - 10:30{" "}
                <i
                  class="material-icons check_circle_outline"
                  style={{ fontSize: "15px", marginLeft: "10px" }}
                >
                  &#xe92d;
                </i>
              </Button>
              <Button
                theme="primary"
                className="time-slots time-slots mt-3"
                outline
              >
                11:00 - 12:30
              </Button>
              <Button
                outline
                theme="primary"
                className="time-slots time-slots mt-3"
              >
                2:00 - 4:30{" "}
              </Button>
              <Button theme="primary" className="time-slots time-slots mt-3">
                5:00 - 6:30{" "}
                <i
                  class="material-icons check_circle_outline"
                  style={{ fontSize: "15px", marginLeft: "10px" }}
                >
                  &#xe92d;
                </i>
              </Button>
            </Row>
          </Card>
        </Col>

        {/* Sidebar Widgets */}
      </Row>
    </Container>
  );
};

export default DoctorAvailablity;
