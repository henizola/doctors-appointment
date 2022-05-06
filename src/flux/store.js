import { EventEmitter } from "events";
import docNavItems from "../data/doc-navs";
import Constants from "./constants";
import Dispatcher from "./dispatcher";

import adminNavItems from "../data/admin-navs";

let _store = {
  menuVisible: false,
  docNavItems: docNavItems(),
  adminNavItems: adminNavItems(),
};

class Store extends EventEmitter {
  constructor() {
    super();

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getDoctorNavItems() {
    return _store.docNavItems;
  }
  getAdminNavItems() {
    return _store.adminNavItems;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();
