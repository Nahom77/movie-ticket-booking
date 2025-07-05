interface Props {
  top: string;
  left: string;
  right: string;
  bottom: string;
}
const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}: Props) => {
  return (
    <div
      style={{ top: top, left: left, right: right, bottom: bottom }}
      className="bg-primary/30 absolute -z-50 aspect-square size-58 rounded-full blur-3xl"
    ></div>
  );
};

export default BlurCircle;
