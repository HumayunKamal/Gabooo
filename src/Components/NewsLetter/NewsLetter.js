import classes from "./NewsLetter.module.scss";

const NewsLetter = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.newsLetter}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="newsletter">Subscribe to Newsletter:</label>
        <input type="email" id="newsletter" placeholder="Email Address..." />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
