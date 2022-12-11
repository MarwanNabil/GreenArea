import Text from "./text";

const Inputform = (props) => {
  return (
    <div className="flex flex-col px-2 gap-y-1">
      <Text className="text-xl font-bold">{props.children}</Text>
      <input
        type={props.type ? props.type : "text"}
        id={props.children}
        name={props.children}
        placeholder={"Enter your " + props.children}
        className="bg-green-500 text-green-700 text-lg px-3 py-2 rounded-xl border-2 border-green-700 "
        onChangeCapture={props.onChangeCapture}
      />
    </div>
  );
};

export default Inputform;
