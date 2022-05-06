import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "shards-react";
import login from "../assets/images/login.png";
import logo from "../assets/images/logo.png";
import { userSignedIn, userSignedOut } from "../store/user-reducer";

import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("Admin");

  const handleLogin = () => {
    if (email === "Doctor") {
      dispatch(
        userSignedIn({
          role: "Doctor",
          name: "Dr. Jone Doe",
          firstName: "Jone",
          LastName: "Doe",
          email: "jone@gmail.com",
          department: "Cardio",

          avatar: "1.jpg",
          jobTitle: "Cardiologist",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          metaValue:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
        })
      );
      navigate("/doc/overview");
    } else if (email === "Admin") {
      dispatch(
        userSignedIn({
          role: "Admin",
          name: "Admin 1",
          avatar: "2.jpg",
          jobTitle: "Adminstrator",
          performanceReportTitle: "Workload",
          performanceReportValue: 74,
          metaTitle: "Description",
          metaValue:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
        })
      );
      navigate("/admin/overview");
    }
  };

  useEffect(() => {
    dispatch(userSignedOut());
  }, [dispatch]);

  return (
    <div>
      <div className="top-nav">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="two-by-two">
        <img src={login} className="login-vector" alt="home vector" />
        <div className="form">
          <Card className="form-card">
            <Row>
              <h2 style={{ marginBottom: "30px" }}>Login</h2>
            </Row>
            <Row style={{ marginBottom: "20px" }}>
              <InputGroup seamless className="mb-3 height-50">
                <InputGroupAddon type="prepend">
                  <InputGroupText>
                    <i className="material-icons">mail</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </InputGroup>
            </Row>
            <Row style={{ marginBottom: "20px" }}>
              <InputGroup seamless className="mb-3 height-50">
                <InputGroupAddon type="prepend">
                  <InputGroupText>
                    <i className="material-icons">password</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput value="Password" onChange={() => {}} />
              </InputGroup>
            </Row>
            <Row
              style={{
                display: "flex!important",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <span></span>
              <Link style={{ float: "right" }} to="/">
                Forgot Password?
              </Link>
            </Row>
            <Row style={{ margin: "10px auto" }}>
              <button className="login-button" onClick={handleLogin}>
                Login
              </button>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
