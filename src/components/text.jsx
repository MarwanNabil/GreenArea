import classNames from "classnames";

const Text = (props) => {
  const textClasses = classNames("text-green-700", props.className);
  return <div className={textClasses}>{props.children}</div>;
};

export default Text;
