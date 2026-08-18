data class Employee(val name: String, var salary: Int)

fun main() {
    val emp = Employee("Mary", 20)
    println(emp)

    emp.salary += 10

    println(emp)
}

data class Person(
    val name: Name,
    val address: Address,
    val ownsAPet: Boolean = true
)

data class Name(
    val firstName: String,
    val lastName: String
)

data class Address(
    val street: String,
    val city: City
)

data class City(
    val name: String,
    val country: String
)

fun main() {
    val person = Person(
        Name("John", "Smith"),
        Address("123 Fake Street", City("Springfield", "US")),
        ownsAPet = false
    )
}

import kotlin.random.Random

data class Employee(val name: String, var salary: Int)

class RandomEmployeeGenerator(
    var minSalary: Int,
    var maxSalary: Int
) {
    val names = listOf("John", "Mary", "Alex", "Emma", "James")

    fun generateEmployee(): Employee {
        val name = names.random()
        val salary = Random.nextInt(
            from = minSalary,
            until = maxSalary + 1
        )

        return Employee(name, salary)
    }
}

fun main() {
    val empGen = RandomEmployeeGenerator(10, 30)

    println(empGen.generateEmployee())
    println(empGen.generateEmployee())
    println(empGen.generateEmployee())

    empGen.minSalary = 50
    empGen.maxSalary = 100

    println(empGen.generateEmployee())
}
