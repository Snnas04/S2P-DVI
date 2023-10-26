const isMac = process.platform === "darwin";

module.exports = (mainWin) => {
  let template = [
    {
      label: "HOME",
      id: "go-home",
    },
    {
      label: "ADMINISTRATION",
      submenu: [
        {
          id: "list-elements",
          label: "LIST ELEMENTS",
        },
        { type: "separator" },
        {
          label: "CREATE ELEMENT",
          click: () => {
            console.log("CLICKED Create Element");
          },
        },
      ],
    },
    {
      label: "DASHBOARD",
      id: "dashboard",
    },
    {
      label: "DEV-TOOLS",
      role: "toggleDevTools",
    },
    ...(isMac
      ? [
          {
            label: "EXIT",
            role: "close",
            click: () => {
              console.log("CLICKED EXIT");
            },
          },
        ]
      : [
          {
            label: "EXIT",
            role: "quit",
            click: () => {
              console.log("CLICKED EXIT");
            },
          },
        ]),
  ];

  return template;
};
