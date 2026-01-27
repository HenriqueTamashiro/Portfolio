import { StyledFooter } from "./styled";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footerContainer">
        <div className="text-container">© 2025 Henrique Tamashiro</div>
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/in/henrique-tamashiro/"
            target="_blank"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/HenriqueTamashiro" target="_blank">
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>
    </StyledFooter>
  );
}
