import './PageTitle.css';

function PageTitle({ title, subtitle }) {
  return (
    <header className="page-title-container">
      <h1 className="page-title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </header>
  );
}

export default PageTitle;