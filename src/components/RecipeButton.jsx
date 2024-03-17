const RecipeButton = (menuItems) => {
  return (
    <div>
      {menuItems.map((val) => (
        <button>{val}</button>
      ))}
    </div>
  );
};

export default RecipeButton;
