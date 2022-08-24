import { GifGrid } from "../../src/components/GifGrid";
import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en componente <GifGrid />", () => {
  const category = "The Beatles";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.queryByText("Loading..."));
    expect(screen.queryByText(category));

    // screen.debug();
  });

  test("debe de mostrar items cuando se cargan las imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "1",
        title: "Pocha",
        url: "http://example.com/pocha.jpg",
      },
      {
        id: "2",
        title: "Pocha2",
        url: "http://example.com/pocha2.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
    // screen.debug();
  });
});
