package main

import (
	"net/http"
	"github.com/labstack/echo"
)

func main() {
	const VAR_PORT = ":4321" // Cont. indicador del puerto
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hola, Mundo!")
	})
	e.Logger.Fatal(e.Start(VAR_PORT))
}
// Ver más del framework Echo en https://echo.labstack.com.
