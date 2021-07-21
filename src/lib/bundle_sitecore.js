/* eslint-disable */
import React from "react";

import {
  Image,
  Link,
  Text as Text$1,
} from "@sitecore-jss/sitecore-jss-react";

var style$h = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  fontSize: "0.8em",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  borderRadius: "3px",
  border: "1px solid #666666",
  backgroundColor: "#d9d9d9",
};
const react$j = (props) => {
  return React.createElement(
    "button",
    {
      style: style$h,
      className: props.className,
    },
    React.createElement(Text$1, {
      field: props.field,
    })
  );
};

const style$g = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
};
const react$i = (props) => {
  return React.createElement(
    "div",
    {
      style: style$g,
      className: props.className,
    },
    React.createElement("input", {
      type: "checkbox",
      checked: "true",
    })
  );
};

const react$h = (props) => {
  return React.createElement("div", {
    style: props.style,
  });
};

const style$f = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  fontSize: "larger",
};
const react$g = (props) => {
  return React.createElement("div", {
    className: props.className,
    style: style$f,
  });
};

const style$e = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  fontSize: "larger",
};
const react$f = (props) => {
  return React.createElement(
    "div",
    {
      style: style$e,
      className: props.className,
    },
    React.createElement(Text$1, {
      field: props.field,
      tag: "h2",
    })
  );
};

const style$d = {
  innerStyle: {
    WebkitUserDrag: "none",
  },
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "3px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
};
const react$e = (props) => {
  return React.createElement("div", {
    className: props.className,
    style: style$d,
  });
};

const react$d = (props) => {
  const style = {
    innerStyle: {
      WebkitUserDrag: "none",
    },
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: "3px",
    border: "1px solid #666666",
    backgroundColor: "#d9d9d9",
  };
  return React.createElement(
    "div",
    {
      style: style,
      className: props.className,
    },
    React.createElement(Image, {
      media: props.media,
      style: style.innerStyle,
    })
  );
};

const style$c = {
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  fontSize: "0.8em",
  alignItems: "left",
  paddingLeft: "5px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  alignSelf: "flex-start",
};
const react$c = (props, styles, uid) => {
  return React.createElement(
    "div",
    {
      style: style$c,
      className: props.className,
    },
    React.createElement(Link, {
      field: props.fields,
    })
  );
};

const style$b = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
};
const react$b = (props) => {
  return React.createElement(
    "div",
    {
      className: props.className,
      style: style$b,
    },
    React.createElement("input", {
      type: "radio",
      name: "radio",
    })
  );
};

const style$a = {
  fontSize: "0.8em",
  overflow: "hidden",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  alignItems: "left",
  paddingLeft: "5px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
};
const react$a = (props) => {
  return React.createElement(
    "div",
    {
      style: style$a,
      className: props.className,
    },
    React.createElement(Text$1, {
      field: props.field,
      tag: "span",
    })
  );
};

const style$9 = {
  fontSize: "0.8em",
  alignItems: "left",
  paddingLeft: "5px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
};
const react$9 = (props) => {
  return React.createElement("textarea", {
    className: props.className,
    value: "Text area",
    style: style$9,
  });
};

const style$8 = {
  border: "1px solid rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  fontSize: "0.8em",
  alignItems: "left",
  paddingLeft: "5px",
};
const react$8 = (props) => {
  return React.createElement("input", {
    className: props.className,
    type: "text",
    value: "Text Input",
    style: style$8,
  });
};

const style$7 = {
  innerStyle: {},
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "5px",
  border: "1px solid #666666",
  backgroundColor: "#d9d9d9",
  WebkitUserDrag: "none",
};
const react$7 = (props) => {
  return React.createElement("div", {
    className: props.className,
    style: style$7,
  });
};

const style$6 = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
};
const react$6 = (props) => {
  return React.createElement(
    "div",
    {
      style: style$6,
      className: props.className,
    },
    React.createElement("hr", {
      style: {
        width: "100%",
      },
    })
  );
};

const style$5 = {
  innerStyle: {
    WebkitUserDrag: "none",
  },
  overflow: "hidden",
  borderRadius: "3px",
  border: "1px solid #666666",
  backgroundColor: "#d9d9d9",
};
const react$5 = (props) => {
  return React.createElement(
    "div",
    {
      className: props.className,
      style: style$5,
    },
    " "
  );
};

const style$4 = {
  display: "flex",
  maxHeight: "100%",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  fontSize: "larger",
};
const react$4 = (props) => {
  const bgcolor = "orange";
  const completed = 45;
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };
  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  return React.createElement(
    "div",
    {
      className: props.className,
      style: { ...style$4, containerStyles },
    },
    React.createElement(
      "div",
      {
        style: fillerStyles,
      },
      React.createElement(
        "span",
        {
          style: labelStyles,
        },
        `${completed}%`
      )
    )
  );
};

const style$3 = {
  overflow: "hidden",
  fontSize: "0.8em",
  flexDirection: "column",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "5px",
  WebkitUserDrag: "none",
  alignItems: "left",
  paddingLeft: "3px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
};
const react$3 = (props) => {
  return React.createElement(
    "div",
    {
      style: style$3,
      className: props.className,
    },
    React.createElement(Text$1, {
      field: props.field,
      tag: "p",
    })
  );
};

const style$2 = {
  padding: "0px",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  WebkitUserDrag: "none",
  borderRadius: "3px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
};
const react$2 = (props) => {
  return React.createElement(
    "div",
    {
      style: style$2,
      className: props.className,
    },
    React.createElement("input", {
      style: {
        padding: "0px",
      },
      type: "range",
      min: "1",
      max: "100",
      value: "50",
      class: "slider",
      id: "myRange",
    })
  );
};

const style$1 = {
  alignItems: "center",
  display: "flex",
  borderRadius: "3px",
  border: "1px solid #666666",
  backgroundColor: "#d9d9d9",
};
const react$1 = (props) => {
  return React.createElement(
    "div",
    {
      style: style$1,
      className: props.className,
    },
    React.createElement(
      "select",
      {
        style: {
          ...style$1,
          marginRight: "10px",
          position: "relative",
          left: "-1px",
        },
      },
      React.createElement(
        "option",
        {
          value: "Dropdown",
        },
        "Dropdown"
      )
    ),
    React.createElement(
      "i",
      {
        style: {
          border: "solid #666666",
          width: "5px",
          borderWidth: "0 3 3 0",
          display: "inline-block",
          padding: "3px",
          marginRight: "20px",
          transform: "rotate(45deg)",
          WebkitTransform: "rotate(45deg)",
        },
      },
      "  "
    )
  );
};

const style = {
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  fontSize: "0.8em",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  alignItems: "left",
  paddingLeft: "5px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
};
const react = (props) => {
  return React.createElement(
    "ul",
    {
      style: style,
      className: props.className,
    },
    React.createElement(Text, {
      field: props.field,
      tag: "li",
    })
  );
};

export {
  react as List,
  react$1 as Dropdown,
  react$2 as Slider,
  react$3 as Paragraph,
  react$4 as Progressbar,
  react$5 as Datepicker,
  react$6 as Linebreak,
  react$7 as Video,
  react$8 as Textinput,
  react$9 as Textarea,
  react$a as Label,
  react$b as Radiobutton,
  react$c as Link,
  react$d as Image,
  react$e as Toggle,
  react$f as Header,
  react$g as Rating,
  react$h as Container,
  react$i as Checkbox,
  react$j as Button,
};
