import { render, screen, fireEvent } from "@testing-library/react";
// import App from "./App";
import EightBall from "./EightBall";
import answers from "../data/answersData";

// smoke test
it("renders without crashing", () => {
  render(<EightBall answers={answers}> </EightBall>);
});

// snapshot test

it("matches snapshot", () => {
  const { asFragment } = render(<EightBall answers={answers}> </EightBall>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders welcome text", () => {
  // const { getByText } = render(<EightBall answers={answers}> </EightBall>);
  // console.log(getByText("Welcome! Think of a Question!", { exact: true }));
  render(<EightBall answers={answers}> </EightBall>);
  expect(screen.getByText("Welcome! Think of a Question!")).toBeInTheDocument();
});

it("renders new text after click", () => {
  render(<EightBall answers={answers}> </EightBall>);

  const ball = screen.getByText("Welcome! Think of a Question!");
  expect(ball).toHaveTextContent("Welcome! Thinks of a Question!");
  debugger;
  fireEvent.click(ball);

  expect(ball).not.toHaveTextContent("Welcome! Think of a Question!");
  // expect(
  //   screen.queryByText("Welcome! Think of a Question!")
  // ).not.toBeInTheDocument();
});
