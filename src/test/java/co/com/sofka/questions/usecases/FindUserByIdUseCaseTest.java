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
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;



@SpringBootTest
class FindUserByIdUseCaseTest {

    @MockBean
    UserRepository userRepository;

    @SpyBean
    FindUserByIdUseCase findUserByIdUseCase;

    @Test
     void findUserByIdUseCaseTest() {
        var userDTO = new UserDTO("01","name","lastName?");
        var user = new User();
        user.setId("01");
        user.setName("name");
        user.setLastName("lastName");

        Mockito.when(userRepository.findById(userDTO.getId())).thenReturn(Mono.just(user));

        var resultUserDTO = findUserByIdUseCase.apply(user.getId()).block();

        assert resultUserDTO != null;
        Assertions.assertEquals(resultUserDTO.getId(), user.getId());
        Assertions.assertEquals(resultUserDTO.getName(), user.getName());
        Assertions.assertEquals(resultUserDTO.getLastName(), user.getLastName());
    }
}