package models;

import org.springframework.data.annotation.Id;

public record User(
        @Id
        String id,
        String name,
        String password,
        Car car
) {



}
