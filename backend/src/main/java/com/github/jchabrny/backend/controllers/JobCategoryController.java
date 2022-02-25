package com.github.jchabrny.backend.controllers;

import com.github.jchabrny.backend.models.JobCategory;
import com.github.jchabrny.backend.services.JobCategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/list")
public class JobCategoryController {

    private final JobCategoryService jobCategoryService;

    public JobCategoryController(JobCategoryService jobCategoryService) {
        this.jobCategoryService = jobCategoryService;
    }

    //GET

    @GetMapping()
    public List<JobCategory> getAllLists() {

        return jobCategoryService.getAllLists();
    }

    @GetMapping(value = "{listId}")
    public JobCategory getListById(@PathVariable String listId) {
        return jobCategoryService.getListById(listId).get();
    }

    //ADD

    @PutMapping()
    public JobCategory saveNewList(@RequestBody JobCategory newJobCategory) {

        return jobCategoryService.saveNewList(newJobCategory);
    }

    @PatchMapping(value = "{listId}")
    public JobCategory updateList(@RequestBody JobCategory updatedList) {

        return jobCategoryService.updateList(updatedList);
    }

    // REMOVE

    @DeleteMapping(value = "{listId}")
    public void deleteListById(@PathVariable String listId) {

        jobCategoryService.deleteListById(listId);
    }

    @DeleteMapping(value = "/{listId}/removeItem/{jobId}")
    public JobCategory removeItem(@PathVariable String listId,
                                  @PathVariable String jobId)
    {
        return jobCategoryService.removeItem(listId, jobId);
    }
}



