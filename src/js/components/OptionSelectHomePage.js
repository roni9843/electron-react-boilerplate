import React from "react";
import styled from "styled-components";

export default function OptionSelectHomePage({ setOptionSelect }) {
  return (
    <OptionSection>
      <div className="container pb-5">
        <div className="d-flex justify-content-center pt-5">
          <h3>Bangladesh International School</h3>
        </div>
        <div className="row mt-5 ">
          <div className="mt-5 col-6 d-flex justify-content-center align-items-center">
            <button
              onClick={() => setOptionSelect("show")}
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              class="button-52"
              role="button"
            >
              Show Data
            </button>
          </div>
          <div className="mt-5 col-6 d-flex justify-content-center align-items-center">
            <button
              onClick={() => setOptionSelect("insert")}
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              class="button-53"
              role="button"
            >
              Insert Data
            </button>
          </div>
        </div>
      </div>
    </OptionSection>
  );
}

const OptionSection = styled.div`
  /* CSS */
  .button-52,
  .button-53 {
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-52:after,
  .button-53:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  .button-52:after {
    background-color: #ffe54c;
  }

  .button-53:after {
    background-color: blue;
  }

  .button-52:hover:after,
  .button-53:hover:after {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 768px) {
    .button-52,
    .button-53 {
      padding: 13px 50px 13px;
    }
  }
`;
