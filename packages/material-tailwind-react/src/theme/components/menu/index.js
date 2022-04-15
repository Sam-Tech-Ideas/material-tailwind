const menu = {
  defaultProps: {
    placement: "bottom-start",
    offset: {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: 0,
    },
    dismiss: {},
    animate: {
      unmount: {
        opacity: 0,
        transformOrigin: "top",
        transform: "scale(0.95)",
      },
      mount: {
        opacity: 1,
        transformOrigin: "top",
        transform: "scale(1)",
      },
    },
    className: "",
  },
  styles: {
    base: {
      bg: "bg-white",
      minWidth: "min-w-[180px]",
      p: "p-3",
      borderRadius: "rounded-md",
      boxShadow: "shadow-lg shadow-blue-grey-50",
      fontFamily: "font-sans",
      fontSize: "text-sm",
      fontWeight: "font-normal",
      color: "text-blue-grey-500",
      overflow: "overflow-auto",
      outline: "focus:outline-none",
    },
  },
};

export default menu;
