interface Props {
  className?: string;
}

export const LabelIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120">
      <path d="M239.634 0C272.771 0 299.634 26.8629 299.634 60C299.634 93.1371 272.771 120 239.634 120H0V0H239.634ZM239.634 18.7755C216.866 18.7755 198.409 37.2323 198.409 60C198.409 82.7677 216.866 101.224 239.634 101.224C262.401 101.224 280.858 82.7677 280.858 60C280.858 37.2323 262.401 18.7755 239.634 18.7755Z" />

    </svg>
  );
};
