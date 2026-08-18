import kotlin.random.Random

fun main() {
    val firstResult = Random.nextInt(6)
    val secondResult = Random.nextInt(6)

    if (firstResult == secondResult) {
        println("You win :)")
    } else {
        println("You lose :(")
    }
}

fun main() {
    val button = "A"

    println(
        when (button) {
            "A" -> "Yes"
            "B" -> "No"
            "X" -> "Menu"
            "Y" -> "Nothing"
            else -> "There is no such button"
        }
    )
}

fun main() {

    var pizzaSlices = 0

    while (pizzaSlices < 8) {
        pizzaSlices++

        if (pizzaSlices < 8) {
            println("There's only $pizzaSlices slice/s of pizza :(")
        }
    }

    println("There are $pizzaSlices slices of pizza. Hooray! We have a whole pizza! :D")
}

fun main() {
    for (number in 1..100) {
        if (number % 3 == 0 && number % 5 == 0) {
            println("fizzbuzz")
        } else if (number % 3 == 0) {
            println("fizz")
        } else if (number % 5 == 0) {
            println("buzz")
        } else {
            println(number)
        }
    }
}

fun main() {
    val words = listOf("dinosaur", "limousine", "magazine", "language")

    for (word in words) {
        if (word.startsWith("l")) {
            println(word)
        }
    }
}
