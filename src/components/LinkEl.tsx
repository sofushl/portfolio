type LinkElProps = {
  text: string;
  link: string;
};

function LinkEl({ text, link }: LinkElProps) {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
}

export default LinkEl;
