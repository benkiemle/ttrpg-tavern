package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"runtime/pprof"
)

//go:embed all:tavern/dist
var nextFS embed.FS

func main() {
	distFS, err := fs.Sub(nextFS, "tavern/dist")
	if err != nil {
		log.Fatal(err)
	}

	http.Handle("/", http.FileServer(http.FS(distFS)))
	http.HandleFunc("/api", handleAPI)

	log.Println("Starting HTTP server at http://localhost:8080 ...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleAPI(w http.ResponseWriter, _ *http.Request) {
	profile := pprof.Lookup("allocs")

	err := profile.WriteTo(w, 1)
	if err != nil {
		log.Printf("Error: failed to write allocs profile: %v", err)
	}
}
