package co.com.sofka.questions.usecases;

import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Flux;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class FindByQuestionLikeUseCase implements Function<String, Flux<QuestionDTO>> {
    private final QuestionRepository questionRepository;
    private final MapperUtils mapperUtils;

    public FindByQuestionLikeUseCase(QuestionRepository questionRepository, MapperUtils mapperUtils) {
        this.questionRepository = questionRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Flux<QuestionDTO> apply(String search) {
        Objects.requireNonNull(search, "Search is required");
        return questionRepository.findByQuestionLike(search).map(mapperUtils.mapEntityToQuestion());
    }
}
