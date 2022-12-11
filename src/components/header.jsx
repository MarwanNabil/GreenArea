import Text from "./text";

const Header = (props) => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="px-6 py-1">
        <Text className="text-4xl font-bold">{props.children}</Text>
      </div>
      <div className="w-full bg-green-500 h-1" />
    </div>
  );
};

export default Header;
