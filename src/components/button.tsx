interface Props {
    children: string;
    color?: string;
    onclick: () => void;
}

const Button = ({children, onclick, color ='primary'}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onclick}>{children}</button>
  );
}

export default Button;
