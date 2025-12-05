import { StyledFooter } from "./styled";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footerContainer">
        <div className="text-container">© 2025 Henrique Tamashiro</div>
        <div className="icon-container">
          <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>
        </div>
      </div>
    </StyledFooter>
  );
}
