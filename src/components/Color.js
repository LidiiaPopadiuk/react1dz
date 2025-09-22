const colours = ["Червоний", "Синій", "Зелений"];

export const ColorsMap = () => {
  return (
    <ul>
      {colours.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
};
