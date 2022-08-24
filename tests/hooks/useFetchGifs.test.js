import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("Pruebas en hook useFetchGifs", () => {
  test("debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Rolling Stones"));
    const { current } = result;
    expect(current.images.length).toBe(0);
    expect(current.isLoading).toBe(true);
  });

  test("debe de retornar un arreglo de imágenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Rolling Stones"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
