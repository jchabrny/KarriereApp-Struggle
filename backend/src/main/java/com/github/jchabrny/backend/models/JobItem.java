package com.github.jchabrny.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class JobItem {

    @Id
    private String jobName;
    private String jobDate;
}
