const func = () => {
  return [
    {
      title: "Dashboard",
      to: "/doc/overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Appointments",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/doc/appointments"
    },
    {
      title: "My Schedules",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/doc/schedules"
    },
    {
      title: "My Availability",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/doc/availablity"
    },
  ];
};
export default func;
