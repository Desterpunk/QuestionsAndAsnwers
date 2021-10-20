package co.com.sofka.questions.usecases;

import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Flux;

import java.util.function.Function;

@Service
@Validated
public class OwnerAnswersListUseCase implements Function<String, Flux<AnswerDTO>> {
    private final AnswerRepository answerRepository;
    private final MapperUtils mapperUtils;

    public OwnerAnswersListUseCase(MapperUtils mapperUtils, AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
        this.mapperUtils = mapperUtils;
    }


    @Override
    public Flux<AnswerDTO> apply(String userId) {
        return answerRepository.findByUserId(userId)
                .map(mapperUtils.mapEntityToAnswer());
    }
}
