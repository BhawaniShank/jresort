import HorizontalScroll from "./HorizontalScroll";

const logos = [
  "https://framerusercontent.com/images/GxEjqBJwBqszrAT7J3yxzd8JNvY.png",
  "https://framerusercontent.com/images/C4hJq64I5hgvNm4gCOoGcDHvwhk.png",
  "https://framerusercontent.com/images/vObQP9CoD4bZz7StLm9YcIqua4.png",
  "https://framerusercontent.com/images/Ilr3bxmQOETtoVodcxWBbTmfg.png",
  "https://framerusercontent.com/images/dWMDfWkORDAo3Tzpjnt7GQyOmh4.png",
  "https://framerusercontent.com/images/x2Zm6zi427C3aYm224pjFo5WA.png",
  "https://framerusercontent.com/images/Kpaei7xvI0Gsrl7QWvqr88dc7OE.png",
  "https://framerusercontent.com/images/y4W3Xc5nuT6rP4MUkNIGkgVH0Y.png",
  "https://framerusercontent.com/images/1c1kbaA66uWPLlBzNA5QO7te0jQ.png",
  "https://framerusercontent.com/images/Y3KN7wnOGUtFAq9aQWmPIKxJk.png",
  "https://framerusercontent.com/images/DaICki1qSQnwmkpLsl3KuKS7eg.png",
  "https://framerusercontent.com/images/7fKLZC1zXtfPaUE5zaqYJWkIkUc.png",
  "https://framerusercontent.com/images/aFO8PmSrDButYhI8cb5WRNGitQ.png",
  "https://framerusercontent.com/images/5MawuwWfqVlf62PdluvVangBqk.png",
  "https://framerusercontent.com/images/loQFVf8midy8jXbZfBVgQJaH27o.png",
];

function LogoSlider() {
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <HorizontalScroll logos={logos} />
    </div>
  );
}

export default LogoSlider;