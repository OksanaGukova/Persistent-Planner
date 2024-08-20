import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <h1>Welcome to Task Manager</h1>
      <p className={css.introText}>
        Manage your tasks easily and efficiently with our application.
      </p>
    </div>
  );
}
