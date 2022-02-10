package com.github.jchabrny.backend.services;

import com.github.jchabrny.backend.models.JobItem;
import com.github.jchabrny.backend.models.JobList;
import com.github.jchabrny.backend.repositories.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;


@Service
public class ListService {

    @Autowired
    ListRepository listRepository;

    public List<JobList> getAllLists() {
        return listRepository.findAll();
    }

    public void deleteListById(String listId) {
        listRepository.deleteById(listId);
    }

    public Optional<JobList> getListById(String listId) {
        return listRepository.findById(listId);
    }

    public JobList updateList(JobList updatedList) {
        List<JobItem> updatedJobList = updatedList.getListItems().stream().map((jobItem) -> {
            if (jobItem.getJobId() == null) {
                jobItem.setJobId(UUID.randomUUID().toString());
            }
            return jobItem;
        }).toList();
        updatedList.setListItems(updatedJobList);
        return listRepository.save(updatedList);
    }

    public JobList saveNewList(JobList newList) {
        return listRepository.insert(newList);
    }

    public JobList removeItem(String listId, String jobId) {
        Optional<JobList> optionalJobList = listRepository.findById(listId);
        if (optionalJobList.isEmpty()) {
            throw new NoSuchElementException("List not found.");
        }
        JobList jobList = optionalJobList.get();
        List<JobItem> updatedJobItems = jobList.getListItems().stream().filter((jobItem) -> {
            return (!jobItem.getJobId().equals(jobId));
        }).toList();
        jobList.setListItems(updatedJobItems);
        return listRepository.save(jobList);
    }
}
