package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.model.UserDTO;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class MapperUtils {

    public Function<AnswerDTO, Answer> mapperToAnswer(String id) {
        return updateAnswer -> {
            var answer = new Answer();
            answer.setId(id);
            answer.setPosition(updateAnswer.getPosition());
            answer.setQuestionId(updateAnswer.getQuestionId());
            answer.setUserId(updateAnswer.getUserId());
            answer.setAnswer(updateAnswer.getAnswer());
            return answer;
        };
    }

    public Function<QuestionDTO, Question> mapperToQuestion(String id) {
        return updateQuestion -> {
            var question = new Question();
            question.setId(id);
            question.setUserId(updateQuestion.getUserId());
            question.setCategory(updateQuestion.getCategory());
            question.setQuestion(updateQuestion.getQuestion());
            question.setUserId(updateQuestion.getUserId());
            question.setType(updateQuestion.getType());
            return question;
        };
    }

    public Function<Question, QuestionDTO> mapEntityToQuestion() {
        return entity -> new QuestionDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getQuestion(),
                entity.getType(),
                entity.getCategory()
        );
    }

    public Function<Answer, AnswerDTO> mapEntityToAnswer() {
        return entity -> new AnswerDTO(
                entity.getId(),
                entity.getQuestionId(),
                entity.getUserId(),
                entity.getAnswer()
        );
    }

    public Function<UserDTO, User> mapperToUser() {
        return updateUser -> {
            var user = new User();
            user.setId(updateUser.getId());
            user.setName(updateUser.getName());
            user.setLastName(updateUser.getLastName());
            return user;
        };
    }

    public Function<User, UserDTO> mapEntityToUser() {
        return entity -> new UserDTO(
                entity.getId(),
                entity.getName(),
                entity.getLastName()
        );
    }
}
