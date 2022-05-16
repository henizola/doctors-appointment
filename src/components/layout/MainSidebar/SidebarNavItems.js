import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems:
        this.props.user && this.props.user.role === "Doctor"
          ? Store.getDoctorNavItems()
          : Store.getAdminNavItems(),
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
    console.log(this.props.user.role);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems:
        this.props.user.role === "Doctor"
          ? Store.getDoctorNavItems()
          : Store.getAdminNavItems(),
    });
  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    );
  }
}

export default SidebarNavItems;
