package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import co.com.sofka.questions.reposioties.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CreateUserUseCaseTest {

    @SpyBean
    CreateUserUseCase createUserUseCase;

    @MockBean
    UserRepository userRepository;

    @Test
    public void createTest() {
        var userDTO = new UserDTO("01","name","lastName?");
        var user = new User();
        user.setId("01");
        user.setName("name");
        user.setLastName("lastName");

        Mockito.when(userRepository.save(Mockito.any(User.class))).thenReturn(Mono.just(user));

        var userId = createUserUseCase.apply(userDTO);

        Assertions.assertEquals(userId.block(),userDTO.getId());
    }
}