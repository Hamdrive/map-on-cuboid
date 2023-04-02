
interface ButtonProps {
    text: string
    clickHandler: (ref: any) => void
}

const Button = ({ text = "Click Me", clickHandler }: ButtonProps) => {
  return <button onClick={clickHandler} className="btn btn-glow">{text}</button>;
};

export default Button;
