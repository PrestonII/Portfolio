import { render, screen } from "@testing-library/react";
import Home from './home.layout';

describe("App", () => {
  it("renders without crashing", () => {
    const title = "FullStack Designer & Developer"
    render(<Home />);
    const element = screen.getAllByRole("heading", { name: title })[0];
    expect(element).toBeInTheDocument();
  });
});