const colours = ["Червоний", "Синій", "Зелений"];

export const ColorsMap = () => {
  return (
    <>
      <h2>Hello</h2>
      <ul>
        {colours.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </>
  );
};
