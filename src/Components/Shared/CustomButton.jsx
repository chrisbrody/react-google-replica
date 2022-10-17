function CustomButton(props) {
  return (
    <button className={props.className} type={props.type}>
      {props.txt}
    </button>
  );
}

export default CustomButton;
