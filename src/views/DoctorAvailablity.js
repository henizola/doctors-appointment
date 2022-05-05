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
  DatePicker
} from "shards-react";
import PageTitle from "../components/common/PageTitle";

const DoctorAvailablity = () => {
  const [filter, setFilter] = useState("Monday");
  const [date,setDate]=useState(new Date())
  const handleStartDateChange=(value) =>{
 setDate(
     new Date(value) 
    );
  }
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
          <Card small className="mb-3 " p={30}>
            <CardBody>
              <CardHeader className="border-bottom">
                <Row lg="12 " className='ml-5' >
                  <Col md='1.5'><h3>Date</h3></Col>
                  <Col md="3" className="form-group">
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
              </CardHeader>
              <Card small className="mb-3 mt-4 ">
           
              
                <Row
                  style={{
                    padding: "20px 30px",
                    paddingBottom:'0px'
                  }}
                >
                  <Col align="right">
                    <h5>Starting Time : 8:00</h5>
                  </Col>
                </Row>
                <hr />
                <Row
                  style={{
                    padding: "30px 50px",
                  display:'flex',
                  justifyContent:'space-between',
                    height: "fit-content",
                    paddingBottom: "30px",
                    width:'100%',
                  }}
                >
                   <Button
                    theme="primary"
                    outline
                    className="mb-2 mr-1"
                   style={{width:'23%',height:'50px', marginTop:'15px'}}
                  >
                   8:00 - 10:30
                  </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                    style={{width:'23%',height:'50px', marginTop:'15px'}}
                   
                  >
                   11:00 - 12:30  <i class="material-icons check_circle_outline" style={{fontSize:'15px',marginLeft:'10px'}}>&#xe92d;</i>
                  </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                    style={{width:'23%',height:'50px', marginTop:'15px'}}
                   
                  >
                   2:00 - 4:30  <i class="material-icons check_circle_outline" style={{fontSize:'15px',marginLeft:'10px'}}>&#xe92d;</i>
                  </Button>
                  <Button
                    theme="primary"
                    outline
                    className="mb-2 mr-1"
                    style={{width:'23%',height:'50px', marginTop:'15px'}}

                  >
                   
                    5:00 - 6:30
                  </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                   style={{width:'23%',height:'50px', marginTop:'15px'}}
                  >
                   8:00 - 10:30  <i class="material-icons check_circle_outline" style={{fontSize:'15px',marginLeft:'10px'}}>&#xe92d;</i>
                  </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                    style={{width:'23%',height:'50px', marginTop:'15px'}}
                    outline
                  >
                   11:00 - 12:30
                  </Button>
                  <Button
                  outline
                    theme="primary"
                    className="mb-2 mr-1"
                    style={{width:'23%',height:'50px', marginTop:'15px'}}
                   
                  >
                   2:00 - 4:30 </Button>
                  <Button
                    theme="primary"
                    className="mb-2 mr-1"
                    style={{width:'23%',height:'50px', marginTop:'15px'}}

                  >
                    5:00 - 6:30 <i class="material-icons check_circle_outline" style={{fontSize:'15px',marginLeft:'10px'}}>&#xe92d;</i>
                  </Button>
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

export default DoctorAvailablity;
