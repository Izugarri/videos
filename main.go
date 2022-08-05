package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {
	fmt.Println("starting your http server!")
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}
	http.Handle("/", http.FileServer(http.Dir("/")))
	http.ListenAndServe(":"+port, nil)
}
