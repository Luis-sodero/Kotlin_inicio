import kotlin.math.PI

fun circleArea(radius: Int): Double {
    return PI * radius * radius
}

fun main() {
    println(circleArea(2))
}

import kotlin.math.PI

fun circleArea(radius: Int) = PI * radius * radius

fun main() {
    println(circleArea(2))
}

fun intervalInSeconds(
    hours: Int = 0,
    minutes: Int = 0,
    seconds: Int = 0
) =
    ((hours * 60) + minutes) * 60 + seconds

fun main() {
    println(intervalInSeconds(hours = 1, minutes = 20, seconds = 15))
    println(intervalInSeconds(minutes = 1, seconds = 25))
    println(intervalInSeconds(hours = 2))
    println(intervalInSeconds(minutes = 10))
    println(intervalInSeconds(hours = 1, seconds = 1))
}

fun main() {
    val actions = listOf("title", "year", "author")
    val prefix = "https://example.com/book-info"
    val id = 5

    val urls = actions.map { action ->
        "$prefix/$id/$action"
    }

    println(urls)
}

fun repeatN(n: Int, action: () -> Unit) {
    repeat(n) {
        action()
    }
}

fun main() {
    repeatN(5) {
        println("Hello")
    }
}
