fun main() {
    val greenNumbers = listOf(1, 4, 23)
    val redNumbers = listOf(17, 2)

    val total = greenNumbers.size + redNumbers.size
    println(total)
}

fun main() {
    val SUPPORTED = setOf("HTTP", "HTTPS", "FTP")
    val requested = "smtp"

    val isSupported = SUPPORTED.contains(requested.uppercase())

    println("Support for $requested: $isSupported")
}

fun main() {
    val number2word = mapOf(
        1 to "one",
        2 to "two",
        3 to "three"
    )

    val n = 2

    println("$n is spelled as '${number2word[n]}'")
}
