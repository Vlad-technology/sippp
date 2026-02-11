package main

import (
	"fmt"
)

func main() {
	fmt.Println("Si++(Si+) Новый российскаий язык программирования V0.0.1 WARNING НЕ СТАБИЛЬНАЯ ВЕРСИЯ сайт sipp.its-astral.xyz")
	var a = 0
	var b string
	for a < 1 {
		fmt.Scan(&b)
		if b == "help" {
			fmt.Println("Si++(Si+) Новый российскаий язык программирования V0.0.1 WARNING НЕ СТАБИЛЬНАЯ ВЕРСИЯ сайт sipp.its-astral.xyz")
		} else {
			fmt.Println("Произошла ошибка при чтение файла")
		}
	}
}
