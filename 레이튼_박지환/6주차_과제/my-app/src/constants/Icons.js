// BY HERO_ICONS
export const CartIcon = () => {
  const cartIconStyle = {
    height: "34px",
    width: "34px",
    color: "black",
    marginLeft: "90%",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={cartIconStyle}
      className="h-6 w-6 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
};

export const ChevronDown = () => {
  const downIconStyle = {
    height: "24px",
    width: "24px",
    color: "black",
    // marginLeft: "90%",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={downIconStyle}
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export const ChevronUp = () => {
  const upIconStyle = {
    height: "24px",
    width: "24px",
    color: "black",
    position: "relative",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={upIconStyle}
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
};
