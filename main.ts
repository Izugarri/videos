import { serveDir } from "jsr:@std/http/file-server";

Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: "./", // Carpeta que contiene los archivos
    showDirListing: true, {
    headers: {
      "Cache-Control": "public, s-maxage=5", "Deno-CDN-Cache-Control": "public, s-maxage=6",
    },}
  });
});