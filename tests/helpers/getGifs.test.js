import { getGifs } from "../../src/helpers/getGifs";

describe("pruebas sobre la función getGifs()", () => {
  test("debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("Dragon Ball");
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
