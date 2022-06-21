function Button(props) {
  const classes = `btn btn-${props.color || "primary"} shadow-none`;
  return (
    <button class={classes} type="button">
      {props.children} 
      
    </button>
  );
}

export default Button;
