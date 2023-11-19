import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@components/button/Button";

describe("Button Component", () => {
  test("render button dengan internal link", () => {
    render(<Button text="Internal Link" link="/internal" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("render button dengan eksternal link", () => {
    render(<Button text="Eksternal Link" link="https://external.com" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("test onClick dengan internal link", () => {
    const onClickMock = jest.fn();
    render(
      <Button
        text="Click Me"
        onClick={onClickMock}
        link="/internal"
      />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  test("test onClick dengan eksternal link", () => {
    const onClickMock = jest.fn();
    render(
      <Button
        text="Click Me"
        onClick={onClickMock}
        link="https://external.com"
      />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
