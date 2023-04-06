interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text = "Click Me", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-glow"
    >
      {text}
    </button>
  );
};

export default Button;
