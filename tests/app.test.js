import { render, screen } from "@testing-library/react";
import Home from '../components/home/home.layout';

describe("App", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
});