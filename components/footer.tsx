export const Footer = (props: { className?: string }) => {
  return (
    <div
      className={`bg-secondary bg-opacity-10 text-center pt-3 pb-3 ${props.className}`}
    >
      <div className="container">
        <a href="https://twitter.com/JADENgygo" className={`link-dark link`}>
          <i className="bi bi-twitter"></i>
        </a>
      </div>
      <div>一部画像 &copy; Cygames, Inc. / 暁なつめ・三嶋くろね</div>
    </div>
  );
};
