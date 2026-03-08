import { serveDir } from "jsr:@std/http/file-server";

Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: "public", // Carpeta que contiene los archivos
    showDirListing: true, {
    headers: {
      // Browser caches for 60s
      "Cache-Control": "public, max-age=5",
      // Deno Deploy CDN caches for 1 hour
      "Deno-CDN-Cache-Control": "public, s-maxage=6",
    },
  }
  });
});