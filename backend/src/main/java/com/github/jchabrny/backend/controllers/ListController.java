package com.github.jchabrny.backend.controllers;

import com.github.jchabrny.backend.models.JobList;
import com.github.jchabrny.backend.services.ListService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/list")
public class ListController {

    private final ListService listService;

    public ListController(ListService listService) {
        this.listService = listService;
    }

    //GET

    @GetMapping()
    public List<JobList> getAllLists() {

        return listService.getAllLists();
    }

    @GetMapping(value = "{listId}")
    public JobList getListById(@PathVariable String listId) {

        return listService.getListById(listId).get();
    }

    //ADD

    @PutMapping()
    public JobList saveNewList(@RequestBody JobList newJobList) {

        return listService.saveNewList(newJobList);
    }

    @PatchMapping(value = "{listId}")
    public JobList updateList(@RequestBody JobList updatedList) {

        return listService.updateList(updatedList);
    }

    // REMOVE

    @DeleteMapping(value = "{listId}")
    public void deleteListById(@PathVariable String listId) {

        listService.deleteListById(listId);
    }

    @DeleteMapping(value = "/{listId}/removeItem/{jobId}")
    public JobList removeItem(@PathVariable String listId,
                              @PathVariable String jobId)
    {
        return listService.removeItem(listId, jobId);
    }

    /*

    // EDIT

    @PostMapping("/editItem/{listId}")
    public List<JobItem> changeItem(@PathVariable String listId,
    @RequestParam String jobId,
    @RequestParam String newJobName) {
    return service.changeItem(listId, jobId, newJobName);
    }
     */

}



