import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DefaultTitleJumbo from "@components/title/DefaultTitleJumbo";

test("renders DefaultTitleJumbo component with title", () => {
  const mockTitle = "Test Title";
  render(<DefaultTitleJumbo title={mockTitle} />);

  expect(screen.getByText(mockTitle)).toBeInTheDocument();
});

test("renders DefaultTitleJumbo component with default image", () => {
  const mockTitle = "Test Title";
  render(<DefaultTitleJumbo title={mockTitle} />);

  const defaultImage = screen.getByTestId("jumbo-bg");
  expect(defaultImage).toHaveStyle({
    backgroundImage: `url('https://res.cloudinary.com/ymwmedia/image/upload/v1692507110/dummy-image-post_vu8zlo.webp')`,
  });
});

test("renders DefaultTitleJumbo component with custom image", () => {
  const mockTitle = "Test Title";
  const mockImageUrl = "https://example.com/custom-image.webp";
  render(<DefaultTitleJumbo title={mockTitle} imageUrl={mockImageUrl} />);

  const customImage = screen.getByTestId("jumbo-bg");
  expect(customImage).toHaveStyle({
    backgroundImage: `url('${mockImageUrl}')`,
  });
});
