package co.com.sofka.questions.usecases;

import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DeleteAnswerUseCaseTest {
    @SpyBean
    DeleteAnswerUseCase deleteAnswerUseCase;

    @MockBean
    AnswerRepository answerRepository;

    @Test
    public void deleteTest(){
        var answerDTO = new AnswerDTO("01","01","u01","test");

        Mockito.when(answerRepository.deleteById(answerDTO.getId())).thenReturn(Mono.empty());

        var dataEmpty = deleteAnswerUseCase.apply(answerDTO.getId()).thenReturn(Mono.empty());

        Assertions.assertEquals(dataEmpty.block(),Mono.empty());
    }
}