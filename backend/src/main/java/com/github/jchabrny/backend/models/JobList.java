package com.github.jchabrny.backend.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Builder
@Document(collection = "jobLists")
public class JobList {

    @Id
    private String listId;
    private String listName;
    private List<JobItem> listItems;
}
