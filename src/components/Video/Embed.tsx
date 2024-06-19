interface Props {
  id: string;
}

function Embed({ id }: Props) {
  return (
    <div className="aspect-video">
      <iframe
        width={"100%"}
        height={"70%"}
        src={`https://www.youtube.com/embed/${id}?si=NNsTScg9FAiZvtLI`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export default Embed;
