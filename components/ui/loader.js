import classes from './loader.module.css';

export const LOADER_TYPE_CLASSES = {
  small: 'small',
  large: 'large',
};

const getLoaderClasses = (type) => {
  return `${classes.loader} ${classes[type]}`;
};

export default function Loader({ type = LOADER_TYPE_CLASSES.small }) {
  const customLoader = getLoaderClasses(type);

  return <div className={customLoader}></div>;
}
