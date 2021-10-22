package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Answer;

import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;



@SpringBootTest
class OwnerAnswersListUseCaseTest{

    @MockBean
    AnswerRepository answerRepository;

    @SpyBean
    OwnerAnswersListUseCase ownerAnswersListUseCase;

    @Test
    void ownerAnswersListTest(){
        var answerDTO = new AnswerDTO("01","01","u01","test");
        var answer = new Answer();
        answer.setId("01");
        answer.setQuestionId("01");
        answer.setUserId("u01");
        answer.setAnswer("test");

        Mockito.when(answerRepository.findByUserId(answerDTO.getUserId())).thenReturn(Flux.just(answer));

        var resultAnswerDTO =  ownerAnswersListUseCase.apply(answerDTO.getUserId()).collectList().block();

        assert resultAnswerDTO != null;
        Assertions.assertEquals(resultAnswerDTO.get(0).getId(), answer.getId());
        Assertions.assertEquals(resultAnswerDTO.get(0).getQuestionId(), answer.getQuestionId());
        Assertions.assertEquals(resultAnswerDTO.get(0).getUserId(), answer.getUserId());
        Assertions.assertEquals(resultAnswerDTO.get(0).getAnswer(), answer.getAnswer());
    }
}