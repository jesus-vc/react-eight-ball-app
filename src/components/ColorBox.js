const ColorBox = ({ color, changeStatus }) => {
  return (
    <div className="BoxCollection-Box" style={{ backgroundColor: color }}>
      {changeStatus}
    </div>
  );
};

export default ColorBox;
