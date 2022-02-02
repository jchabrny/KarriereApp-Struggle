package com.github.jchabrny.backend.repositories;

import com.github.jchabrny.backend.models.JobList;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ListRepository extends MongoRepository<JobList, String> {

    List<JobList> findAll();
}
