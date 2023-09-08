import Meta from '../components/Meta';
import navStyles from '../styles/About.module.css';

const about = () => {
  return (
    <div>
      <Meta title="About" />
      <h1>About</h1>
      <p className={navStyles.about}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum magnam
        in deleniti impedit incidunt cupiditate ut voluptatem harum consequuntur
        accusamus!
      </p>
    </div>
  );
};

export default about;
