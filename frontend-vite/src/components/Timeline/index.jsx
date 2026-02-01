import { Content, Holder } from "./styled";

import { useEffect, useState } from "react";

export default function Timeline({ progress }) {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (progress.status === "Success") {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [progress.status]);

  return (
    <Content className={visibility ? "show" : "hide"}>
      <Holder>
        <div className="post-wrapper">
          <div className="section-wrapper">
            <div className="Articles left">
              <h1>DESIGN RESPONSÍVEL</h1>
              <p>
                Design responsivo e mobile-first, com foco em usabilidade,
                adaptação progressiva de layout e componentes reutilizáveis em
                React.
              </p>
            </div>
            <div className="Articles right">TESTE</div>
            <div className="Articles left">TESTE</div>
            <div className="Articles right">TESTE</div>
            <div className="Articles left">TESTE</div>
            <div className="Articles right">TESTE</div>

            <div className="gap-timeline"></div>
          </div>
        </div>
      </Holder>
    </Content>
  );
}
