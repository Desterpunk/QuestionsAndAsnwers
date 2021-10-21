package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import co.com.sofka.questions.reposioties.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

@Service
@Validated
public class CreateUserUseCase implements SaveUser {
    private final UserRepository userRepository;
    private final MapperUtils mapperUtils;

    public CreateUserUseCase(MapperUtils mapperUtils, UserRepository userRepository) {
        this.userRepository = userRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<String> apply(UserDTO newUser) {
        return userRepository
                .save(mapperUtils.mapperToUser().apply(newUser))
                .map(User::getId);
    }

}