package org.programming;

import java.util.List;

public class FP01Exercises {

    public static void main(String[] args) {
        // Exercise#1
//        List<Integer> numbers = List.of(12, 9, 13, 4, 6, 2, 4, 12, 15);
//        printOddNumbersInListFunctional(numbers);

        // Exercise#2
        List<String> courses =
                List.of("Spring", "Spring Boot", "API", "Microservices",
                        "AWS", "Azure", "Docker", "Kubernetes");

//        courses.stream()
//                .forEach(System.out::println);

        // Exercise#3
//        courses.stream()
//                .filter(course -> course.contains("Spring"))
//                .forEach(System.out::println);

        // Exercise#4
        courses.stream()
                .filter(course -> course.length() >= 4)
                .forEach(System.out::println);

    }

    private static void printOddNumbersInListFunctional(List<Integer> numbers) {
        numbers.stream()
                .filter(number -> number % 2 != 0) // Lambda Expression
                .forEach(System.out::println); // Method Reference

        //      .filter(FP01Functional::isEven) // Filter - Only Allow Even Numbers
    }

}
