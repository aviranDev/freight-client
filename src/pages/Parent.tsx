import Child from "./Child";

function Parent() {
  console.log("Parent");

  return (
    <div>
      <div>Parent</div>
      <Child />
    </div>
  );
}

export default Parent;
