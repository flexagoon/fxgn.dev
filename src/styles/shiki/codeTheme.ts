export default  {
  settings: [
    {
      settings: {
        background: "#ffffff",
        foreground: "#000000",
      },
    },
    {
      scope: ["keyword.control", "keyword.other"],
      settings: {
        fontStyle: "underline bold",
      },
    },
    {
      scope: ["constant.language"],
      settings: {
        fontStyle: "underline italic",
      },
    },
    {
      scope: "support.function",
      settings: {
        fontStyle: "bold italic",
      },
    },
    {
      scope: "string",
      settings: {
        foreground: "#666666",
        fontStyle: "italic",
      },
    },
    {
      scope: ["comment"],
      settings: {
        foreground: "#888888",
        fontStyle: "italic",
      },
    },
  ],
};
