package main

import "github.com/coldsauce/livebadge-portal/auth"

// import "github.com/coldsauce/livebadge-portal/api"
import "net/http"

// main creates and starts a Server listening.
func main() {
	mux := http.NewServeMux()

	address := "localhost:8080"
	mux = auth.InjectAuth(mux)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./frontend/build"))))

	http.ListenAndServe(address, mux)
}
