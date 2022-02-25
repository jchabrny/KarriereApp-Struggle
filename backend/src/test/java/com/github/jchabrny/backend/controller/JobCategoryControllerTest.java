package com.github.jchabrny.backend.controller;

import com.github.jchabrny.backend.controllers.JobCategoryController;
import com.github.jchabrny.backend.models.JobCategory;
import com.github.jchabrny.backend.services.JobCategoryService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class JobCategoryControllerTest {
    JobCategoryService listService = mock(JobCategoryService.class);
    JobCategoryController listController = new JobCategoryController(listService);

    @Test
    public void testGetAllLists() {

        //given
        ArrayList<JobCategory> testList = new ArrayList<>(List.of(
                new JobCategory("1234", "Hamburg", List.of()),
                new JobCategory("2345", "Cologne", List.of()),
                new JobCategory("3456", "Leipzig", List.of())));

        //when
        when(listService.getAllLists()).thenReturn(testList);
        List<JobCategory> actual = listController.getAllLists();

        //then
        verify(listService).getAllLists();
        assertThat(actual, Matchers.containsInAnyOrder(new JobCategory("1234", "Hamburg", List.of()),
                new JobCategory("2345", "Cologne", List.of()),
                new JobCategory("3456", "Leipzig", List.of())));
    }
}
