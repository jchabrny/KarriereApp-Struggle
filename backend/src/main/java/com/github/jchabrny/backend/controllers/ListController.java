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

    @GetMapping(value = "/getAll")
    public List<JobList> getAllLists() {

        return listService.getAllLists();
    }

    @GetMapping(value = "getById/{listId}")
    public JobList getListById(@PathVariable String listId) {

        return listService.getListById(listId).get();
    }

    //ADD

    @PutMapping(value = "/saveNew")
    public JobList saveNewList(@RequestBody JobList newJobList) {

        return listService.saveNewList(newJobList);
    }

    @PatchMapping(value = "/update")
    public JobList updateList(@RequestBody JobList updatedList) {

        return listService.updateList(updatedList);
    }

    // REMOVE

    @DeleteMapping(value = "/remove/{listId}")
    public void deleteListById(@PathVariable String listId) {

        listService.deleteListById(listId);
    }
}



