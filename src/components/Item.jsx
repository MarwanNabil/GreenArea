import Text from "./text";

const Item = (props) => {
  return (
    <div
      className="bg-green-500 w-52 h-fit p-4 rounded-lg border-green-700 border-2 shadow-2xl hover:shadow-lg"
      {...props}
    >
      <Text className="text-xl font-bold ">{props.children}</Text>
    </div>
  );
};

export default Item;
