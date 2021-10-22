package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;
import reactor.test.StepVerifier;


import static org.mockito.Mockito.*;


@SpringBootTest
class ListUseCaseTest {

    @MockBean
     QuestionRepository questionRepository;

    @SpyBean
     ListUseCase listUseCase;




    @Test
     void getAllTest(){
        var question = new Question();
        question.setId("01");
        question.setUserId("u01");
        question.setQuestion("test?");
        question.setType("test");
        question.setCategory("test");

        Mockito.when(questionRepository.findAll()).thenReturn(Flux.just(question ));

        var resultQuestionDTO =  listUseCase.get().collectList().block();

        Assertions.assertEquals(resultQuestionDTO.get(0).getId(), question.getId());
        Assertions.assertEquals(resultQuestionDTO.get(0).getUserId(), question.getUserId());
        Assertions.assertEquals(resultQuestionDTO.get(0).getQuestion(), question.getQuestion());
        Assertions.assertEquals(resultQuestionDTO.get(0).getType(), question.getType());
        Assertions.assertEquals(resultQuestionDTO.get(0).getCategory(), question.getCategory());
    }
}