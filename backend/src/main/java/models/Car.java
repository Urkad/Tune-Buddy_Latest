package models;

import org.springframework.data.annotation.Id;

public record Car(
        @Id
        String id,
        String img,
        String description,
        TuningPart[] tuningParts
) {
}
