package com.github.jchabrny.backend.services;

import com.github.jchabrny.backend.models.JobList;
import com.github.jchabrny.backend.repositories.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ListService {

    @Autowired
    ListRepository listRepository;

    public List<JobList> getAll() {
        return listRepository.findAll();
    }

    public void deleteListById(String listId) {
        listRepository.deleteById(listId);
    }

    public Optional<JobList> getListById(String listId) {
        return listRepository.findById(listId);
    }

    public JobList updateList(JobList updatedList) {
        return listRepository.save(updatedList);
    }

    public JobList saveNewList(JobList newList) {
        return listRepository.insert(newList);
    }
}
