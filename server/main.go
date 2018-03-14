package main

import "github.com/coldsauce/livebadge-portal/server/auth"

// import "github.com/coldsauce/livebadge-portal/api"
import "net/http"
import "github.com/gorilla/mux"
import "github.com/urfave/negroni"

// main creates and starts a Server listening.
func main() {
	r := mux.NewRouter()
	address := "localhost:8080"
	dir := "./_frontend/build/"
	r = auth.InjectAuth(r)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir(dir)))

	n := negroni.Classic() // Includes some default middlewares
	n.UseHandler(r)

	http.ListenAndServe(address, n)
}
