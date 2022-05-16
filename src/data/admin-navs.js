const func = () => {
  return [
    {
      title: "Dashboard",
      to: "/admin/overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
    },
    {
      title: "Register Doctor",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/admin/create-profile",
    },
    {
      title: "Edit Regular",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/admin/edit-regular",
    },
    {
      title: "Edit Part Time",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/admin/edit-part-time",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    },
  ];
};

export default func;
