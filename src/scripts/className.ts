type classNameType = {
  (default_class: string, hover_class: string, active_class: string): string;
};

const className: classNameType = (default_class, hover_class, active_class) => {
  hover_class = hover_class
    .split(/\s/)
    .map((className) => "hover:" + className)
    .join(" ");
  active_class = active_class
    .split(/\s/)
    .map((className) => "active:" + className)
    .join(" ");
  return default_class + " " + hover_class + " " + active_class;
};
export default className;
