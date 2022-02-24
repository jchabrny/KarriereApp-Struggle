package com.github.jchabrny.backend.controller;

import com.github.jchabrny.backend.controllers.ListController;
import com.github.jchabrny.backend.models.JobList;
import com.github.jchabrny.backend.services.ListService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.Mockito.*;

public class ListControllerTest {
    ListService listService = mock(ListService.class);
    ListController listController = new ListController(listService);

    @Test
    public void testGetAllLists() {

        //given
        ArrayList<JobList> testList = new ArrayList<>(List.of(
                new JobList("1234", "Hamburg", List.of()),
                new JobList("2345", "Cologne", List.of()),
                new JobList("3456", "Leipzig", List.of())));

        //when
        when(listService.getAllLists()).thenReturn(testList);
        List<JobList> actual = listController.getAllLists();

        //then
        verify(listService).getAllLists();
        assertThat(actual, Matchers.containsInAnyOrder(new JobList("1234", "Hamburg", List.of()),
                new JobList("2345", "Cologne", List.of()),
                new JobList("3456", "Leipzig", List.of())));
    }
}
