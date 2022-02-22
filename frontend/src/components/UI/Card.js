import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  //prop.children will always be the content between opening/closing Card tag
  return <div className={classes}>{props.children}</div>;
};

export default Card;
