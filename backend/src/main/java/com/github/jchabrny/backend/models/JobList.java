package com.github.jchabrny.backend.models;

import lombok.Builder;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Builder
@Document(collection = "jobList")
public class JobList {

    @Id
    private String listId;
    private String listName;
}
