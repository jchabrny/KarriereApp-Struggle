package com.github.jchabrny.backend.services;

import com.github.jchabrny.backend.models.Application;
import com.github.jchabrny.backend.models.JobCategory;
import com.github.jchabrny.backend.repositories.JobCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;


@Service
public class JobCategoryService {

    @Autowired
    JobCategoryRepository listRepository;

    public List<JobCategory> getAllLists() {

        return listRepository.findAll();
    }

    public void deleteListById(String listId) {

        listRepository.deleteById(listId);
    }

    public Optional<JobCategory> getListById(String listId) {

        return listRepository.findById(listId);
    }

    public JobCategory updateList(JobCategory updatedList) {
        List<Application> updatedJobList = updatedList.getListItems().stream().map(jobItem -> {
            if (jobItem.getJobId() == null) {
                jobItem.setJobId(UUID.randomUUID().toString());
            }
            return jobItem;
        }).toList();
        updatedList.setListItems(updatedJobList);
        return listRepository.save(updatedList);
    }

    public JobCategory saveNewList(JobCategory newJobCategory) {
        return listRepository.insert(newJobCategory);
    }

    public JobCategory removeItem(String listId, String jobId) {
        Optional<JobCategory> optionalJobList = listRepository.findById(listId);
        if (optionalJobList.isEmpty()) {
            throw new NoSuchElementException("List not found.");
        }
        JobCategory jobList = optionalJobList.get();
        List<Application> updatedJobItems = jobList.getListItems().stream().filter(jobItem -> {
            return (!jobItem.getJobId().equals(jobId));
        }).toList();
        jobList.setListItems(updatedJobItems);
        return listRepository.save(jobList);
    }
}
