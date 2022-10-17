function CustomLink(props) {
  return (
    <a href={props.href} target={props.target} className={props.className}>
      {props.txt}
    </a>
  );
}

export default CustomLink;
