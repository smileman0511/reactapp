import react from "react";

const QuickMenuCardComponent = ({ title, icon, color, size = "small" }) => (
  <div className={`QuickCard ${size}`} style={{ backgroundColor: color }}>
    <div className="CardIcon">{icon}</div>
    <span className="CardTitle">{title}</span>
  </div>
);

export default QuickMenuCardComponent;