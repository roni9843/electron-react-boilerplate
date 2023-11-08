import React from "react";
import styled from "styled-components";

export default function ShowData() {
  return (
    <ShowDataBack>
      <div className="container">
        <div>
          <button class="button-55" role="button">
            Button 55
          </button>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          perferendis dicta saepe aliquid nulla temporibus maiores consectetur
          nostrum eius placeat earum, autem, error odit. Aliquid, iusto
          repellendus cum esse minus fugiat impedit praesentium quibusdam ullam
          quisquam enim, eum labore. Iusto sint omnis officiis aut dolor id
          reprehenderit nihil necessitatibus animi consectetur, sit corrupti
          error blanditiis deleniti quibusdam ratione perspiciatis nemo
          explicabo temporibus sunt cumque beatae non recusandae. Soluta,
          numquam eveniet quae nostrum iure aliquam tenetur? Eum tempore iusto,
          molestias velit, esse repudiandae dolore excepturi incidunt nam
          consectetur voluptatum eius hic in iste repellat voluptatibus fugit
          atque labore. Numquam laudantium quas iste. Neque nam aliquam nesciunt
          aut ipsa? Delectus reiciendis aliquam eum dolor quisquam! Deserunt,
          minima maiores necessitatibus, recusandae dolore quaerat tempora non
          totam vel, magni cupiditate. Cupiditate natus quisquam voluptatem ex
          quasi molestias facere quis, sed numquam amet debitis eos veritatis
          deleniti voluptas odit necessitatibus explicabo placeat voluptate
          distinctio aliquam possimus veniam? Corporis dolor illo cum cumque
          voluptate totam ratione blanditiis consectetur. Deserunt delectus nam
          cumque quam, debitis enim omnis autem perferendis quis animi
          perspiciatis maiores velit possimus cupiditate. Ab quod, hic
          aspernatur dolore vitae odio fugit consectetur optio dolorem
          praesentium voluptates? Perferendis velit cupiditate aperiam, quam
          soluta nisi similique?
        </div>
      </div>
    </ShowDataBack>
  );
}

const ShowDataBack = styled.div`
  /* CSS */
  .button-55 {
    align-self: center;
    background-color: #fff;
    background-image: none;
    background-position: 0 90%;
    background-repeat: repeat no-repeat;
    background-size: 4px 3px;
    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
    box-sizing: border-box;
    color: #41403e;
    cursor: pointer;
    display: inline-block;
    font-family: Neucha, sans-serif;
    font-size: 1rem;
    line-height: 23px;
    outline: none;
    padding: 0.75rem;
    text-decoration: none;
    transition: all 235ms ease-in-out;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-55:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  .button-55:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
