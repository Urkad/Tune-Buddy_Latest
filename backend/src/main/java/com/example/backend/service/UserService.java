package com.example.backend.service;


import com.example.backend.models.Car;
import com.example.backend.models.TuningPart;
import com.example.backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.repo.UserRepo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo userRepo;
    private final IdService idService;
    private final UserService userService;

    @Autowired
    public UserService(UserRepo userRepo, IdService idService, UserService userService) {
        this.userRepo = userRepo;
        this.idService = idService;
        this.userService = userService;
    }
    public User saveUser( User user) {
        User UserToSave= new User(
                user.id(),
                user.name(),
                user.password(),
                user.email(),
                new Car("id",
                        "picture",
                        "description",
                        List.of(new TuningPart("id","name","url"))
                        )
        );

        userRepo.save(UserToSave);

        return new User(
                UserToSave.id(),
                UserToSave.name(),
                UserToSave.password(),
                UserToSave.email(),
                UserToSave.car()
        );
    }



    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public Optional<User> getUserById(String id){
        return userRepo.findById(id);
    }

    public User addUser(User user){
        return userRepo.save(user);
    }
}
