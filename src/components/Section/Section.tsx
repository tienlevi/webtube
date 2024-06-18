interface Props {
  className: string;
  children: any;
}

function Section({ className, children }: Props) {
  return (
    <div
      className={`max-w-screen-2xl max-xl:max-w-screen-xl max-lg:max-w-screen-lg max-md:max-w-screen-md mx-auto ${className}`}
    >
      {children}
    </div>
  );
}

export default Section;
