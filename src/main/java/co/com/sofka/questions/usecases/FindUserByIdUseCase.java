package co.com.sofka.questions.usecases;


import co.com.sofka.questions.model.UserDTO;

import co.com.sofka.questions.reposioties.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class FindUserByIdUseCase implements Function<String, Mono<UserDTO>> {
    private final UserRepository userRepository;
    private final MapperUtils mapperUtils;

    public FindUserByIdUseCase(UserRepository userRepository, MapperUtils mapperUtils) {
        this.userRepository = userRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<UserDTO> apply(String id) {
        Objects.requireNonNull(id, "id is required");
        return userRepository.findById(id).map(mapperUtils.mapEntityToUser());
    }
}