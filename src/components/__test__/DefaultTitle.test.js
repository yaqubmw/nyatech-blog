import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DefaultTitle from "@components/title/DefaultTitle";

test("renders DefaultTitleJumbo component with title", () => {
  const mockTitle = "Test Title";
  render(<DefaultTitle text={mockTitle} />);

  expect(screen.getByText(mockTitle)).toBeInTheDocument();
});
