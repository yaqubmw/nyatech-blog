import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlogCard from "@components/card/BlogCard";

describe("BlogCard", () => {
  const mockData = {
    link: 1,
    title: "Test Title",
    reactions: 5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://example.com/image.jpg",
    author: 1,
  };
  const mockAuthor = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
  };

  test("renders BlogCard component correctly", async () => {
    render(<BlogCard {...mockData} />);

    expect(screen.getByText(mockData.title)).toBeInTheDocument();

    expect(screen.getByText(mockData.content)).toBeInTheDocument();

    expect(
      screen.getByText(`Reactions: ${mockData.reactions}`)
    ).toBeInTheDocument();

    expect(
      screen.getByText(`${mockAuthor.firstName} ${mockAuthor.lastName}`)
    ).toBeInTheDocument();

    const bloglink = screen.getByTestId("blog-link");
    expect(bloglink).toHaveAttribute("href", `/blog/${mockData.link}`);
  });
});
