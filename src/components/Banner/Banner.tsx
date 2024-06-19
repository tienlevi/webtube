interface Props {
  image: any;
  className?: string;
}

function Banner({ image, className }: Props) {
  return (
    <div className="block">
      <img src={image} alt="" className={`w-full h-full ${className}`} />
    </div>
  );
}

export default Banner;
