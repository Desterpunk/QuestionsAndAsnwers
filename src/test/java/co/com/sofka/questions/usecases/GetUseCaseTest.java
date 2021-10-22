package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;

import co.com.sofka.questions.model.QuestionDTO;

import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class GetUseCaseTest {

    @MockBean
    QuestionRepository questionRepository;

    @MockBean
    AnswerRepository answerRepository;

    @SpyBean
    GetUseCase getUseCase;

    @Test
    void getUseCaseTest() {
        var questionDTO = new QuestionDTO("01","u01","test?","test","test");

        var question = new Question();
        question.setId("01");
        question.setUserId("u01");
        question.setQuestion("test?");
        question.setType("test");
        question.setCategory("test");
        var answer = new Answer();
        answer.setId("01");
        answer.setQuestionId("01");
        answer.setUserId("u01");
        answer.setAnswer("test");

        Mockito.when(questionRepository.findById(questionDTO.getId())).thenReturn(Mono.just(question));
        Mockito.when(answerRepository.findAllByQuestionId(questionDTO.getId())).thenReturn(Flux.just(answer));

        var resultQuestionDTO = getUseCase.apply(question.getId()).block();

        assert resultQuestionDTO != null;
        Assertions.assertEquals(resultQuestionDTO.getId(), question.getId());
        Assertions.assertEquals(resultQuestionDTO.getUserId(), question.getUserId());
        Assertions.assertEquals(resultQuestionDTO.getQuestion(), question.getQuestion());
        Assertions.assertEquals(resultQuestionDTO.getType(), question.getType());
        Assertions.assertEquals(resultQuestionDTO.getCategory(), question.getCategory());

        Assertions.assertEquals(resultQuestionDTO.getAnswers().get(0).getId(), answer.getId());
        Assertions.assertEquals(resultQuestionDTO.getAnswers().get(0).getQuestionId(), answer.getQuestionId());
        Assertions.assertEquals(resultQuestionDTO.getAnswers().get(0).getUserId(), answer.getUserId());
        Assertions.assertEquals(resultQuestionDTO.getAnswers().get(0).getAnswer(), answer.getAnswer());


    }
}