package com.github.jchabrny.backend.repositories;

import com.github.jchabrny.backend.models.JobCategory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JobCategoryRepository extends MongoRepository<JobCategory, String> {

}



