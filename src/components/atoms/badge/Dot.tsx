interface Props {
  className?: string;
}

export const Dot = ({ className }: Props) => {
  return <div className={`${className} w-3 h-3 rounded-full`}></div>;
};
