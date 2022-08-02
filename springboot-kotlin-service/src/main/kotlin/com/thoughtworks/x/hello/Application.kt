package com.thoughtworks.x.hello

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.*

@SpringBootApplication
class Application

fun main(args: Array<String>) {
    runApplication<Application>(*args)
}

@RestController
@RequestMapping("api/v1/hello")
class HelloController {

    @GetMapping
    fun hello(@RequestParam(required = false)  name: String? = null) : String {
        return if (name != null)
            "Hello, $name!!"
        else
            "Hello!"
    }
}