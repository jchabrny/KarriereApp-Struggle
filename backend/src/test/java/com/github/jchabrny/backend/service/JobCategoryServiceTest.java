package com.github.jchabrny.backend.service;

import com.github.jchabrny.backend.models.JobCategory;
import com.github.jchabrny.backend.repositories.JobCategoryRepository;
import com.github.jchabrny.backend.services.JobCategoryService;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static com.mongodb.assertions.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;


class JobCategoryServiceTest {

    // GIVEN

    private final JobCategoryRepository mockRepository = mock(JobCategoryRepository.class);
    private final JobCategoryService listService = new JobCategoryService();

    @Test
    void mockRepositoryIsEmpty() {

        // GIVEN
        when(mockRepository.findAll()).thenReturn(null);

        // WHEN
        List<JobCategory> actual = listService.getAllLists();

        // THEN
        assertTrue(actual.isEmpty());
    }

    @Test
    void mockRepositoryReturnsAJobList() {

        // GIVEN
        when(mockRepository.findAll()).thenReturn(
                List.of(
                        new JobCategory("1234", "Potsdam", List.of())
                )
        );

        // WHEN
        List<JobCategory> actual = listService.getAllLists();

        // THEN
        assertFalse(actual.isEmpty());

        JobCategory actualFirstJobList = actual.get(0);
        assertEquals("1234", actualFirstJobList.getListId());
        assertEquals("Potsdam", actualFirstJobList.getListName());
    }

    @Test
    void testDeleteListById() {

        // GIVEN
        String listId = "1234";

        // WHEN
        listService.deleteListById("1234");

        // THEN
        verify(mockRepository, times(1)).deleteById(listId);
    }

    @Test
    void testGetListById() {

        // GIVEN
        when(mockRepository.findById("1234")).thenReturn
                (Optional.of(new JobCategory("1234", "Potsdam", List.of())));

        // WHEN
        Optional<JobCategory> actual = listService.getListById("1234");

        // THEN
        Optional<JobCategory> expected = Optional.of(new JobCategory("1234", "Potsdam", List.of()));
        assertEquals(expected, actual);
    }

    @Test
    void testGetNoListById() {

        // GIVEN
        when(mockRepository.findById("")).thenReturn(Optional.empty());

        // WHEN
        Optional<JobCategory> actual = listService.getListById("");

        // THEN
        Optional<JobCategory> expected = Optional.empty();
        assertEquals(expected, actual);
    }

    @Test
    void testJobListWillBeCreatedWithNoJobItems() {

        // GIVEN
        JobCategory jobList = new JobCategory(null, "Potsdam", List.of());
        JobCategory result = new JobCategory("1234", "Potsdam", List.of());
        when(mockRepository.insert(jobList)).thenReturn(result);

        // WHEN
        JobCategory actual = listService.saveNewList(jobList);

        // THEN
        assertEquals(actual, result);
    }
}

